import {IncomeCalculation} from "./IncomeCalculation";
import {IncomeTaxation} from "./IncomeTaxation";
import {SuperCalculation} from "./SuperCalculation";
import {SuperTaxation} from "./SuperTaxation";
import {TotalTaxation} from "./TotalTaxCalculation";
import React from "react";

export const FAQs = () => {
  return (
    <>
      <IncomeCalculation/>
      <IncomeTaxation/>
      <SuperCalculation/>
      <SuperTaxation/>
      <TotalTaxation/>
    </>
  )
}
