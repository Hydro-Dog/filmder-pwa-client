import { Button, CssBaseline, ThemeProvider } from '@mui/material';
import { FC, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link, Outlet } from 'react-router-dom';
import { lightTheme, darkTheme } from 'src/themes/filmder-mui-themes';

export const MainTabs: FC = () => {
  const [light, setLight] = useState(true);
  const { t, i18n } = useTranslation(['translation']);

  const onClick = () => {
    setLight(!light);
    i18n.changeLanguage('en');
  };

  return (
    <ThemeProvider theme={light ? lightTheme : darkTheme}>
      <CssBaseline />

      <div className="App">

        <h1 onClick={onClick} className="    text-3xl font-bold underline">
          Hello world!
          {t('title')}
        </h1>
        <Button color="primary" variant="contained">Hello World</Button>
        <Link to="/invoices">Invoices</Link>
        <Link to="/expenses">Expenses</Link>
        <Outlet />
      </div>
    </ThemeProvider>
  );
};
