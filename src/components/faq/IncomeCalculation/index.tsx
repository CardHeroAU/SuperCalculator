import {Accordion, AccordionDetails, AccordionSummary, Typography} from "@material-ui/core";
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import React from "react";
import {useSuperCalculator} from "../../../hooks";
import {IncomeTable} from "../../IncomeTable";

export const IncomeCalculation = () => {

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
        <Typography >How is Income Calculated?</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <div>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
            sit amet blandit leo lobortis eget.
          </Typography>
          <IncomeTable totalIncome={totalIncome} sacrificeRate={sacrificeRate} />
        </div>
      </AccordionDetails>
    </Accordion>
  )
}
