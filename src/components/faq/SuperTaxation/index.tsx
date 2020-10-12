import {Accordion, AccordionDetails, AccordionSummary, Link, Typography} from "@material-ui/core";
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import * as SUPER_TAX_TABLE from "../../../data/super-tax.json";
import React from "react";
import {useSuperCalculator} from "../../../hooks";
import {SuperTaxTable} from "../../SuperTaxTable";
import {calculateMarginalTaxRate, calculateSuperTaxFor} from "../../../utils/calculator";
import {SUPER_GUARUNTEE} from "../../../utils/constants";
import {currencyFormatter} from "../../../utils/formatter";

export const SuperTaxation = () => {

  const {
    totalIncome,
    sacrificeRate
  } = useSuperCalculator();

  const superGuaruntee = totalIncome * SUPER_GUARUNTEE;
  const salarySacrifice = totalIncome * sacrificeRate;

  const marginalTaxRate = calculateMarginalTaxRate(totalIncome);
  const [superConsessionalTaxAfter, superExcessTaxAfter] = calculateSuperTaxFor(superGuaruntee + salarySacrifice, totalIncome);

  return (
    <Accordion>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        id="superannuation-taxation"
        aria-controls="superannuation-taxation"
      >
        <Typography >How is Super Taxed?</Typography>
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
          {   superExcessTaxAfter > 0 && (
              <>
                <Typography>
                  When the combined super contribution exceeds {currencyFormatter.format(SUPER_TAX_TABLE.consessionalContributionCap)}, one might attract {(calculateMarginalTaxRate(totalIncome)*100).toFixed(2)}% tax on the Excess Contribution.

                  <Link href={"https://www.ato.gov.au/individuals/super/in-detail/growing-your-super/super-contributions---too-much-can-mean-extra-tax/"} target={"_blank"}>ATO Excess Contribution Tax</Link>
                </Typography>
                <Typography>
                  Excess Contribution = {currencyFormatter.format(superGuaruntee)} + {currencyFormatter.format(salarySacrifice)} - {currencyFormatter.format(SUPER_TAX_TABLE.consessionalContributionCap)} = {currencyFormatter.format(superGuaruntee + salarySacrifice - SUPER_TAX_TABLE.consessionalContributionCap)}
                </Typography>
                <Typography>
                  Excess Contribution Tax = {currencyFormatter.format(superGuaruntee + salarySacrifice - SUPER_TAX_TABLE.consessionalContributionCap)} * {(marginalTaxRate * 100).toFixed(2)}% = {currencyFormatter.format(superExcessTaxAfter)}
                </Typography>
              </>
            )
          }
          <Typography>
            Based on {currencyFormatter.format(totalIncome)} income and {(sacrificeRate * 100).toFixed(2)}%, here is a comparison of how super is taxed before and after salary sacrifice.
          </Typography>
          <SuperTaxTable totalIncome={totalIncome} sacrificeRate={sacrificeRate} />
          <Typography>
            Technically the more Salary Sacrifice, the more Super tax. However, given Super is taxed at concessional {(SUPER_TAX_TABLE.consessoinalContributionRate*100).toFixed(2)}%, lower than the marginal {(marginalTaxRate * 100).toFixed(2)}%, it's the less of two evil and hence results in tax savings.
          </Typography>
        </div>
      </AccordionDetails>
    </Accordion>
  )
}
