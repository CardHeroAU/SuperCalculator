import {Accordion, AccordionDetails, AccordionSummary, Typography} from "@material-ui/core";
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import React from "react";
import {useSuperCalculator} from "../../../hooks";
import {TotalTaxTable} from "../../TotalTaxTable";

export const TotalTaxation = () => {

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
        <Typography >What's the total Taxed?</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
          sit amet blandit leo lobortis eget.
        </Typography>
        <TotalTaxTable totalIncome={totalIncome} sacrificeRate={sacrificeRate} />
      </AccordionDetails>
    </Accordion>
  )
}
