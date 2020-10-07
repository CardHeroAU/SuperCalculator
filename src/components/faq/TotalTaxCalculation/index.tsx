import {Accordion, AccordionDetails, AccordionSummary, Paper, Typography} from "@material-ui/core";
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
        <Typography >How is the Total Tax calculated?</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <div>
          <Typography>
            Only Individual Income Tax and Superannuation Tax is considered in SuperCalculator.
          </Typography>
          <Paper variant="outlined">
            <Typography variant="h6" gutterBottom>
              Total Tax = Income Tax + Super Tax
            </Typography>
          </Paper>
          <Typography gutterBottom>
            Income Tax depends on Taxable Income
          </Typography>
          <Typography gutterBottom>
            Super Tax depends on Superannuation Contribution
          </Typography>
        </div>
      </AccordionDetails>
    </Accordion>
  )
}
