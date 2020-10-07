import {Accordion, AccordionDetails, AccordionSummary, Paper, Typography} from "@material-ui/core";
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import React from "react";
import image from "../../../assets/images/why-salary-sacrifice.png"

export const WhySalarySacrifice = () => {

  return (
    <Accordion>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        id="superannuation-taxation"
        aria-controls="superannuation-taxation"
      >
        <Typography >Why would someone sacrifice their salary for superannuation?</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <div>
          <Typography paragraph={true}>
            Super is YOUR money.
          </Typography>
          <Typography paragraph={true}>
            Salary sacrificing lowers taxable income. The less tax owed, the more you get to keep.
          </Typography>
          <Paper variant="outlined">
            <img src={image} alt="why-salary-sacrifice" width="100%" />
          </Paper>
        </div>
      </AccordionDetails>
    </Accordion>
  )
}
