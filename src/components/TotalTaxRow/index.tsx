import {calculateIncomeTaxFor, calculateSuperTaxFor} from "../../utils/calculator";
import {SUPER_GUARUNTEE} from "../../utils/constants";
import {TableCell, TableRow} from "@material-ui/core";
import React from "react";
import {currencyFormatter} from "../../utils/formatter";
import {SacrificeRateProp, TotalIncomeProp} from "../../utils/types";

export const TotalTaxRow = ({totalIncome, sacrificeRate}: TotalIncomeProp & SacrificeRateProp) => {

  const superGuaruntee = totalIncome * SUPER_GUARUNTEE;
  const superSacrifice = totalIncome * sacrificeRate;
  const taxableIncome = totalIncome - superSacrifice;

  const [incomeTaxWithoutSacrifice] = calculateIncomeTaxFor(totalIncome);
  const superTaxWithoutSacrifice = calculateSuperTaxFor(superGuaruntee, totalIncome);
  const totalTaxWithoutSacrifice = incomeTaxWithoutSacrifice + superTaxWithoutSacrifice;

  const [incomeTaxWithSacrifice] = calculateIncomeTaxFor(taxableIncome);
  const superTaxWithSacrifice = calculateSuperTaxFor(superGuaruntee + superSacrifice, totalIncome);
  const totalTaxWithSacrifice = incomeTaxWithSacrifice + superTaxWithSacrifice;

  const before = currencyFormatter.format(totalTaxWithoutSacrifice);
  const after = currencyFormatter.format(totalTaxWithSacrifice);
  const taxSavings = currencyFormatter.format(totalTaxWithoutSacrifice - totalTaxWithSacrifice);

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
