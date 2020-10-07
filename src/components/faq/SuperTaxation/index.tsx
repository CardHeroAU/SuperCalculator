import {Accordion, AccordionDetails, AccordionSummary, Typography} from "@material-ui/core";
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import React from "react";
import {useSuperCalculator} from "../../../hooks";
import {SuperTaxTable} from "../../SuperTaxTable";

export const SuperTaxation = () => {

  const {
    totalIncome,
    sacrificeRate
  } = useSuperCalculator();

  return (
    <Accordion>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        id="superannuation-taxation"
        aria-controls="superannuation-taxation"
      >
        <Typography >How is Superannuation Taxed?</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
          sit amet blandit leo lobortis eget.
        </Typography>
        <SuperTaxTable totalIncome={totalIncome} sacrificeRate={sacrificeRate} />
      </AccordionDetails>
    </Accordion>
  )
}
