import * as INCOME_TAX_TABLE from "../data/individual-income-tax.json";
import * as SUPER_TAX_TABLE from "../data/super-tax.json";

const calculateMarginalTaxRate = (taxableIncome: number) => {
  const taxBrackets = INCOME_TAX_TABLE.resident;

  for (let i = 0; i < taxBrackets.length; i++) {
    const taxBracket = taxBrackets[i];
    if (taxableIncome >= taxBracket.minimum && taxableIncome <= taxBracket.maximum) {
      return taxBracket.rate;
    }
  }

  return 0;
}

export const calculateIncomeTaxFor = (taxableIncome: number) => {

  const taxBrackets = INCOME_TAX_TABLE.resident;

  let remainder = taxableIncome;
  let tax = 0;
  // console.log("Calculating Tax for income: ", taxableIncome);
  for (let i = 0; i < taxBrackets.length; i++) {
    // console.log("remainder is: ", remainder);
    const taxBracket = taxBrackets[i];
    if (remainder === 0) {
      // console.log("remainder is 0, do nothing for", taxBracket);
    } else if (remainder <= taxBracket.maximum) {
      // console.log("remainder is less than maximum", taxBracket);
      tax += remainder * taxBracket.rate;
      // console.log("incremented tax by ", remainder * taxBracket.rate, "tax is now: ", tax);
      remainder = 0;
    } else {
      // console.log("remainder is more than maximum", taxBracket);
      tax += (taxBracket.maximum - taxBracket.minimum) * taxBracket.rate;
      remainder -= (taxBracket.maximum - taxBracket.minimum);
      // console.log("incremented tax by ", (taxBracket.maximum - taxBracket.minimum) * taxBracket.rate, "tax is now: ", tax);
    }
  }

  return tax;
}

export const calculateSuperTaxFor = (superanuation: number, taxableIncome: number) => {

  if (superanuation <= SUPER_TAX_TABLE.consessionalContributionCap) {
    return superanuation * SUPER_TAX_TABLE.consessoinalContributionRate;
  } else {
    const consessionalContributionTax = SUPER_TAX_TABLE.consessionalContributionCap * SUPER_TAX_TABLE.consessoinalContributionRate;
    const marginalTaxRate = calculateMarginalTaxRate(taxableIncome)
    const excessConsessionalContributionTax = (superanuation - SUPER_TAX_TABLE.consessionalContributionCap) * marginalTaxRate;
    return consessionalContributionTax + excessConsessionalContributionTax;
  }
}
