import { useState } from 'react';
import { DEFAULT_SACRIFICE_RATE } from '../../utils/constants';

export const useSacrificeRate = (): [number, (newSacrificeRate: number) => void] => {
  const [sacrificeRate, setSacrificeRate] = useState(DEFAULT_SACRIFICE_RATE);

  const updateSacrificeRate = (newSacrificeRate: number) => {
    if (newSacrificeRate >= 0 && newSacrificeRate <= 1) {
      setSacrificeRate(newSacrificeRate);
    } else {
      console.error('useSacrificeRate(): newSacrificeRate needs to be >= 0 AND <= 1');
    }
  };

  return [
    sacrificeRate,
    updateSacrificeRate,
  ];
};
