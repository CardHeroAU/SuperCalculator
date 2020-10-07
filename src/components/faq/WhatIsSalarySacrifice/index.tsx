import {Accordion, AccordionDetails, AccordionSummary, Paper, Typography} from "@material-ui/core";
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import React from "react";
import image from "../../../assets/images/salary-sacrifice.png"

export const WhatIsSalarySacrifice = () => {

  return (
    <Accordion>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        id="salary-sacrifice"
        aria-controls="salary-sacrifice"
      >
        <Typography >What IS Salary Sacrifice?</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <div>
          <Typography paragraph={true}>
            Salary sacrifice means a part of pre-tax salary is sacrificed in return for benefits of a similar value, e.g. Superannuation.
          </Typography>
          <Typography paragraph={true}>
            Salary sacrifice lowers your taxable income, which could lead to less tax.
          </Typography>
          <Paper variant="outlined">
            <img src={image} alt="salary-sacrifice" width="100%" />
          </Paper>
        </div>
      </AccordionDetails>
    </Accordion>
  )
}
