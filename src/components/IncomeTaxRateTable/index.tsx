import * as INCOME_TAX_TABLE from "../../data/individual-income-tax.json";
import React from "react";
import {Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow} from "@material-ui/core";
import {currencyFormatter} from "../../utils/formatter";

export const IncomeTaxRateTable = () => {
  return (
    <TableContainer component={Paper}>
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Taxable Income</TableCell>
            <TableCell>Tax on this income</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {INCOME_TAX_TABLE.resident.map((row) => (
            <TableRow key={row.minimum}>
              <TableCell component="th" scope="row">
                {currencyFormatter.format(row.minimum)} - {currencyFormatter.format(row.maximum)}
              </TableCell>
              <TableCell >{(row.rate * 100).toFixed(2) + "%"}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}
