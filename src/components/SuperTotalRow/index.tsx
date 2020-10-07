import {TableCell, TableRow} from "@material-ui/core";
import React from "react";
import {currencyFormatter} from "../../utils/formatter";
import {SacrificeRateProp, TotalIncomeProp} from "../../utils/types";
import {SUPER_GUARUNTEE} from "../../utils/constants";

export const SuperTotalRow = ({totalIncome, sacrificeRate}: TotalIncomeProp & SacrificeRateProp) => {

  const superGuaruntee = totalIncome * SUPER_GUARUNTEE;
  const superSacrifice = totalIncome * sacrificeRate;

  const before = currencyFormatter.format(superGuaruntee);
  const after = currencyFormatter.format(superGuaruntee + superSacrifice);

  return (
    <TableRow >
      <TableCell component="th" scope="row">
        Total Super
      </TableCell>
      <TableCell align="right" >{before}</TableCell>
      <TableCell align="right" >{after}</TableCell>
    </TableRow>
  );
}
