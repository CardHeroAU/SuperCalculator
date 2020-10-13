interface TaxInfo {
  total: number;
  tax: number;
  formula: string;
}

interface IncomeInfo extends TaxInfo {
  taxable: number;
}

interface ConcessionalSuper extends TaxInfo {
  guarantee: number;
  sacrifice: number;
}

interface SuperInfo extends TaxInfo{
  concessional: ConcessionalSuper;
  excess: TaxInfo;
}

interface ResultInfo {
  income: IncomeInfo;
  super: SuperInfo;
}

export interface SuperCalculatorState {
  sacrificeRate: number;
  before: ResultInfo;
  after: ResultInfo;
}

export const initialState: SuperCalculatorState = {
  sacrificeRate: 0.10,
  before: {
    income: {
      total: 0,
      taxable: 0,
      tax: 0,
      formula: '',
    },
    super: {
      total: 0,
      tax: 0,
      formula: '',
      concessional: {
        total: 0,
        tax: 0,
        formula: '',
        guarantee: 0,
        sacrifice: 0,
      },
      excess: {
        total: 0,
        tax: 0,
        formula: '',
      },
    },
  },
  after: {
    income: {
      total: 0,
      taxable: 0,
      tax: 0,
      formula: '',
    },
    super: {
      total: 0,
      tax: 0,
      formula: '',
      concessional: {
        total: 0,
        tax: 0,
        formula: '',
        guarantee: 0,
        sacrifice: 0,
      },
      excess: {
        total: 0,
        tax: 0,
        formula: '',
      },
    },
  },
};
