import { TableCell, TableRow } from '@material-ui/core';
import React from 'react';
import currencyFormatter from '../../utils/formatter';
import { useSuperCalculator } from '../../hooks';

export const IncomeTaxRow = () => {
  const {
    before: {
      income: {
        tax: incomeTaxBefore,
      },
    },
    after: {
      income: {
        tax: incomeTaxAfter,
      },
    },
  } = useSuperCalculator();

  const before = currencyFormatter.format(incomeTaxBefore);
  const after = currencyFormatter.format(incomeTaxAfter);
  const taxSavings = currencyFormatter.format(incomeTaxBefore - incomeTaxAfter);

  return (
    <>
      <TableRow>
        <TableCell component="th" scope="row">Income Tax</TableCell>
        <TableCell align="right">{before}</TableCell>
        <TableCell align="right">{after}</TableCell>
      </TableRow>
      <TableRow>
        <TableCell />
        <TableCell align="right">Savings</TableCell>
        <TableCell align="right">{taxSavings}</TableCell>
      </TableRow>
    </>
  );
};
