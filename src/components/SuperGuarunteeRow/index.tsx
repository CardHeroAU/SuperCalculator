import {TableCell, TableRow} from "@material-ui/core";
import React from "react";
import {currencyFormatter} from "../../utils/formatter";
import {useSuperCalculator} from "../../hooks";

export const SuperGuaranteeRow = () => {

  const {
    before: {
      super: {
        concessional: {
          guarantee: superGuaranteeBefore
        }
      }
    },
    after: {
      super: {
        concessional: {
          guarantee: superGuaranteeAfter
        }
      }
    }
  } = useSuperCalculator();

  const before = currencyFormatter.format(superGuaranteeBefore);
  const after = currencyFormatter.format(superGuaranteeAfter);

  return (
    <TableRow >
      <TableCell component="th" scope="row">Guaruntee</TableCell>
      <TableCell align="right" >{before}</TableCell>
      <TableCell align="right" >{after}</TableCell>
    </TableRow>
  );
}
