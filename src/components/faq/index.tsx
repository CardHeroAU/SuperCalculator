import {IncomeCalculation} from "./IncomeCalculation";
import {IncomeTaxation} from "./IncomeTaxation";
import {SuperCalculation} from "./SuperCalculation";
import {SuperTaxation} from "./SuperTaxation";
import {TotalTaxation} from "./TotalTaxCalculation";
import React from "react";
import {WhatIsSuper} from "./WhatIsSuper";
import {WhySalarySacrifice} from "./WhySalarySacrifice";
import {SalarySacrificeLess} from "./SalarySacrificeLess";
import {IsItLegal} from "./IsItLegal";

export const FAQs = () => {
  return (
    <>
      <WhatIsSuper />
      <WhySalarySacrifice />
      <SalarySacrificeLess />
      <IsItLegal />
      <IncomeCalculation/>
      <IncomeTaxation/>
      <SuperCalculation/>
      <SuperTaxation/>
      <TotalTaxation/>
    </>
  )
}
