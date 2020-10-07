import {Accordion, AccordionDetails, AccordionSummary, Typography} from "@material-ui/core";
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import React from "react";

export const WhatIsSuper = () => {

  return (
    <Accordion>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        id="superannuation-taxation"
        aria-controls="superannuation-taxation"
      >
        <Typography >What IS Super?</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <div>
          <Typography paragraph={true}>
            Super, or superannuation, is money set aside during your working life for when you retire. Your super is your future.
          </Typography>
          <Typography paragraph={true}>
            Super (including super guarantee from your employer), is your money.
          </Typography>
          <iframe title={"What is super"}
                  src="https://www.youtube.com/embed/9tN5zYppkE0?controls=0" frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen/>
        </div>
      </AccordionDetails>
    </Accordion>
  )
}
