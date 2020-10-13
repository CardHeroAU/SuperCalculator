import {
  createStyles,
  Divider,
  IconButton,
  InputBase,
  Paper,
  Theme,
  Tooltip,
  Typography,
} from '@material-ui/core';
import AttachMoney from '@material-ui/icons/AttachMoney';
import Remove from '@material-ui/icons/Remove';
import Add from '@material-ui/icons/Add';
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

interface SuperInputProp {
  totalIncome: number;
  sacrificeRate: number;
  updateTotalIncome: (totalIncome: number) => void;
  updateSacrificeRate: (sacrificeRate: number) => void;
}

const useStyles = makeStyles((theme: Theme) => createStyles({
  root: {
    padding: '2px 4px',
    display: 'flex',
    alignItems: 'center',
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1,
  },
  iconButton: {
    padding: 10,
  },
  divider: {
    height: 28,
    margin: 4,
  },
}));

export const SuperInput = ({
  totalIncome, sacrificeRate, updateTotalIncome, updateSacrificeRate,
}: SuperInputProp) => {
  const classes = useStyles();

  // const [includeSuper, setIncludesSuper] = useState(true);

  return (
    <Paper component="form" className={classes.root}>
      <IconButton className={classes.iconButton} aria-label="menu">
        <AttachMoney />
      </IconButton>
      <InputBase
        required
        id="totalIncomeSelect"
        className={classes.input}
        value={totalIncome}
        onChange={(event) => updateTotalIncome(parseInt(event.target.value, 10))}
        type="number"
        placeholder="Enter Total Income"
        inputProps={{ 'aria-label': 'search google maps' }}
      />
      {/* <Select */}
      {/*  value={includeSuper ? "incl" : "excl"} */}
      {/*  onChange={(event) => setIncludesSuper(event.target.value === 'incl')} */}
      {/*  displayEmpty */}
      {/*  inputProps={{ 'aria-label': 'Without label' }} */}
      {/* > */}
      {/*  <MenuItem value={"incl"}> */}
      {/*    <em>Incl.</em> */}
      {/*  </MenuItem> */}
      {/*  <MenuItem value={"excl"}> */}
      {/*    <em>Excl.</em> */}
      {/*  </MenuItem> */}
      {/* </Select> */}
      <Divider className={classes.divider} orientation="vertical" />
      <IconButton
        className={classes.iconButton}
        aria-label="decreaseRate"
        onClick={() => updateSacrificeRate(sacrificeRate - 0.01)}
      >
        <Remove />
      </IconButton>
      <InputBase
        value={(sacrificeRate * 100).toFixed(0)}
        onChange={(event) => updateSacrificeRate(parseInt(event.target.value, 10) / 100)}
        style={{ width: 20 }}
      />
      <Tooltip title="Salary Sacrifice">
        <Typography>
          %
        </Typography>
      </Tooltip>
      <IconButton
        className={classes.iconButton}
        aria-label="increaseRate"
        onClick={() => updateSacrificeRate(sacrificeRate + 0.01)}
        color="primary"
      >
        <Add />
      </IconButton>
      {/* <Divider className={classes.divider} orientation="vertical" /> */}
      {/* <IconButton */}
      {/*  className={classes.iconButton} */}
      {/*  aria-label="sendEmail" */}
      {/*  onClick={() => updateSacrificeRate(sacrificeRate + 0.01)} */}
      {/*  color="primary" > */}
      {/*  <Send /> */}
      {/* </IconButton> */}
    </Paper>
  );
};
