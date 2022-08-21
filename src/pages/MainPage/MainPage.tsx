import { Button } from '@mui/material';
import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { FilmderRoutes } from 'src/router/FilmderRoutes';

export const MainPage: FC = () => {
  const { t } = useTranslation(['translation']);

  return (
    <div className="App">
      <div className="flex h-screen">
        <div className="m-auto flex flex-col gap-2">
          <Link to={FilmderRoutes.CreateNewGame}>
            <Button
              style={{ padding: '15px 40px', fontSize: '1.2rem' }}
              size="large"
              variant="contained"
            >
              {t('START_NEW_GAME')}
            </Button>
          </Link>
          <Link to={FilmderRoutes.HowToPlay}>
            <Button
              style={{ padding: '15px 40px', fontSize: '1.2rem' }}
              size="large"
            >
              {t('HOW_TO_PLAY')}
            </Button>
          </Link>

        </div>

      </div>
    </div>

  );
};
