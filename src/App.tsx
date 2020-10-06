import React, {useState} from 'react';
import {SuperSlider, SuperSliderInput} from './components/SuperSlider';
import {
  Box,
  Button,
  ButtonGroup, Chip,
  createStyles, Divider,
  Fab,
  Icon, IconButton,
  InputAdornment, InputBase,
  MenuItem, Paper,
  TextField,
  Theme, Tooltip, Typography
} from "@material-ui/core";
import NavigationIcon from '@material-ui/icons/Navigation';
import AttachMoney from '@material-ui/icons/AttachMoney';
import Send from '@material-ui/icons/Send';
import Remove from '@material-ui/icons/Remove';
import Add from '@material-ui/icons/Add';
import {makeStyles} from "@material-ui/core/styles";
import {SuperInput} from "./components/SuperInput";
import {SummaryTable} from "./components/SummaryTable";
import {IncomeTaxTable} from "./components/IncomeTaxTable";
import {SuperTable} from "./components/SuperTable";
import {SuperTaxTable} from "./components/SuperTaxTable";
import {IncomeTable} from "./components/IncomeTable";
import {TotalTaxTable} from "./components/TotalTaxTable";
import {SuperCalculation} from "./components/faq/SuperCalculation";
import {SuperCalculatorProvider} from "./hooks";
import {SuperTaxation} from "./components/faq/SuperTaxation";
import {IncomeCalculation} from "./components/faq/IncomeCalculation";
import {IncomeTaxation} from "./components/faq/IncomeTaxation";
import {TotalTaxation} from "./components/faq/TotalTaxCalculation";
import {FAQs} from "./components/faq";

const defaultIncome = 70000;
const minimumIncome = 30000;
const gap = 10000;
const numberOfGaps = 18;
const incomes = [minimumIncome];
for (let i = 1; i < numberOfGaps; i++) {
  const income = minimumIncome + i * gap;
  incomes.push(income);
}

const defaultSacrificeRate = 0.10;

// const useStyles = makeStyles((theme: Theme) =>
//   createStyles({
//     root: {
//       '& > *': {
//         margin: theme.spacing(1),
//       },
//     },
//   }),
// );

// Create our number formatter.
const formatter = new Intl.NumberFormat('en-AU', {
  style: 'currency',
  currency: 'AUD',

  // These options are needed to round to whole numbers if that's what you want.
  //minimumFractionDigits: 0,
  //maximumFractionDigits: 0,
});

function App() {

  const [totalIncome, setTotalIncome] = useState(defaultIncome);
  const [sacrificeRate, setSacrificeRate] = useState(defaultSacrificeRate);

  const handleSliderChange = (event: any, newValue: number | number[]) => {
    if (typeof newValue === 'number') {
      setSacrificeRate(newValue);
    }
  };

  const updateSacrificeRate = (sacrificeRate: number) => {
    if (sacrificeRate > 0 && sacrificeRate <= 1) {
      setSacrificeRate(sacrificeRate);
    }
  }

  return (
    <div>
      <SuperInput sacrificeRate={sacrificeRate}
                  totalIncome={totalIncome}
                  updateSacrificeRate={(sacrificeRate) => updateSacrificeRate(sacrificeRate)}
                  updateTotalIncome={(totalIncome) => setTotalIncome(totalIncome)}/>
      <SummaryTable totalIncome={totalIncome} sacrificeRate={sacrificeRate}/>
      <SuperCalculatorProvider totalIncome={totalIncome} sacrificeRate={sacrificeRate}>
        <FAQs/>
      </SuperCalculatorProvider>
      {/*<form>*/}
      {/*  <TextField*/}
      {/*    select*/}
      {/*    required*/}
      {/*    id={"totalIncomeSelect"}*/}
      {/*    label="Total Income"*/}
      {/*    value={totalIncome}*/}
      {/*    onChange={(event) => setTotalIncome(parseInt(event.target.value))}*/}
      {/*    type={"number"}*/}
      {/*    helperText="Some important text"*/}
      {/*    variant="outlined"*/}
      {/*    InputProps={{*/}
      {/*      startAdornment: (*/}
      {/*        <InputAdornment position="start">*/}
      {/*          <AttachMoney/>*/}
      {/*        </InputAdornment>*/}
      {/*      ),*/}
      {/*    }}*/}
      {/*  >*/}
      {/*    {incomes.map((income) => (*/}
      {/*      <MenuItem key={income} value={income}>*/}
      {/*        {income}*/}
      {/*      </MenuItem>*/}
      {/*    ))}*/}
      {/*  </TextField>*/}
      {/*</form>*/}
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
