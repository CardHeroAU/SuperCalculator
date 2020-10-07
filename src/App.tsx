import React, {useState} from 'react';
import {
  Box,
  Fab,
  Icon,
} from "@material-ui/core";
import {SuperInput} from "./components/SuperInput";
import {SummaryTable} from "./components/SummaryTable";
import {SuperCalculatorProvider} from "./hooks";
import {FAQs} from "./components/faq";
import {DEFAULT_INCOME, DEFAULT_SACRIFICE_RATE} from "./config";

const minimumIncome = 30000;
const gap = 10000;
const numberOfGaps = 18;
const incomes = [minimumIncome];
for (let i = 1; i < numberOfGaps; i++) {
  const income = minimumIncome + i * gap;
  incomes.push(income);
}

function App() {

  const [totalIncome, setTotalIncome] = useState(DEFAULT_INCOME);
  const [sacrificeRate, setSacrificeRate] = useState(DEFAULT_SACRIFICE_RATE);

  const updateIncome = (totalIncome: number) => {
    if (totalIncome >= 0) {
      setTotalIncome(totalIncome);
    }
  }

  const updateSacrificeRate = (sacrificeRate: number) => {
    if (sacrificeRate > 0 && sacrificeRate <= 1) {
      setSacrificeRate(sacrificeRate);
    }
  }

  return (
    <div>
      <Box display="flex">
        <SuperInput sacrificeRate={sacrificeRate}
                    totalIncome={totalIncome}
                    updateSacrificeRate={(sacrificeRate) => updateSacrificeRate(sacrificeRate)}
                    updateTotalIncome={(totalIncome) => updateIncome(totalIncome)}/>
      </Box>
      <SuperCalculatorProvider totalIncome={totalIncome} sacrificeRate={sacrificeRate}>
        <Box>
          <SummaryTable/>
        </Box>
        <Box>
          <FAQs/>
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
