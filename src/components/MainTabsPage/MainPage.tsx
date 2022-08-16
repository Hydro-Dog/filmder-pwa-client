import { Button } from '@mui/material';
import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { GlobalSettingsWrapper } from 'src/GlobalSettingsWrapper';

export const MainPage: FC = () => {
  const { t } = useTranslation(['translation']);

  return (
    <GlobalSettingsWrapper>
      <div className="App">
        <div className="flex h-screen">
          <div className="m-auto">

            <Link to="/create-new-game">
              <Button
                style={{ padding: '15px 40px', fontSize: '1.2rem' }}
                size="large"
                variant="contained"
              >
                {t('START_NEW_GAME')}
              </Button>
            </Link>
            <Button
                style={{ padding: '15px 40px', fontSize: '1.2rem' }}
                size="large"
              >
                {t('HOW_TO_PLAY')}
              </Button>
          </div>

        </div>
      </div>
    </GlobalSettingsWrapper>
  );
};
