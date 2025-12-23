import { useState, useEffect } from 'react';
import axiosInstance from '../../config/axiosInstance';

const ConnectionTest = () => {
  const [status, setStatus] = useState('testing');
  const [backendUrl, setBackendUrl] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    setBackendUrl(import.meta.env.VITE_API_URL);
    testConnection();
  }, []);

  const testConnection = async () => {
    try {
      setStatus('testing');
      setError('');
      
      console.log('🧪 Testing backend connection...');
      console.log('Backend URL:', import.meta.env.VITE_API_URL);
      
      // Test basic connection
      const response = await axiosInstance.get('/movie/movies');
      
      if (response.status === 200) {
        setStatus('connected');
        console.log('✅ Backend connection successful!');
      }
    } catch (err) {
      setStatus('failed');
      setError(err.message);
      console.error('❌ Backend connection failed:', err);
      
      // Additional debugging info
      if (err.code === 'ERR_NETWORK') {
        console.error('Network error - backend might be down or CORS issue');
      }
      if (err.response?.status === 404) {
        console.error('API endpoint not found');
      }
    }
  };

  const getStatusColor = () => {
    switch (status) {
      case 'connected': return 'text-green-500';
      case 'failed': return 'text-red-500';
      default: return 'text-yellow-500';
    }
  };

  const getStatusIcon = () => {
    switch (status) {
      case 'connected': return '✅';
      case 'failed': return '❌';
      default: return '🔄';
    }
  };

  return (
    <div className="fixed bottom-4 right-4 bg-base-200 p-4 rounded-lg shadow-lg border border-base-300 max-w-sm">
      <h3 className="font-bold text-sm mb-2">🔗 Backend Connection</h3>
      
      <div className="space-y-2 text-xs">
        <div>
          <span className="text-gray-400">Backend URL:</span>
          <div className="font-mono text-xs break-all">{backendUrl}</div>
        </div>
        
        <div className={`flex items-center gap-2 ${getStatusColor()}`}>
          <span>{getStatusIcon()}</span>
          <span className="capitalize font-semibold">{status}</span>
        </div>
        
        {error && (
          <div className="text-red-400 text-xs">
            <span className="font-semibold">Error:</span> {error}
          </div>
        )}
        
        <button 
          onClick={testConnection}
          className="btn btn-xs btn-primary w-full mt-2"
          disabled={status === 'testing'}
        >
          {status === 'testing' ? 'Testing...' : 'Test Again'}
        </button>
      </div>
    </div>
  );
};

export default ConnectionTest;