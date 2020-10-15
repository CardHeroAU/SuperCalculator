import React, { useState } from 'react';
import { Router } from '@material-ui/icons';
import { Switch, Route } from 'react-router-dom';
import { ResultPage } from './pages/ResultPage';
import { DEFAULT_INCOME, DEFAULT_SACRIFICE_RATE } from './config';
import { SuperCalculatorProvider } from './hooks';

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

  const updateTotalIncome = (newIncome: number) => {
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
    <SuperCalculatorProvider totalIncome={totalIncome} sacrificeRate={sacrificeRate}>
      <Router>
        <Switch>
          <Route exact path="/">
            <ResultPage
              updateSacrificeRate={(newSacrificeRate) => updateSacrificeRate(newSacrificeRate)}
              updateTotalIncome={(newTotalIncome) => updateTotalIncome(newTotalIncome)}
            />
          </Route>
        </Switch>
      </Router>
    </SuperCalculatorProvider>
  );
}

export default App;
