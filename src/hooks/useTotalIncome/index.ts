import { useState } from 'react';
import { DEFAULT_INCOME } from '../../utils/constants';

export const useTotalIncome = (): [number, (newIncome: number) => void] => {
  const [totalIncome, setTotalIncome] = useState(DEFAULT_INCOME);

  const updateTotalIncome = (newIncome: number) => {
    if (newIncome >= 0) {
      setTotalIncome(newIncome);
    } else {
      /* eslint-disable no-console */
      console.error('useTotalIncome(): newIncome needs to be >= 0');
    }
  };

  return [
    totalIncome,
    updateTotalIncome,
  ];
};
