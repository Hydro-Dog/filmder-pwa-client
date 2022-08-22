import { Button, IconButton, Paper } from '@mui/material';
import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { FilmderRoutes } from 'src/router/FilmderRoutes';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';

export const MainPage: FC = () => {
  const { t } = useTranslation(['translation']);

  return (
    <div className="flex h-full">
      <div className="m-auto flex flex-col gap-2">
        <div className="relative  w-full">
          <Paper sx={{ margin: '12px' }} elevation={5}>
            <div className="flex items-center justify-between gap-2">

              <div className="py-2 px-3 text-l font-semibold text-stone-500">Nickname Nickname Nickname</div>
              <IconButton
                size="small"
                color="primary"
                aria-label="back-button"
              >
                <ContentCopyIcon sx={{width: '24px', height: '24px'}}/>
              </IconButton>
            </div>
          </Paper>
        </div>
        <Link to={FilmderRoutes.CreateNewGame}>
          <Button
            style={{ padding: '15px 40px', fontSize: '1.2rem', width: '100%' }}
            size="large"
            variant="contained"
          >
            {t('START_NEW_GAME')}
          </Button>
        </Link>
        <Link to={FilmderRoutes.HowToPlay}>
          <Button
            style={{ padding: '15px 40px', fontSize: '1.2rem', width: '100%' }}
            size="large"
          >
            {t('HOW_TO_PLAY')}
          </Button>
        </Link>
      </div>
    </div>
  );
};
