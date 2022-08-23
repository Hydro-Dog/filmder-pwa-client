import React, { FC, Suspense } from 'react';
import './App.css';
import {
  BrowserRouter,
} from 'react-router-dom';
import AppRouter from './router/AppRouter';
import { AppSettingsWrapper } from './utils/ThemeWrapper';
import { SocketProvider } from './utils/SocketProvider/SocketProvider';
import { FilmderNotificationComponent } from './components/shared/FilmderNotificationsComponent';

const App: FC = () => (
  <AppSettingsWrapper>
    <SocketProvider />
    <FilmderNotificationComponent />
    <Suspense fallback={<div>Suspense</div>}>
      <BrowserRouter>
        <AppRouter />
      </BrowserRouter>
    </Suspense>
  </AppSettingsWrapper>
);

export default App;
