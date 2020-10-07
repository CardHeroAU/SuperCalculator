import {TableCell, TableRow} from "@material-ui/core";
import React from "react";
import {currencyFormatter} from "../../utils/formatter";
import {SacrificeRateProp, TotalIncomeProp} from "../../utils/types";

export const SuperSacrificeRow = ({totalIncome, sacrificeRate}: TotalIncomeProp & SacrificeRateProp) => {

  const superSacrifice = totalIncome * sacrificeRate;

  const before = currencyFormatter.format(0);
  const after = currencyFormatter.format(superSacrifice);

  return (
    <TableRow >
      <TableCell component="th" scope="row">
        Sacrifice
      </TableCell>
      <TableCell align="right" >{before}</TableCell>
      <TableCell align="right" >{after}</TableCell>
    </TableRow>
  );
}
