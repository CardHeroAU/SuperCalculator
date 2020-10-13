import React from 'react';
import {
  Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow,
} from '@material-ui/core';
import * as INCOME_TAX_TABLE from '../../data/individual-income-tax.json';
import currencyFormatter from '../../utils/formatter';

export const IncomeTaxRateTable = () => (
  <TableContainer component={Paper}>
    <Table aria-label="simple table">
      <TableHead>
        <TableRow>
          <TableCell>Taxable Income</TableCell>
          <TableCell>Tax on this income</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {INCOME_TAX_TABLE.resident.map((bracket, i) => {
          const nextBracket = (i < INCOME_TAX_TABLE.resident.length - 1)
            ? INCOME_TAX_TABLE.resident[i] : undefined;
          return (
            <TableRow key={bracket.minimum}>
              <TableCell component="th" scope="row">
                {currencyFormatter.format(bracket.minimum)}
                {' '}
                -
                {' '}
                {nextBracket ? currencyFormatter.format(nextBracket.minimum) : 'Above'}
              </TableCell>
              <TableCell>{`${(bracket.rate * 100).toFixed(2)}%`}</TableCell>
            </TableRow>
          );
        })}
      </TableBody>
    </Table>
  </TableContainer>
);
