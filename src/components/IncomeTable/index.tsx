import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

import { TotalIncomeRow } from '../TotalIncomeRow';
import { SuperSacrificeRow } from '../SuperSacrificeRow';
import { TaxableIncomeRow } from '../TaxableIncomeRow';

export const IncomeTable = () => (
  <TableContainer component={Paper}>
    <Table aria-label="collapsible table">
      <TableHead>
        <TableRow>
          <TableCell>Income</TableCell>
          <TableCell align="right">Original</TableCell>
          <TableCell align="right">With Sacrifice</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        <TotalIncomeRow />
        <SuperSacrificeRow />
        <TaxableIncomeRow />
      </TableBody>
    </Table>
  </TableContainer>
);
