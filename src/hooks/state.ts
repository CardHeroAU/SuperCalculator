export interface SuperCalculatorState {
  totalIncome: number;
  sacrificeRate: number;
}

export const initialState: SuperCalculatorState = {
  totalIncome: 70000,
  sacrificeRate: 0.10,
}
