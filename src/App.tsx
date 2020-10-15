import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Result } from './pages/Result';
import { SuperCalculatorProvider } from './hooks';
import { useSacrificeRate } from './hooks/useSacrificeRate';
import { useTotalIncome } from './hooks/useTotalIncome';
import { Welcome } from './pages/Welcome';
import { TotalIncomeInput } from './pages/TotalIncomeInput';

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
            <Welcome />
          </Route>
          <Route exact path="/step/1">
            <TotalIncomeInput />
          </Route>
          <Route exact path="/result">
            <Result
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
