import {Accordion, AccordionDetails, AccordionSummary, Typography} from "@material-ui/core";
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import React from "react";
import {SuperTable} from "../../SuperTable";
import {useSuperCalculator} from "../../../hooks";

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
        <Typography >How is Superannuation Calculated?</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
          sit amet blandit leo lobortis eget.
        </Typography>
        <SuperTable totalIncome={totalIncome} sacrificeRate={sacrificeRate} />
      </AccordionDetails>
    </Accordion>
  )
}
