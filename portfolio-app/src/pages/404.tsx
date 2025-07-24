import { FaGhost, FaSearch } from 'react-icons/fa';

const NotFound = () => {
  return (
    <div className="min-h-screen bg-purple-50 flex flex-col items-center justify-center p-6 text-center">
      <div className="max-w-md mx-auto">
        <FaGhost className="text-8xl text-purple-400 mx-auto mb-6 animate-float" />
        
        <h1 className="text-5xl font-bold text-purple-700 mb-4">Whoops!</h1>
        
        <div className="bg-white p-8 rounded-xl shadow-sm mb-8">
          <FaSearch className="text-6xl text-amber-500 mx-auto mb-4" />
          <p className="text-2xl text-gray-700 mb-2">Nothing to see here...</p>
          <p className="text-gray-500">
            Just ghosts of ideas yet to come 👻
          </p>
        </div>
        
        <p className="text-gray-400">
          (This area is under construction. Check back later!)
        </p>
      </div>
    </div>
  );
};

export default NotFound;