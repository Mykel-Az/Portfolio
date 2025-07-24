import { FiServer, FiRefreshCw, FiHome } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';

const ServerError = () => {
  const navigate = useNavigate();

  const handleRefresh = () => {
    window.location.reload();
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-amber-50 flex flex-col items-center justify-center p-6 text-center">
      <div className="max-w-md mx-auto">
        <FiServer className="text-6xl text-purple-600 mx-auto mb-6" />
        <h1 className="text-5xl font-bold text-purple-700 mb-4">500</h1>
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">Server Error</h2>
        <p className="text-gray-600 mb-8">
          Something went wrong on our end. Please try again later.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={handleRefresh}
            className="px-6 py-3 bg-amber-500 text-white rounded-lg font-medium hover:bg-amber-600 transition-colors flex items-center justify-center gap-2"
          >
            <FiRefreshCw /> Refresh Page
          </button>
          <button
            onClick={() => navigate('/')}
            className="px-6 py-3 border border-purple-600 text-purple-600 rounded-lg font-medium hover:bg-purple-50 transition-colors flex items-center justify-center gap-2"
          >
            <FiHome /> Go Home
          </button>
        </div>
      </div>
    </div>
  );
};

export default ServerError;