import React from 'react';
import { LinearProgressWithLabel } from '../../components/LinearProgressWithLabel';
import { PageContainer } from './style';

interface ProgressProp {
  progress: number;
}

export const StepPage: React.FC<ProgressProp> = ({ children, progress }) => (
  <PageContainer maxWidth="md">
    <LinearProgressWithLabel value={progress} />
    {children}
  </PageContainer>
);
