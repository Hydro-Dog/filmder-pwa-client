import { Paper } from '@mui/material';
import { FC } from 'react';

type StepperStep = {
    title: string;
    text: string;
    image?: string
}

type StepperHeaderProps = {
    steps: StepperStep[],
    activeStepIndex: number
}

export const StepCard: FC<StepperHeaderProps> = ({ steps, activeStepIndex }) => (
  <Paper sx={{ margin: '12px' }} elevation={3}>
    <div className="flex w-full flex-col justify-center gap-3 p-3 text-center">
      <div className="text-lg font-semibold">{steps[activeStepIndex].title}</div>
      <div className="">{steps[activeStepIndex].text}</div>
    </div>
  </Paper>
);
