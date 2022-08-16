import { lazy } from 'react';
import { Routes, Route } from 'react-router-dom';

const MainTabs = lazy(() => import('src/components/MainTabsPage'));

const AppRouter = () => (
  <Routes>
    <Route path="/" element={<MainTabs />}>
      <Route path="expenses" element={<h1>111</h1>} />
      <Route path="invoices" element={<h1>222</h1>} />
    </Route>
  </Routes>
);

export default AppRouter;
