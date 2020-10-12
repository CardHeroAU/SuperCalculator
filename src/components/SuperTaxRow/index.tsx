import {TableCell, TableRow} from "@material-ui/core";
import React from "react";
import {currencyFormatter} from "../../utils/formatter";
import {SacrificeRateProp, TotalIncomeProp} from "../../utils/types";
import {calculateSuperTaxFor} from "../../utils/calculator";
import {SUPER_GUARUNTEE} from "../../utils/constants";

export const SuperTaxRow = ({totalIncome, sacrificeRate}: TotalIncomeProp & SacrificeRateProp) => {

  const superGuaruntee = totalIncome * SUPER_GUARUNTEE;
  const salarySacrifice = totalIncome * sacrificeRate;

  const [superConsessionalTaxBefore, superExcessTaxBefore] = calculateSuperTaxFor(superGuaruntee, totalIncome);
  const [superConsessionalTaxAfter, superExcessTaxAfter] = calculateSuperTaxFor(superGuaruntee + salarySacrifice, totalIncome);

  const superTaxBefore = superConsessionalTaxBefore + superExcessTaxBefore;
  const superTaxAfter = superConsessionalTaxAfter + superExcessTaxAfter;

  const before = currencyFormatter.format(superTaxBefore);
  const after = currencyFormatter.format(superTaxAfter);
  const taxSavings = currencyFormatter.format(superTaxBefore - superTaxAfter);

  return (
    <>
      <TableRow >
        <TableCell component="th" scope="row">Concessional Tax</TableCell>
        <TableCell align="right" >{currencyFormatter.format(superConsessionalTaxBefore)}</TableCell>
        <TableCell align="right" >{currencyFormatter.format(superConsessionalTaxAfter)}</TableCell>
      </TableRow>
      {
        superExcessTaxAfter > 0 && (
          <>
            <TableRow >
              <TableCell component="th" scope="row">Excess Tax</TableCell>
              <TableCell align="right" >{currencyFormatter.format(superExcessTaxBefore)}</TableCell>
              <TableCell align="right" >{currencyFormatter.format(superExcessTaxAfter)}</TableCell>
            </TableRow>
            <TableRow >
              <TableCell component="th" scope="row">Super Tax</TableCell>
              <TableCell align="right" >{currencyFormatter.format(superTaxBefore)}</TableCell>
              <TableCell align="right" >{currencyFormatter.format(superTaxAfter)}</TableCell>
            </TableRow>
          </>
        )
      }
      <TableRow >
        <TableCell />
        <TableCell align="right" >Savings</TableCell>
        <TableCell align="right" >{taxSavings}</TableCell>
      </TableRow>
    </>
  );
}
