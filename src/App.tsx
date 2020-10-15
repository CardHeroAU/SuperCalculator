import React from 'react';
import {
  BrowserRouter, Switch, Route, Redirect,
} from 'react-router-dom';
import { Result } from './pages/Result';
import { SuperCalculatorProvider } from './hooks';
import { useSacrificeRate } from './hooks/useSacrificeRate';
import { useTotalIncome } from './hooks/useTotalIncome';
import { Welcome } from './pages/Welcome';
import { TotalIncomeInput } from './pages/TotalIncomeInput';

const App = () => {
  // Global State
  const [sacrificeRate, updateSacrificeRate] = useSacrificeRate();
  const [totalIncome, updateTotalIncome] = useTotalIncome();

  const steps = [
    <TotalIncomeInput setTotalIncome={(newTotalIncome) => updateTotalIncome(newTotalIncome)} />,
  ];

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
          {
            steps.map((step, i) => (
              <Route exact path={`/step/${i + 1}`}>
                {step}
              </Route>
            ))
          }
          <Route exact path="/result">
            <Result
              updateSacrificeRate={(newSacrificeRate) => updateSacrificeRate(newSacrificeRate)}
              updateTotalIncome={(newTotalIncome) => updateTotalIncome(newTotalIncome)}
            />
          </Route>
          <Route render={() => <Redirect to="/" />} />
        </Switch>
      </BrowserRouter>
    </SuperCalculatorProvider>
  );
};

export default App;
