import React, { useState } from 'react';
import {
  Box,
  Fab,
  Icon,
} from '@material-ui/core';
import { SuperInput } from './components/SuperInput';
import { SummaryTable } from './components/SummaryTable';
import { SuperCalculatorProvider } from './hooks';
import { FAQs } from './components/faq';
import { DEFAULT_INCOME, DEFAULT_SACRIFICE_RATE } from './config';

const minimumIncome = 30000;
const gap = 10000;
const numberOfGaps = 18;
const incomes = [minimumIncome];
for (let i = 1; i < numberOfGaps; i += 1) {
  const income = minimumIncome + i * gap;
  incomes.push(income);
}

function App() {
  const [totalIncome, setTotalIncome] = useState(DEFAULT_INCOME);
  const [sacrificeRate, setSacrificeRate] = useState(DEFAULT_SACRIFICE_RATE);

  const updateIncome = (newIncome: number) => {
    if (newIncome >= 0) {
      setTotalIncome(newIncome);
    }
  };

  const updateSacrificeRate = (newSacrificeRate: number) => {
    if (newSacrificeRate > 0 && newSacrificeRate <= 1) {
      setSacrificeRate(newSacrificeRate);
    }
  };

  return (
    <div>
      <Box display="flex">
        <SuperInput
          sacrificeRate={sacrificeRate}
          totalIncome={totalIncome}
          updateSacrificeRate={(newSacrificeRate) => updateSacrificeRate(newSacrificeRate)}
          updateTotalIncome={(newTotalIncome) => updateIncome(newTotalIncome)}
        />
      </Box>
      <SuperCalculatorProvider totalIncome={totalIncome} sacrificeRate={sacrificeRate}>
        <Box>
          <SummaryTable />
        </Box>
        <Box>
          <FAQs />
        </Box>
      </SuperCalculatorProvider>
      <Box display="flex">
        <Box m="auto">
          <Fab variant="extended" color="primary" aria-label="add">
            Send this to me
            <Icon>send</Icon>
          </Fab>
        </Box>
      </Box>
    </div>
  );
}

export default App;
