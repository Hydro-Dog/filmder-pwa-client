import { FC, useCallback, useState } from 'react';
import { BackButton } from 'src/components/shared/BackButton/BackButton';
import { useTranslation } from 'react-i18next';
import { StepperHeader } from './components/StepperHeader';
import { StepCard } from './components/StepCard';
import { StepsNavigation } from './components/StepsNavigation';

export const HowToPlayPage: FC = () => {
  const { t } = useTranslation(['translation']);
  const steps = [
    { title: t('HOW_TO_PLAY_STEPS.CREATE_GAME_TITLE'), text: t('HOW_TO_PLAY_STEPS.CREATE_GAME') },
    { title: t('HOW_TO_PLAY_STEPS.SEND_INVITATION_TITLE'), text: t('HOW_TO_PLAY_STEPS.SEND_INVITATION') },
    { title: t('HOW_TO_PLAY_STEPS.SWIPE_FILMS_TITLE'), text: t('HOW_TO_PLAY_STEPS.SWIPE_FILMS') },
    { title: t('HOW_TO_PLAY_STEPS.SEE_RESULTS_TITLE'), text: t('HOW_TO_PLAY_STEPS.SEE_RESULTS') },
  ];
  const [activeStepIndex, setActiveStepIndex] = useState(0);

  const handleNext = useCallback(() => {
    setActiveStepIndex((prevActiveStep) => prevActiveStep + 1);
  }, []);

  const handleBack = useCallback(() => {
    setActiveStepIndex((prevActiveStep) => prevActiveStep - 1);
  }, []);

  return (
    <div className="flex h-full w-full flex-col justify-start">
      <BackButton />
      <StepperHeader steps={steps} activeStepIndex={activeStepIndex} />
      <StepCard steps={steps} activeStepIndex={activeStepIndex} />
      <StepsNavigation
        classes=""
        activeStepIndex={activeStepIndex}
        stepsLength={steps.length}
        handleBack={handleBack}
        handleNext={handleNext}
      />

    </div>
  );
};
