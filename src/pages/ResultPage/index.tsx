import { Box, Fab, Icon } from '@material-ui/core';
import React from 'react';
import { SuperInput, SuperInputProp } from '../../components/SuperInput';
import { SummaryTable } from '../../components/SummaryTable';
import { FAQs } from '../../components/faq';

export const ResultPage = ({
  updateTotalIncome,
  updateSacrificeRate,
}: SuperInputProp) => (
  <>
    <Box display="flex">
      <SuperInput
        updateSacrificeRate={(newSacrificeRate) => updateSacrificeRate(newSacrificeRate)}
        updateTotalIncome={(newTotalIncome) => updateTotalIncome(newTotalIncome)}
      />
    </Box>
    <Box>
      <SummaryTable />
    </Box>
    <Box>
      <FAQs />
    </Box>
    <Box display="flex">
      <Box m="auto">
        <Fab variant="extended" color="primary" aria-label="add">
          Send this to me
          <Icon>send</Icon>
        </Fab>
      </Box>
    </Box>
  </>
);
