import {
  Accordion, AccordionDetails, AccordionSummary, Link, Typography,
} from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import React from 'react';
import { useSuperCalculator } from '../../../hooks';
import { IncomeTaxTable } from '../../IncomeTaxTable';
import * as INCOME_TAX_TABLE from '../../../data/individual-income-tax.json';
import { IncomeTaxRateTable } from '../../IncomeTaxRateTable';
import currencyFormatter from '../../../utils/formatter';

export const IncomeTaxation = () => {
  const {
    sacrificeRate,
    before: {
      income: {
        total: totalIncomeBefore,
        tax: totalTaxBefore,
        formula: formulaBefore,
      },
    },
    after: {
      income: {
        tax: totalTaxAfter,
        formula: formulaAfter,
      },
    },
  } = useSuperCalculator();

  return (
    <Accordion>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        id="superannuation-taxation"
        aria-controls="superannuation-taxation"
      >
        <Typography>How is the Individual Income Tax calculated?</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <div>
          <Typography>
            Depending on one's income, tax is calculated based on income tax rates.
          </Typography>
          <Typography gutterBottom>
            As of
            {' '}
            {INCOME_TAX_TABLE.updatedAt}
            , here's the Resident tax rates, excluding the Medicare levy of 2%. For latest, please visit
            {' '}
            <Link
              href="https://www.ato.gov.au/rates/individual-income-tax-rates/"
              target="_blank"
            >
              ATO
            </Link>
            .
          </Typography>
          <IncomeTaxRateTable />
          <Typography variant="h6">
            Based on
            {' '}
            {currencyFormatter.format(totalIncomeBefore)}
            {' '}
            income, income tax will be
          </Typography>
          <Typography>
            {formulaBefore}
            {' '}
            =
            {currencyFormatter.format(totalTaxBefore)}
          </Typography>
          <Typography variant="h6">
            With Salary Sacrifice of
            {' '}
            {(sacrificeRate * 100).toFixed(2)}
            %, income tax will be
          </Typography>
          <Typography>
            {formulaAfter}
            {' '}
            =
            {currencyFormatter.format(totalTaxAfter)}
          </Typography>
          <Typography variant="h6">
            Tax Saving =
            {' '}
            {currencyFormatter.format(totalTaxBefore - totalTaxAfter)}
          </Typography>
          <Typography>
            {currencyFormatter.format(totalTaxBefore)}
            {' '}
            -
            {currencyFormatter.format(totalTaxAfter)}
            {' '}
            =
            {currencyFormatter.format(totalTaxBefore - totalTaxAfter)}
          </Typography>
          <IncomeTaxTable />
        </div>
      </AccordionDetails>
    </Accordion>
  );
};
