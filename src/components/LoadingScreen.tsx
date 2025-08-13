import React from 'react';
import { Bot } from 'lucide-react';

const LoadingScreen: React.FC = () => {
  return (
    <div className="fixed inset-0 bg-white flex items-center justify-center z-50">
      <div className="text-center">
        <div className="animate-bounce mb-4">
          <Bot className="w-16 h-16 text-blue-500 mx-auto" />
        </div>
        <div className="w-32 h-2 bg-gray-200 rounded-full overflow-hidden">
          <div className="h-full bg-gradient-to-r from-blue-500 to-blue-600 animate-pulse"></div>
        </div>
        <p className="mt-4 text-gray-600 font-medium">Supplier IT yuklanmoqda...</p>
      </div>
    </div>
  );
};

export default LoadingScreen;