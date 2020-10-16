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
import { LinearProgressWithLabel } from './components/LinearProgressWithLabel';

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
            steps.map((step, i) => {
              const currentStep = i + 1;
              const progress = (currentStep / steps.length) * 100;
              return (
                <Route exact path={`/step/${currentStep}`}>
                  <LinearProgressWithLabel value={progress} />
                  {step}
                </Route>
              );
            })
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
