import { Stepper, Step, StepLabel } from '@mui/material';
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

export const StepperHeader: FC<StepperHeaderProps> = ({ steps, activeStepIndex }) => (
  <Stepper activeStep={activeStepIndex}>
    {steps.map((item) => (
      <Step key={item.title}>
        <StepLabel />
      </Step>
    ))}
  </Stepper>
);
