import React, { FC, Suspense } from 'react';
import './App.css';
import {
  BrowserRouter,
} from 'react-router-dom';
import AppRouter from './router/AppRouter';
import { AppSettingsWrapper } from './components/shared/ThemeWrapper';

const App: FC = () => (
  <AppSettingsWrapper>
    <Suspense fallback={<div>Suspense</div>}>
      <BrowserRouter>
        <AppRouter />
      </BrowserRouter>
    </Suspense>
  </AppSettingsWrapper>
);

export default App;
