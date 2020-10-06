import {TableCell, TableRow} from "@material-ui/core";
import React from "react";
import {currencyFormatter} from "../../utils/formatter";
import {SacrificeRateProp, TotalIncomeProp} from "../../utils/types";

export const TaxableIncomeRow = ({totalIncome, sacrificeRate}: TotalIncomeProp & SacrificeRateProp) => {

  const salarySacrifice = totalIncome * sacrificeRate;

  const before = currencyFormatter.format(totalIncome);
  const after = currencyFormatter.format(totalIncome - salarySacrifice);

  return (
    <TableRow >
      <TableCell component="th" scope="row">Taxable Income</TableCell>
      <TableCell align="right" >{before}</TableCell>
      <TableCell align="right" >{after}</TableCell>
    </TableRow>
  );
}
