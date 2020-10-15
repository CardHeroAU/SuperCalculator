import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { ResultPage } from './pages/ResultPage';
import { SuperCalculatorProvider } from './hooks';
import { useSacrificeRate } from './hooks/useSacrificeRate';
import { useTotalIncome } from './hooks/useTotalIncome';

const minimumIncome = 30000;
const gap = 10000;
const numberOfGaps = 18;
const incomes = [minimumIncome];
for (let i = 1; i < numberOfGaps; i += 1) {
  const income = minimumIncome + i * gap;
  incomes.push(income);
}

const App = () => {
  // Global State
  const [sacrificeRate, updateSacrificeRate] = useSacrificeRate();
  const [totalIncome, updateTotalIncome] = useTotalIncome();

  return (
    <SuperCalculatorProvider
      sacrificeRate={sacrificeRate}
      totalIncome={totalIncome}
    >
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
};

export default App;
