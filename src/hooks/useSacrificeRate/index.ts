import { useState } from 'react';
import { DEFAULT_SACRIFICE_RATE } from '../../utils/constants';
import { LOCAL_STORAGE_SACRIFICE_RATE } from '../../../config';

export const useSacrificeRate = (): [number, (newSacrificeRate: number) => void] => {
  const savedValue = localStorage.getItem(LOCAL_STORAGE_SACRIFICE_RATE);
  const defaultValue = savedValue ? parseInt(savedValue, 10) : DEFAULT_SACRIFICE_RATE;
  const [sacrificeRate, setSacrificeRate] = useState(defaultValue);

  const updateSacrificeRate = (newSacrificeRate: number) => {
    if (newSacrificeRate >= 0 && newSacrificeRate <= 1) {
      setSacrificeRate(newSacrificeRate);
      localStorage.setItem(LOCAL_STORAGE_SACRIFICE_RATE, newSacrificeRate.toString());
    } else {
      /* eslint-disable no-console */
      console.error('useSacrificeRate(): newSacrificeRate needs to be >= 0 AND <= 1');
    }
  };

  return [
    sacrificeRate,
    updateSacrificeRate,
  ];
};
