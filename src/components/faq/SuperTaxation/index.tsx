import {
  Accordion, AccordionDetails, AccordionSummary, Link, Typography,
} from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import React from 'react';
import * as SUPER_TAX_TABLE from '../../../data/super-tax.json';
import { useSuperCalculator } from '../../../hooks';
import { SuperTaxTable } from '../../SuperTaxTable';
import { calculateMarginalTaxRate } from '../../../utils/calculator';
import currencyFormatter from '../../../utils/formatter';

export const SuperTaxation = () => {
  const {
    after: {
      income: {
        total: totalIncome,
      },
      super: {
        concessional: {
          guarantee: superGuaruntee,
          sacrifice: salarySacrifice,
        },
        excess: {
          total: superExcessTaxAfter,
        },
      },
    },
    sacrificeRate,
  } = useSuperCalculator();

  const marginalTaxRate = calculateMarginalTaxRate(totalIncome);

  return (
    <Accordion>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        id="superannuation-taxation"
        aria-controls="superannuation-taxation"
      >
        <Typography>How is Super Taxed?</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <div>
          <Typography>
            Super contribution is taxed at a concessional 15%. This includes the total of
          </Typography>
          <Typography>
            1. The Superanuation Guaruntee (The super employer pays you, usually 9.5%), and
          </Typography>
          <Typography>
            2. Any Superanuation Salary Sacrifice (What SuperCalculator estimates)
          </Typography>
          { superExcessTaxAfter > 0 && (
          <>
            <Typography>
              When the combined super contribution exceeds
              {' '}
              {currencyFormatter.format(SUPER_TAX_TABLE.consessionalContributionCap)}
              , one might attract
              {' '}
              {(calculateMarginalTaxRate(totalIncome) * 100).toFixed(2)}
              % tax on the Excess Contribution.

              <Link
                href="https://www.ato.gov.au/individuals/super/in-detail/growing-your-super/super-contributions---too-much-can-mean-extra-tax/"
                target="_blank"
              >
                ATO Excess Contribution Tax
              </Link>
            </Typography>
            <Typography>
              Excess Contribution =
              {' '}
              {currencyFormatter.format(superGuaruntee)}
              {' '}
              +
              {' '}
              {currencyFormatter.format(salarySacrifice)}
              {' '}
              -
              {' '}
              {currencyFormatter.format(SUPER_TAX_TABLE.consessionalContributionCap)}
              {' '}
              =
              {' '}
              {currencyFormatter.format(superExcessTaxAfter)}
            </Typography>
            <Typography>
              Excess Contribution Tax =
              {' '}
              {currencyFormatter.format(superExcessTaxAfter)}
              {' '}
              *
              {' '}
              {(marginalTaxRate * 100).toFixed(2)}
              % =
              {' '}
              {currencyFormatter.format(superExcessTaxAfter)}
            </Typography>
          </>
          )}
          <Typography>
            Based on
            {' '}
            {currencyFormatter.format(totalIncome)}
            {' '}
            income and
            {' '}
            {(sacrificeRate * 100).toFixed(2)}
            %, here is a comparison of how super is taxed before and after salary sacrifice.
          </Typography>
          <SuperTaxTable />
          <Typography>
            Technically the more Salary Sacrifice, the more Super tax. However,
            given Super is taxed at concessional
            {' '}
            {(SUPER_TAX_TABLE.consessoinalContributionRate * 100).toFixed(2)}
            %, lower than the marginal
            {' '}
            {(marginalTaxRate * 100).toFixed(2)}
            %, it&rsquo;s the less of two evil and hence results in tax savings.
          </Typography>
        </div>
      </AccordionDetails>
    </Accordion>
  );
};
