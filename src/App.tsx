import React, { FC, Suspense } from 'react';
import './App.css';
import {
  BrowserRouter,
} from 'react-router-dom';
import AppRouter from './router/AppRouter';

const App: FC = () => (
  <Suspense fallback={<div>Suspense</div>}>
    <BrowserRouter>
      <AppRouter />
    </BrowserRouter>
  </Suspense>
);

export default App;
