import {Accordion, AccordionDetails, AccordionSummary, Typography} from "@material-ui/core";
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import React from "react";
import {SuperTable} from "../../SuperTable";
import {useSuperCalculator} from "../../../hooks";
import {currencyFormatter} from "../../../utils/formatter";

export const SuperCalculation = () => {

  const {
    totalIncome,
    sacrificeRate
  } = useSuperCalculator();

  return (
    <Accordion>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        id="superannuation-calculation"
        aria-controls="superannuation-calculation"
      >
        <Typography >How is Super Calculated?</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <div>
          <Typography>
            Your super consists of
          </Typography>
          <Typography>
            1. The Super Guaruntee (The super employer pays you, usually 9.5%), and
          </Typography>
          <Typography>
            2. Any Super Salary Sacrifice (What SuperCalculator estimates)
          </Typography>
          <Typography>
            Based on {currencyFormatter.format(totalIncome)} income and {(sacrificeRate * 100).toFixed(2)}%, here is a comparison of how super is contributed before and after salary sacrifice.
          </Typography>
          <SuperTable totalIncome={totalIncome} sacrificeRate={sacrificeRate} />
        </div>
      </AccordionDetails>
    </Accordion>
  )
}
