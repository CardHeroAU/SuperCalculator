import {Accordion, AccordionDetails, AccordionSummary, Typography} from "@material-ui/core";
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import React from "react";
import {useSuperCalculator} from "../../../hooks";
import {IncomeTaxTable} from "../../IncomeTaxTable";

export const IncomeTaxation = () => {

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
        <Typography >How is Income Taxed?</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
          sit amet blandit leo lobortis eget.
        </Typography>
        <IncomeTaxTable totalIncome={totalIncome} sacrificeRate={sacrificeRate} />
      </AccordionDetails>
    </Accordion>
  )
}
