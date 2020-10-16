import {
  Box,
  Container,
  LinearProgress,
  Typography,
} from '@material-ui/core';
import React from 'react';

interface LinearProgressProps {
  value: number;
}

/* eslint-disable react/jsx-props-no-spreading */
export const LinearProgressWithLabel = (props: LinearProgressProps) => {
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
};
