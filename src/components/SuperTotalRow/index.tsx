import {TableCell, TableRow} from "@material-ui/core";
import React from "react";
import {currencyFormatter} from "../../utils/formatter";
import {useSuperCalculator} from "../../hooks";

export const SuperTotalRow = () => {

  const {
    before: {
      super: {
        total: totalSuperBefore
      }
    },
    after: {
      super: {
        total: totalSuperAfter
      }
    }
  } = useSuperCalculator();

  const before = currencyFormatter.format(totalSuperBefore);
  const after = currencyFormatter.format(totalSuperAfter);

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
