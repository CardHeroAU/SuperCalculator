import {IncomeCalculation} from "./IncomeCalculation";
import {IncomeTaxation} from "./IncomeTaxation";
import {SuperCalculation} from "./SuperCalculation";
import {SuperTaxation} from "./SuperTaxation";
import {TotalTaxation} from "./TotalTaxCalculation";
import React from "react";
import {WhatIsSuper} from "./WhatIsSuper";

export const FAQs = () => {
  return (
    <>
      <WhatIsSuper/>
      <IncomeCalculation/>
      <IncomeTaxation/>
      <SuperCalculation/>
      <SuperTaxation/>
      <TotalTaxation/>
    </>
  )
}
