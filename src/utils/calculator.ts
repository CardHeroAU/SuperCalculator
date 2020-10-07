import * as INCOME_TAX_TABLE from "../data/individual-income-tax.json";
import * as SUPER_TAX_TABLE from "../data/super-tax.json";
import {Typography} from "@material-ui/core";
import React from "react";
import {currencyFormatter} from "./formatter";

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

export const calculateIncomeTaxFor = (taxableIncome: number): [number, string] => {

  const taxBrackets = INCOME_TAX_TABLE.resident;

  let tax = 0;
  var formula = "";
  console.log("Calculating Tax for income: ", taxableIncome);
  for (let i = 0; i < taxBrackets.length; i++) {
    const taxBracket = taxBrackets[i];
    if (taxableIncome <= taxBracket.minimum) {
      console.log(`TaxableIncome ${taxableIncome} not in this bracket: ${taxBracket.rate}`)
      return [tax, formula];
    } else if (taxableIncome >= taxBracket.minimum && taxableIncome <= taxBracket.maximum) {
      console.log(`TaxableIncome ${taxableIncome} ends in this bracket: ${taxBracket.rate}`)
      const increment = (taxableIncome - taxBracket.minimum) * taxBracket.rate;
      formula += `(${currencyFormatter.format(taxBracket.maximum)} - ${currencyFormatter.format(taxBracket.minimum)}) x ${(taxBracket.rate * 100).toFixed(2)}%`
      tax += increment;
      console.log("Tax incremented by ", increment, ". It is now: ", tax);
    } else {
      console.log(`TaxableIncome ${taxableIncome} exceeds this bracket: ${taxBracket.rate}`);
      const increment = (taxBracket.maximum - taxBracket.minimum) * taxBracket.rate;
      formula += `(${currencyFormatter.format(taxBracket.maximum)} - ${currencyFormatter.format(taxBracket.minimum)}) x ${(taxBracket.rate * 100).toFixed(2)}%`
      formula += ` + `
      tax += increment;
      console.log("Tax incremented by ", increment, ". It is now: ", tax);
    }
  }
  return [tax, formula];
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
