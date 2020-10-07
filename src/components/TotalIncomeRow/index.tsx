import {TableCell, TableRow} from "@material-ui/core";
import React from "react";
import {currencyFormatter} from "../../utils/formatter";
import {TotalIncomeProp} from "../../utils/types";

export const TotalIncomeRow = ({totalIncome}: TotalIncomeProp) => {

  const before = currencyFormatter.format(totalIncome);
  const after = currencyFormatter.format(totalIncome);

  return (
    <TableRow >
      <TableCell component="th" scope="row">Total Income</TableCell>
      <TableCell align="right" >{before}</TableCell>
      <TableCell align="right" >{after}</TableCell>
    </TableRow>
  );
}
