import { Routes, Route } from 'react-router-dom';
import Portfolio from './pages/Portfolio';
import NotFound from './pages/404';
import ServerError from './pages/500';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Portfolio />} />
      <Route path="/500" element={<ServerError />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;