import { Button } from '@mui/material';
import { FC } from 'react';

type LanguageWidgetProps = {
    lang: string;
    onLangChange: () => void
}

export const LanguageWidget: FC<LanguageWidgetProps> = ({ lang, onLangChange }) => (
  <Button onClick={onLangChange} variant="text">
    {lang}
  </Button>
);
