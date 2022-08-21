import {
  Stepper, Step, StepLabel, Button, Paper,
} from '@mui/material';
import { FC, useState } from 'react';
import { BackButton } from 'src/components/shared/BackButton/BackButton';
import { useTranslation } from 'react-i18next';

export const HowToPlayPage: FC = () => {
  const { t } = useTranslation(['translation']);
  const steps = [
    { title: t('HOW_TO_PLAY_STEPS.CREATE_GAME_TITLE'), text: t('HOW_TO_PLAY_STEPS.CREATE_GAME') },
    { title: t('HOW_TO_PLAY_STEPS.SEND_INVITATION_TITLE'), text: t('HOW_TO_PLAY_STEPS.SEND_INVITATION') },
    { title: t('HOW_TO_PLAY_STEPS.SWIPE_FILMS_TITLE'), text: t('HOW_TO_PLAY_STEPS.SWIPE_FILMS') },
    { title: t('HOW_TO_PLAY_STEPS.SEE_RESULTS_TITLE'), text: t('HOW_TO_PLAY_STEPS.SEE_RESULTS') },
  ];
  const [activeStep, setActiveStep] = useState(0);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };
  return (
    <div>
      <BackButton />

      <Stepper activeStep={activeStep}>
        {steps.map((item) => (
          <Step key={item.title}>
            <StepLabel />
          </Step>
        ))}
      </Stepper>

      <div className="mt-10">
        <Paper sx={{ margin: '12px' }} elevation={3}>
          <div className="flex w-full flex-col justify-center gap-3 p-3 text-center">
            <div className="text-lg font-semibold">{steps[activeStep].title}</div>
            <div className="">{steps[activeStep].text}</div>
          </div>
        </Paper>
        <div className="absolute bottom-4 flex w-full justify-between px-3">
          <Button
            disabled={activeStep === 0}
            onClick={handleBack}
          >
            {t('CORE.BACK')}
          </Button>

          {activeStep !== steps.length - 1 && (
            <Button onClick={handleNext}>
              {t('CORE.NEXT')}
            </Button>
          )}
        </div>
      </div>

    </div>
  );
};
