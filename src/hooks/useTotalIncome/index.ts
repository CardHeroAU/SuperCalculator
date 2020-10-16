import { useState } from 'react';
import { DEFAULT_INCOME } from '../../utils/constants';
import { LOCAL_STORAGE_TOTAL_INCOME } from '../../../config';

export const useTotalIncome = (): [number, (newIncome: number) => void] => {
  const savedValue = localStorage.getItem(LOCAL_STORAGE_TOTAL_INCOME);
  const defaultValue = savedValue ? parseInt(savedValue, 10) : DEFAULT_INCOME;
  const [totalIncome, setTotalIncome] = useState(defaultValue);

  const updateTotalIncome = (newIncome: number) => {
    if (newIncome >= 0) {
      setTotalIncome(newIncome);
      localStorage.setItem(LOCAL_STORAGE_TOTAL_INCOME, newIncome.toString());
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
