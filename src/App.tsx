import React, { FC, Suspense } from 'react';
import './App.css';
import {
  BrowserRouter,
} from 'react-router-dom';
import AppRouter from './router/AppRouter';
import { AppSettingsWrapper } from './components/shared/ThemeWrapper';
import { SocketProvider } from './utils/SocketProvider/SocketProvider';
import { AlertComponent } from './components/shared/AlertComponent/AlertComponent';

const App: FC = () => (
  <AppSettingsWrapper>
    <SocketProvider />
    <AlertComponent />
    <Suspense fallback={<div>Suspense</div>}>
      <BrowserRouter>
        <AppRouter />
      </BrowserRouter>
    </Suspense>
  </AppSettingsWrapper>
);

export default App;
