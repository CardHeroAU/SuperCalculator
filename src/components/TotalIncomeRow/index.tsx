import { TableCell, TableRow } from '@material-ui/core';
import React from 'react';
import currencyFormatter from '../../utils/formatter';
import { useSuperCalculator } from '../../hooks';

export const TotalIncomeRow = () => {
  const {
    before: {
      income: {
        total: totalIncomeBefore,
      },
    },
    after: {
      income: {
        total: totalIncomeAfter,
      },
    },
  } = useSuperCalculator();

  const before = currencyFormatter.format(totalIncomeBefore);
  const after = currencyFormatter.format(totalIncomeAfter);

  return (
    <TableRow>
      <TableCell component="th" scope="row">Total Income</TableCell>
      <TableCell align="right">{before}</TableCell>
      <TableCell align="right">{after}</TableCell>
    </TableRow>
  );
};
