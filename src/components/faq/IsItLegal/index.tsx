import {
  Accordion, AccordionDetails, AccordionSummary, Link, Typography,
} from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import React from 'react';

export const IsItLegal = () => (
  <Accordion>
    <AccordionSummary
      expandIcon={<ExpandMoreIcon />}
      id="superannuation-taxation"
      aria-controls="superannuation-taxation"
    >
      <Typography>Is it LEGAL?</Typography>
    </AccordionSummary>
    <AccordionDetails>
      <div>
        <Typography paragraph>
          100%
        </Typography>
        <Typography paragraph>
          In fact, it is well well publicized on
          {' '}
          <Link
            href="https://www.ato.gov.au/individuals/super/growing-your-super/adding-to-your-super/salary-sacrificing-super/"
            target="_blank"
          >
            ATO
          </Link>
          {' '}
          and
          {' '}
          <Link
            href="https://moneysmart.gov.au/grow-your-super/super-contributions"
            target="_blank"
          >
            MoneySmart
          </Link>
          .
        </Typography>
      </div>
    </AccordionDetails>
  </Accordion>
);
