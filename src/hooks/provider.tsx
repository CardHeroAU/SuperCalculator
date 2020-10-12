import * as React from 'react';
import { SuperCalculatorContext } from './context';
import {calculateIncomeTaxFor, calculateSuperTaxFor} from "../utils/calculator";
import {SUPER_GUARUNTEE} from "../utils/constants";
import {currencyFormatter} from "../utils/formatter";

interface SuperCalculatorProviderProps {
  totalIncome: number;
  sacrificeRate: number;
}

export const SuperCalculatorProvider: React.FunctionComponent<SuperCalculatorProviderProps> = ({ children, totalIncome,sacrificeRate }) => {

  const superGuarantee = totalIncome * SUPER_GUARUNTEE;
  const salarySacrifice = totalIncome * sacrificeRate;

  const taxableIncomeBefore = totalIncome;
  const taxableIncomeAfter = totalIncome - salarySacrifice;

  const totalSuperBefore = superGuarantee;
  const totalSuperAfter = superGuarantee + salarySacrifice;

  const [incomeTaxBefore, formulaBefore] = calculateIncomeTaxFor(taxableIncomeBefore);
  const [concessionalTaxBefore, excessTaxBefore] = calculateSuperTaxFor(totalSuperBefore, taxableIncomeBefore);
  const superTaxBefore = concessionalTaxBefore + excessTaxBefore;

  const [incomeTaxAfter, formulaAfter] = calculateIncomeTaxFor(taxableIncomeAfter);
  const [concessionalTaxAfter, excessTaxAfter] = calculateSuperTaxFor(totalSuperAfter, taxableIncomeAfter);
  const superTaxAfter = concessionalTaxAfter + excessTaxAfter;

  const before = {
    income: {
      total: totalIncome,
      taxable: taxableIncomeBefore,
      tax: incomeTaxBefore,
      formula: formulaBefore,
    },
    super: {
      total: totalSuperBefore,
      concessional: {
        guarantee: superGuarantee,
        sacrifice: 0,
      },
      tax: superTaxBefore,
      formula: `${currencyFormatter.format(concessionalTaxBefore)} + ${currencyFormatter.format(excessTaxBefore)}`,
    }
  };

  const after = {
    income: {
      total: totalIncome,
      taxable: taxableIncomeAfter,
      tax: incomeTaxAfter,
      formula: formulaAfter,
    },
    super: {
      total: totalSuperAfter,
      concessional: {
        guarantee: superGuarantee,
        sacrifice: salarySacrifice,
      },
      tax: superTaxAfter,
      formula: `${currencyFormatter.format(concessionalTaxAfter)} + ${currencyFormatter.format(excessTaxAfter)}`,
    }
  };

  return (
    <SuperCalculatorContext.Provider value={{
      sacrificeRate,
      before,
      after,
    }}>
      {children}
    </SuperCalculatorContext.Provider>
  );
};
