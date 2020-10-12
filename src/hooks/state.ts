interface TaxInfo {
  tax: number;
  formula: string;
}

interface IncomeInfo extends TaxInfo {
  total: number;
  taxable: number;
}

interface ConsessionalSuper {
  guarantee: number;
  sacrifice: number;
}

interface SuperInfo extends TaxInfo {
  total: number;
  concessional: ConsessionalSuper;
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
      formula: ""
    },
    super: {
      total: 0,
      concessional: {
        guarantee: 0,
        sacrifice: 0,
      },
      tax: 0,
      formula: ""
    }
  },
  after: {
    income: {
      total: 0,
      taxable: 0,
      tax: 0,
      formula: ""
    },
    super: {
      total: 0,
      concessional: {
        guarantee: 0,
        sacrifice: 0,
      },
      tax: 0,
      formula: ""
    }
  }
}
