import * as React from 'react';
import { initialState, SuperCalculatorState } from './state';

export const SuperCalculatorContext = React.createContext<SuperCalculatorState>(initialState);

export const useSuperCalculator = () => {
  const superCalculatorState = React.useContext(SuperCalculatorContext);

  if (!superCalculatorState) {
    throw new Error('Please setup <SuperCalculatorProvider /> as a parent component, before using useSuperCalculator().');
  }

  return superCalculatorState;
};
