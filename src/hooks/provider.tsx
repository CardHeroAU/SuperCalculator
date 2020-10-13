import * as React from 'react';
import { SuperCalculatorContext } from './context';
import {calculateConcessionalSuper, calculateIncomeTaxFor, calculateSuperTaxFor} from "../utils/calculator";
import {SUPER_GUARUNTEE} from "../utils/constants";

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
  const [concessionalContributionBefore, excessContributionBefore] = calculateConcessionalSuper(totalSuperBefore);
  const [concessionalTaxBefore, excessTaxBefore] = calculateSuperTaxFor(totalSuperBefore, taxableIncomeBefore);
  const superTaxBefore = concessionalTaxBefore + excessTaxBefore;

  const [incomeTaxAfter, formulaAfter] = calculateIncomeTaxFor(taxableIncomeAfter);
  const [concessionalContributionAfter, excessContributionAfter] = calculateConcessionalSuper(totalSuperAfter);
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
      tax: superTaxBefore,
      formula: `${concessionalTaxBefore} + ${excessTaxBefore}`,
      concessional: {
        total: concessionalContributionBefore,
        tax: concessionalTaxBefore,
        formula: `${concessionalTaxBefore} + ${excessTaxBefore}`,
        guarantee: superGuarantee,
        sacrifice: 0
      },
      excess: {
        total: excessContributionBefore,
        tax: excessTaxBefore,
        formula: ""
      }
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
      tax: superTaxAfter,
      formula: `${concessionalTaxAfter} + ${excessTaxAfter}`,
      concessional: {
        total: concessionalContributionAfter,
        tax: concessionalTaxAfter,
        formula: `${concessionalTaxAfter} + ${excessTaxAfter}`,
        guarantee: superGuarantee,
        sacrifice: salarySacrifice
      },
      excess: {
        total: excessContributionAfter,
        tax: excessTaxAfter,
        formula: ""
      }
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
