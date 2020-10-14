import React from 'react';
import { IncomeCalculation } from './IncomeCalculation';
import { IncomeTaxation } from './IncomeTaxation';
import { SuperCalculation } from './SuperCalculation';
import { SuperTaxation } from './SuperTaxation';
import { TotalTaxation } from './TotalTaxCalculation';
import { WhatIsSuper } from './WhatIsSuper';
import { WhySalarySacrifice } from './WhySalarySacrifice';
import { SalarySacrificeLess } from './SalarySacrificeLess';
import { IsItLegal } from './IsItLegal';

export const FAQs = () => (
  <>
    <WhatIsSuper />
    <WhySalarySacrifice />
    <SalarySacrificeLess />
    <IsItLegal />
    <TotalTaxation />
    <IncomeCalculation />
    <IncomeTaxation />
    <SuperCalculation />
    <SuperTaxation />
  </>
);
