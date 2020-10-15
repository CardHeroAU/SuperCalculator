import React from 'react';
import {
  Box,
  Button,
  Container,
  Grid,
  LinearProgress,
  LinearProgressProps,
  MenuItem,
  Select,
  Tooltip,
  Typography,
} from '@material-ui/core';
import { Link } from 'react-router-dom';
import currencyFormatter from '../../utils/formatter';
import { useSuperCalculator } from '../../hooks';

const minimumIncome = 30000;
const gap = 20000;
const numberOfGaps = 9;
const incomes = [minimumIncome];
for (let i = 1; i < numberOfGaps; i += 1) {
  const income = minimumIncome + i * gap;
  incomes.push(income);
}

interface TotalIncomeInputProp {
  setTotalIncome: (newTotalIncome: number) => void;
}

/* eslint-disable react/jsx-props-no-spreading */
function LinearProgressWithLabel(props: LinearProgressProps & { value: number }) {
  const {
    value,
  } = props;

  return (
    <Container maxWidth="sm">
      <Box display="flex" alignItems="center">
        <Box width="100%" mr={1}>
          <LinearProgress variant="determinate" {...props} />
        </Box>
        <Box minWidth={35}>
          <Typography variant="body2" color="textSecondary">
            {`${Math.round(
              value,
            )}%`}
          </Typography>
        </Box>
      </Box>
    </Container>
  );
}

export const TotalIncomeInput = ({ setTotalIncome }: TotalIncomeInputProp) => {
  const {
    before: {
      income: {
        total: totalIncome,
      },
    },
  } = useSuperCalculator();

  const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    setTotalIncome(parseInt(event.target.value as string, 10));
  };

  return (
    <Container maxWidth="sm">
      <Grid container>
        <LinearProgressWithLabel value={40} />
        <Grid item>
          <Typography variant="h1">
            Select an income
          </Typography>
        </Grid>
        <Grid item>
          <Typography variant="subtitle1">
            Select an estimated income to continue.
            <Tooltip title="In order to get an accurate">
              <Button color="primary">
                Why?
              </Button>
            </Tooltip>
          </Typography>
        </Grid>
        <Grid item>
          <Select
            value={totalIncome}
            onChange={handleChange}
            displayEmpty
            inputProps={{ 'aria-label': 'Without label' }}
          >
            {
            incomes.map((income) => (
              <MenuItem value={income}>
                <em>{currencyFormatter.format(income)}</em>
              </MenuItem>
            ))
          }
          </Select>
        </Grid>
        <Grid item>
          <Button
            variant="contained"
            color="primary"
            component={Link}
            to="/step/2"
          >
            Continue
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
};
