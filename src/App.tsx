import React, { useState } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
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
  const updateTotalIncome = (newIncome: number) => {
    if (newIncome >= 0) {
      setTotalIncome(newIncome);
    }
  };

  const [sacrificeRate, setSacrificeRate] = useState(DEFAULT_SACRIFICE_RATE);
  const updateSacrificeRate = (newSacrificeRate: number) => {
    if (newSacrificeRate > 0 && newSacrificeRate <= 1) {
      setSacrificeRate(newSacrificeRate);
    }
  };

  return (
    <SuperCalculatorProvider totalIncome={totalIncome} sacrificeRate={sacrificeRate}>
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <p>Welcome</p>
          </Route>
          <Route exact path="/result">
            <ResultPage
              updateSacrificeRate={(newSacrificeRate) => updateSacrificeRate(newSacrificeRate)}
              updateTotalIncome={(newTotalIncome) => updateTotalIncome(newTotalIncome)}
            />
          </Route>
        </Switch>
      </BrowserRouter>
    </SuperCalculatorProvider>
  );
}

export default App;
