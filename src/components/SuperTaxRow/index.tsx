import {TableCell, TableRow} from "@material-ui/core";
import React from "react";
import {currencyFormatter} from "../../utils/formatter";
import {SacrificeRateProp, TotalIncomeProp} from "../../utils/types";
import {calculateSuperTaxFor} from "../../utils/calculator";
import {SUPER_GUARUNTEE} from "../../utils/constants";

export const SuperTaxRow = ({totalIncome, sacrificeRate}: TotalIncomeProp & SacrificeRateProp) => {

  const superGuaruntee = totalIncome * SUPER_GUARUNTEE;
  const salarySacrifice = totalIncome * sacrificeRate;

  const superTaxBefore = calculateSuperTaxFor(superGuaruntee, totalIncome);
  const superTaxAfter = calculateSuperTaxFor(superGuaruntee + salarySacrifice, totalIncome);

  const before = currencyFormatter.format(superTaxBefore);
  const after = currencyFormatter.format(superTaxAfter);
  const taxSavings = currencyFormatter.format(superTaxBefore - superTaxAfter);

  return (
    <>
      <TableRow >
        <TableCell component="th" scope="row">Super Tax</TableCell>
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
