import {
  Accordion, AccordionDetails, AccordionSummary, Paper, Typography,
} from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import React from 'react';
import { IncomeTable } from '../../IncomeTable';

export const IncomeCalculation = () => (
  <Accordion>
    <AccordionSummary
      expandIcon={<ExpandMoreIcon />}
      id="superannuation-calculation"
      aria-controls="superannuation-calculation"
    >
      <Typography>What is Taxable Income?</Typography>
    </AccordionSummary>
    <AccordionDetails>
      <div>
        <Typography>
          Taxable income referes to the portion of the income that's subject to Income Tax.
        </Typography>
        <Typography>
          Usually, this means 100% of your Total Income.
        </Typography>
        <Typography>
          However, with Salary Sacrifice, your taxable income is reduced by the amount of Sacrifice.
        </Typography>
        <Paper variant="outlined">
          <Typography variant="h6" gutterBottom>
            Taxable Income = Total Income - Salary Sacrifice
          </Typography>
        </Paper>
        <IncomeTable />
      </div>
    </AccordionDetails>
  </Accordion>
);
