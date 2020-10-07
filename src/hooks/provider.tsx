import * as React from 'react';
import { SuperCalculatorContext } from './context';

interface SuperCalculatorProviderProps {
  totalIncome: number;
  sacrificeRate: number;
}

export const SuperCalculatorProvider: React.FunctionComponent<SuperCalculatorProviderProps> = ({ children, totalIncome,sacrificeRate }) => {

  return (
    <SuperCalculatorContext.Provider value={{
      totalIncome,
      sacrificeRate,
    }}>
      {children}
    </SuperCalculatorContext.Provider>
  );
};
