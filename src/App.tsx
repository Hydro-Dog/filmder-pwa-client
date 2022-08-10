import React, { FC, useState } from 'react';
import './App.css';
import Button from '@mui/material/Button';
import {
  Link, Outlet,
} from 'react-router-dom';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { darkTheme, lightTheme } from './themes/filmder-mui-themes';

const App: FC = () => {
  const [light, setLight] = useState(true);

  return (
    <ThemeProvider theme={light ? lightTheme : darkTheme}>
      <CssBaseline />

      <div className="App">

        <h1 onClick={() => { setLight(!light); }} className="    text-3xl font-bold underline">
          Hello world!
        </h1>
        <Button color="primary" variant="contained">Hello World</Button>
        <Link to="/invoices">Invoices</Link>
        <Link to="/expenses">Expenses</Link>
        <Outlet />
      </div>
    </ThemeProvider>
  );
};

export default App;
