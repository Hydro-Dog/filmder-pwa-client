import { Button } from '@mui/material';
import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { FilmderRoutes } from 'src/router/FilmderRoutes';

export const HowToPlayButton: FC = () => {
  const { t } = useTranslation(['translation']);
  return (
    <Link to={FilmderRoutes.HowToPlay}>
      <Button
        style={{ padding: '15px 40px', fontSize: '1.2rem', width: '100%' }}
        size="large"
      >
        {t('MAIN_PAGE.HOW_TO_PLAY')}
      </Button>
    </Link>
  );
};
