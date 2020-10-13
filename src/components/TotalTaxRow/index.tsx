import {TableCell, TableRow} from "@material-ui/core";
import React from "react";
import {currencyFormatter} from "../../utils/formatter";
import {useSuperCalculator} from "../../hooks";

export const TotalTaxRow = () => {

  const {
    before: {
      income: {
        tax: incomeTaxBefore
      },
      super: {
        tax: superTaxBefore
      }
    },
    after: {
      income: {
        tax: incomeTaxAfter
      },
      super: {
        tax: superTaxAfter
      }
    }
  } = useSuperCalculator();

  const totalTaxBefore = incomeTaxBefore + superTaxBefore;

  const totalTaxAfter = incomeTaxAfter + superTaxAfter;

  const before = currencyFormatter.format(totalTaxBefore);
  const after = currencyFormatter.format(totalTaxAfter);
  const taxSavings = currencyFormatter.format(totalTaxBefore - totalTaxAfter);

  return (
    <>
      <TableRow >
        <TableCell component="th" scope="row">
          Total Tax
        </TableCell>
        <TableCell align="right" >{before}</TableCell>
        <TableCell align="right" >{after}</TableCell>
      </TableRow>
      <TableRow >
        <TableCell />
        <TableCell align="right" >Savings</TableCell>
        <TableCell align="right" >{taxSavings}</TableCell>
      </TableRow>
    </>
  );
}
