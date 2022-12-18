import { Routes, Route } from 'react-router-dom';
import { Home } from '../pages/Home';

export const App = () => {
  return (
    <Routes>
      <Route path="/InSight-web" element={<Home />} />
    </Routes>
  );
};
