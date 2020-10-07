import {TableCell, TableRow} from "@material-ui/core";
import React from "react";
import {currencyFormatter} from "../../utils/formatter";
import {SacrificeRateProp, TotalIncomeProp} from "../../utils/types";
import {calculateIncomeTaxFor} from "../../utils/calculator";

export const IncomeTaxRow = ({totalIncome, sacrificeRate}: TotalIncomeProp & SacrificeRateProp) => {

  const salarySacrifice = totalIncome * sacrificeRate;

  const [incomeTaxBefore] = calculateIncomeTaxFor(totalIncome);
  const [incomeTaxAfter] = calculateIncomeTaxFor(totalIncome - salarySacrifice);

  const before = currencyFormatter.format(incomeTaxBefore);
  const after = currencyFormatter.format(incomeTaxAfter);
  const taxSavings = currencyFormatter.format(incomeTaxBefore - incomeTaxAfter);

  return (
    <>
      <TableRow >
        <TableCell component="th" scope="row">Income Tax</TableCell>
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
