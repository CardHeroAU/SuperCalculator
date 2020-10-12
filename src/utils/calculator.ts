import * as INCOME_TAX_TABLE from "../data/individual-income-tax.json";
import * as SUPER_TAX_TABLE from "../data/super-tax.json";
import {currencyFormatter} from "./formatter";

export const calculateMarginalTaxRate = (taxableIncome: number) => {
  const taxBrackets = INCOME_TAX_TABLE.resident;

  for (let i = 0; i < taxBrackets.length; i++) {
    const taxBracket = taxBrackets[i];
    const nextBracket = i < taxBrackets.length - 1 ? taxBrackets[i + 1] : undefined;

    if (!nextBracket) {
      return taxBracket.rate;
    }

    if (taxableIncome >= taxBracket.minimum && taxableIncome <= nextBracket.minimum) {
      return taxBracket.rate;
    }
  }

  return 0;
}

export const calculateIncomeTaxFor = (taxableIncome: number): [number, string] => {

  const taxBrackets = INCOME_TAX_TABLE.resident;

  let tax = 0;
  var formula = "";
  // console.log("Calculating Tax for income: ", taxableIncome);
  for (let i = 0; i < taxBrackets.length; i++) {
    const taxBracket = taxBrackets[i];
    const nextBracket = i < taxBrackets.length - 1 ? taxBrackets[i + 1] : undefined;

    if (taxableIncome <= taxBracket.minimum) {
      // console.log(`TaxableIncome ${taxableIncome} not in this bracket: ${taxBracket.rate}`)
      return [tax, formula];
    } else if (!nextBracket) {
      // console.log(`TaxableIncome ${taxableIncome} in the highest bracket: ${taxBracket.rate}`)
      const increment = (taxableIncome - taxBracket.minimum) * taxBracket.rate;
      formula += `(${currencyFormatter.format(taxableIncome)} - ${currencyFormatter.format(taxBracket.minimum)}) x ${(taxBracket.rate * 100).toFixed(2)}%`
      tax += increment;
      return [tax, formula];
      // console.log("Tax incremented by ", increment, ". It is now: ", tax);
    } else if (taxableIncome >= taxBracket.minimum && taxableIncome <= nextBracket.minimum) {
      // console.log(`TaxableIncome ${taxableIncome} ends in this bracket: ${taxBracket.rate}`)
      const increment = (taxableIncome - taxBracket.minimum) * taxBracket.rate;
      formula += `(${currencyFormatter.format(taxableIncome)} - ${currencyFormatter.format(taxBracket.minimum)}) x ${(taxBracket.rate * 100).toFixed(2)}%`
      tax += increment;
      // console.log("Tax incremented by ", increment, ". It is now: ", tax);
    } else {
      // console.log(`TaxableIncome ${taxableIncome} exceeds this bracket: ${taxBracket.rate}`);
      const increment = (nextBracket.minimum - taxBracket.minimum) * taxBracket.rate;
      formula += `(${currencyFormatter.format(nextBracket.minimum)} - ${currencyFormatter.format(taxBracket.minimum)}) x ${(taxBracket.rate * 100).toFixed(2)}%`
      formula += ` + `
      tax += increment;
      // console.log("Tax incremented by ", increment, ". It is now: ", tax);
    }
  }
  return [tax, formula];
}

export const calculateSuperTaxFor = (superannuation: number, taxableIncome: number) => {
  if (superannuation <= SUPER_TAX_TABLE.consessionalContributionCap) {
    return [calculateConsessionalTaxFor(superannuation), 0];
  } else {
    const consessionalContributionTax = calculateConsessionalTaxFor(SUPER_TAX_TABLE.consessionalContributionCap);
    const excessConsessionalContributionTax = calculateExcessContributionTaxFor(superannuation, taxableIncome);
    return [consessionalContributionTax, excessConsessionalContributionTax];
  }
}

export const calculateExcessContributionTaxFor = (superannuation: number, taxableIncome: number) => {
  const marginalTaxRate = calculateMarginalTaxRate(taxableIncome);
  return (superannuation - SUPER_TAX_TABLE.consessionalContributionCap) * marginalTaxRate;
}

export const calculateConsessionalTaxFor = (superannuation: number) => {
  if (superannuation <= SUPER_TAX_TABLE.consessionalContributionCap) {
    return superannuation * SUPER_TAX_TABLE.consessoinalContributionRate;
  } else {
    throw new Error("calculateConsessionalTaxFor(): " + superannuation + "exceeds concessional contribution cap" + SUPER_TAX_TABLE.consessionalContributionCap);
  }
}
