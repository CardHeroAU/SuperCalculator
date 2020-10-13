import {TableCell, TableRow} from "@material-ui/core";
import React from "react";
import {currencyFormatter} from "../../utils/formatter";
import {useSuperCalculator} from "../../hooks";

export const SuperSacrificeRow = () => {

  const {
    before: {
      super: {
        concessional: {
          sacrifice: superSacrificeBefore,
        }
      }
    },
    after: {
      super: {
        concessional: {
          sacrifice: superSacrificeAfter,
        }
      }
    }
  } = useSuperCalculator();

  const before = currencyFormatter.format(superSacrificeBefore);
  const after = currencyFormatter.format(superSacrificeAfter);

  return (
    <TableRow >
      <TableCell component="th" scope="row">
        Salary Sacrifice
      </TableCell>
      <TableCell align="right" >{before}</TableCell>
      <TableCell align="right" >{after}</TableCell>
    </TableRow>
  );
}
