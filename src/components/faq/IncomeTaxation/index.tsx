import {Accordion, AccordionDetails, AccordionSummary, Link, Typography} from "@material-ui/core";
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import React from "react";
import {useSuperCalculator} from "../../../hooks";
import {IncomeTaxTable} from "../../IncomeTaxTable";
import * as INCOME_TAX_TABLE from "../../../data/individual-income-tax.json";
import {IncomeTaxRateTable} from "../../IncomeTaxRateTable";
import {calculateIncomeTaxFor} from "../../../utils/calculator";
import {currencyFormatter} from "../../../utils/formatter";

export const IncomeTaxation = () => {

  const {
    totalIncome,
    sacrificeRate
  } = useSuperCalculator();

  const [totalTax, formula] = calculateIncomeTaxFor(totalIncome);

  return (
    <Accordion>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        id="superannuation-taxation"
        aria-controls="superannuation-taxation"
      >
        <Typography >How is the Individual Income Tax calculated?</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <div>
          <Typography>
            Depending on one's income, tax is calculated based on income tax rates.
          </Typography>
          <Typography gutterBottom>
            As of {INCOME_TAX_TABLE.updatedAt}, here's the Resident tax rates, excluding the Medicare levy of 2%.
          </Typography>
          <IncomeTaxRateTable />
          <Typography>
            E.g. If one's taxable income is $70,000, than his income tax will be
          </Typography>
          <Typography variant="h6">
            Income Tax = ${formula} = ${currencyFormatter.format(totalTax)}
          </Typography>
          <Typography>
            For latest, please visit <Link href={"https://www.ato.gov.au/rates/individual-income-tax-rates/"}
                                                                                                            target={"_blank"}>ATO</Link>.
          </Typography>
          <IncomeTaxTable totalIncome={totalIncome} sacrificeRate={sacrificeRate} />
        </div>
      </AccordionDetails>
    </Accordion>
  )
}
