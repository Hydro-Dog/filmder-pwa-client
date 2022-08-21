import { lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import { FilmderRoutes } from './FilmderRoutes';

const MainTabs = lazy(() => import('src/pages/MainPage'));
const HowToPlayPage = lazy(() => import('src/pages/HowToPlayPage'));

const AppRouter = () => (
  <Routes>
    <Route path={FilmderRoutes.Root} element={<MainTabs />} />
    <Route path={FilmderRoutes.HowToPlay} element={<HowToPlayPage />} />
  </Routes>
);

export default AppRouter;
