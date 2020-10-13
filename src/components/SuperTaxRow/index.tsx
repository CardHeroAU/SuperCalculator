import { TableCell, TableRow } from '@material-ui/core';
import React from 'react';
import currencyFormatter from '../../utils/formatter';
import { useSuperCalculator } from '../../hooks';

export const SuperTaxRow = () => {
  const {
    before: {
      super: {
        tax: superTaxBefore,
        concessional: {
          tax: superConsessionalTaxBefore,
        },
        excess: {
          tax: superExcessTaxBefore,
        },
      },
    },
    after: {
      super: {
        tax: superTaxAfter,
        concessional: {
          tax: superConsessionalTaxAfter,
        },
        excess: {
          tax: superExcessTaxAfter,
        },
      },
    },
  } = useSuperCalculator();

  const taxSavings = currencyFormatter.format(superTaxBefore - superTaxAfter);

  return (
    <>
      <TableRow>
        <TableCell component="th" scope="row">Concessional Tax</TableCell>
        <TableCell align="right">{currencyFormatter.format(superConsessionalTaxBefore)}</TableCell>
        <TableCell align="right">{currencyFormatter.format(superConsessionalTaxAfter)}</TableCell>
      </TableRow>
      {
        superExcessTaxAfter > 0 && (
          <>
            <TableRow>
              <TableCell component="th" scope="row">Excess Tax</TableCell>
              <TableCell align="right">{currencyFormatter.format(superExcessTaxBefore)}</TableCell>
              <TableCell align="right">{currencyFormatter.format(superExcessTaxAfter)}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell component="th" scope="row">Super Tax</TableCell>
              <TableCell align="right">{currencyFormatter.format(superTaxBefore)}</TableCell>
              <TableCell align="right">{currencyFormatter.format(superTaxAfter)}</TableCell>
            </TableRow>
          </>
        )
      }
      <TableRow>
        <TableCell />
        <TableCell align="right">Savings</TableCell>
        <TableCell align="right">{taxSavings}</TableCell>
      </TableRow>
    </>
  );
};
