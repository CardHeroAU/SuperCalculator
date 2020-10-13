import {TableCell, TableRow} from "@material-ui/core";
import React from "react";
import {currencyFormatter} from "../../utils/formatter";
import {useSuperCalculator} from "../../hooks";

export const TaxableIncomeRow = () => {

  const {
    before: {
      income: {
        taxable: taxableIncomeBefore
      }
    },
    after: {
      income: {
        taxable: taxableIncomeAfter
      }
    }
  } = useSuperCalculator();

  const before = currencyFormatter.format(taxableIncomeBefore);
  const after = currencyFormatter.format(taxableIncomeAfter);

  return (
    <TableRow >
      <TableCell component="th" scope="row">Taxable Income</TableCell>
      <TableCell align="right" >{before}</TableCell>
      <TableCell align="right" >{after}</TableCell>
    </TableRow>
  );
}
