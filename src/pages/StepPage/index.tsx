import React from 'react';
import { Fab } from '@material-ui/core';
import { Link } from 'react-router-dom';
import NavigateBefore from '@material-ui/icons/NavigateBefore';
import NavigateNext from '@material-ui/icons/NavigateNext';
import { PageContainer } from './style';
import { LinearProgressWithLabel } from '../../components/LinearProgressWithLabel';

interface ProgressProp {
  progress: number;
  previousPage: string;
  nextPage: string;
}

export const StepPage: React.FC<ProgressProp> = ({
  children,
  progress,
  previousPage,
  nextPage,
}) => (
  <PageContainer maxWidth="md">
    <LinearProgressWithLabel value={progress} />
    {children}
    <Fab
      size="small"
      aria-label="add"
      component={Link}
      to={previousPage}
    >
      <NavigateBefore />
    </Fab>
    <Fab
      aria-label="add"
      color="primary"
      component={Link}
      to={nextPage}
    >
      <NavigateNext />
    </Fab>
  </PageContainer>
);
