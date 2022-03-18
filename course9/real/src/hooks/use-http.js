import { useState, useCallback } from 'react';

const useHttp = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
  
    const sendRequest = useCallback(async (requestConfig, applyData) => {
      setIsLoading(true);
      setError(null);
      try {
        const response = await fetch(
          requestConfig.url, {
              method: requestConfig.method ? requestConfig.method : 'GET',
              heaaders: requestConfig.headers ? requestConfig.headers : {},
              body: requestConfig.body ? JSON.stringify(requestConfig.body) : null  
          }
        );
  
        if (!response.ok) {
          throw new Error('Request failed!');
        }
  
        const data = await response.json();
        
        // this is aa function given from the component that needs the data
        applyData(data);
      } catch (err) {
        setError(err.message || 'Something went wrong!');
      }
      setIsLoading(false);
    }, []);

    return {
        isLoading: isLoading,
        error: error,
        sendRequest: sendRequest
    }
}

export default useHttp;