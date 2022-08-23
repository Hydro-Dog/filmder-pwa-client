import { Button } from '@mui/material';
import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { FilmderRoutes } from 'src/router/FilmderRoutes';

export const CreateNewGameButton: FC = () => {
  const { t } = useTranslation(['translation']);

  return (
    <Link to={FilmderRoutes.CreateNewGame}>
      <Button
        style={{ padding: '15px 40px', fontSize: '1.2rem', width: '100%' }}
        size="large"
        variant="contained"
      >
        {t('MAIN_PAGE.START_NEW_GAME')}
      </Button>
    </Link>
  );
};
