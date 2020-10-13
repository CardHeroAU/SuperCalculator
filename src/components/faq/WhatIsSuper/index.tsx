import {
  Accordion, AccordionDetails, AccordionSummary, Paper, Typography,
} from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import React from 'react';
import image from '../../../assets/images/what-is-super.png';

export const WhatIsSuper = () => (
  <Accordion>
    <AccordionSummary
      expandIcon={<ExpandMoreIcon />}
      id="superannuation-taxation"
      aria-controls="superannuation-taxation"
    >
      <Typography>What IS Super?</Typography>
    </AccordionSummary>
    <AccordionDetails>
      <div>
        <Typography paragraph>
          Super, or superannuation, is money set aside during your working life for when you retire. Your super is your future.
        </Typography>
        <Typography paragraph>
          Super (including super guarantee from your employer), is your money.
        </Typography>
        <Paper variant="outlined">
          <img src={image} alt="why-salary-sacrifice" width="100%" />
        </Paper>
      </div>
    </AccordionDetails>
  </Accordion>
);
