import {TableCell, TableRow} from "@material-ui/core";
import React from "react";
import {currencyFormatter} from "../../utils/formatter";
import {TotalIncomeProp} from "../../utils/types";
import {SUPER_GUARUNTEE} from "../../utils/constants";

export const SuperGuarunteeRow = ({totalIncome}: TotalIncomeProp) => {

  const before = currencyFormatter.format(totalIncome * SUPER_GUARUNTEE);
  const after = currencyFormatter.format(totalIncome * SUPER_GUARUNTEE);

  return (
    <TableRow >
      <TableCell component="th" scope="row">Guaruntee</TableCell>
      <TableCell align="right" >{before}</TableCell>
      <TableCell align="right" >{after}</TableCell>
    </TableRow>
  );
}
