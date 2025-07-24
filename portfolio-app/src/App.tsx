import { Routes, Route } from 'react-router-dom';
import Portfolio from './pages/portfolio';
import NotFound from './pages/404';
// import ServerError from './pages/500';

function App() {
  return (
    <Routes>
      <Route path="/portfolio" element={<Portfolio />} />
      
      {/* 404 fallback */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
