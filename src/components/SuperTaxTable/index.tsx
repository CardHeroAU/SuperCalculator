import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

import { SuperTotalRow } from '../SuperTotalRow';
import { SuperTaxRow } from '../SuperTaxRow';

export const SuperTaxTable = () => (
  <TableContainer component={Paper}>
    <Table aria-label="collapsible table">
      <TableHead>
        <TableRow>
          <TableCell>Super Tax</TableCell>
          <TableCell align="right">Original</TableCell>
          <TableCell align="right">With Sacrifice</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        <SuperTotalRow />
        <SuperTaxRow />
      </TableBody>
    </Table>
  </TableContainer>
);
