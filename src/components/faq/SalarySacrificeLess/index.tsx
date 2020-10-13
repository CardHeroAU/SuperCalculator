import {
  Accordion, AccordionDetails, AccordionSummary, Paper, Typography,
} from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import React from 'react';
import image from '../../../assets/images/salary-sacrifice-less.png';

export const SalarySacrificeLess = () => (
  <Accordion>
    <AccordionSummary
      expandIcon={<ExpandMoreIcon />}
      id="superannuation-taxation"
      aria-controls="superannuation-taxation"
    >
      <Typography>Do I receve less if I Salary Sacrifice?</Typography>
    </AccordionSummary>
    <AccordionDetails>
      <div>
        <Typography paragraph>
          NO.
        </Typography>
        <Typography paragraph>
          On the contrary, due to the tax savings, one could end up keeping more!
        </Typography>
        <Paper variant="outlined">
          <img src={image} alt="salary-sacrifice-less" width="100%" />
        </Paper>
        <Typography paragraph>
          It&rsquo;s about timing. Does one wish to receive all the money now?
          Or does one want to receive more money in the future?
        </Typography>
      </div>
    </AccordionDetails>
  </Accordion>
);
