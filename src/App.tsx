import React, { FC, Suspense } from 'react';
import 'src/App.css';
import {
  BrowserRouter,
} from 'react-router-dom';
import { LanguageComponent } from 'src/core/LanguageComponent';
import { SocketProvider } from 'src/core/SocketProvider/SocketProvider';
import AppRouter from 'src/router/AppRouter';
import { AppSettingsWrapper } from 'src/core/ThemeWrapper';
import { FilmderNotificationComponent } from 'src/components/shared/FilmderNotificationsComponent';

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
