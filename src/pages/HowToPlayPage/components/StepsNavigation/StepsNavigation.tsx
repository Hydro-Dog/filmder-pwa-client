import classNames from 'classnames';
import { Button } from '@mui/material';
import { FC } from 'react';
import { useTranslation } from 'react-i18next';

type StepsNavigationProps = {
    activeStepIndex: number;
    stepsLength: number;
    classes: string;
    handleBack: () => void;
    handleNext: () => void;}

export const StepsNavigation: FC<StepsNavigationProps> = ({
  activeStepIndex, stepsLength, classes, handleBack, handleNext,
}) => {
  const { t } = useTranslation(['translation']);

  const wrapperClasses = classNames('flex justify-between', classes);

  return (
    <div className={wrapperClasses}>
      <Button
        disabled={activeStepIndex === 0}
        onClick={handleBack}
      >
        {t('CORE.BACK')}
      </Button>

      {activeStepIndex !== stepsLength - 1 && (
      <Button size="small" onClick={handleNext}>
        {t('CORE.NEXT')}
      </Button>
      )}
    </div>
  );
};
