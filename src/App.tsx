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
import { StepPage } from './pages/StepPage';
import 'normalize.css';
import './index.css';
import { ROUTE_RESULT, ROUTE_START, ROUTE_STEP_SLUG } from './config';

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
                const previousStep = currentStep === 1 ? ROUTE_START : `${ROUTE_STEP_SLUG}/${currentStep - 1}`;
                const nextStep = currentStep === steps.length ? ROUTE_RESULT : `${ROUTE_STEP_SLUG}/${currentStep + 1}`;
                return (
                  <Route exact path={`${ROUTE_STEP_SLUG}/${currentStep}`}>
                    <StepPage
                      progress={progress}
                      previousPage={previousStep}
                      nextPage={nextStep}
                    >
                      {step}
                    </StepPage>
                  </Route>
                );
              })
            }
          <Route exact path={ROUTE_RESULT}>
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
