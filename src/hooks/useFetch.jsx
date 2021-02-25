import { useState, useEffect } from 'react';
import axios from 'axios';
import serverUrl from '../config';

export default (url) => {
  const [isLoading, setIsLoading] = useState(false);
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);
  const [options, setOptions] = useState({});

  const doFetch = (fetchOptions = {}) => {
    setOptions(fetchOptions);
    setIsLoading(true);
  };

  // options = {method: post, dat:{param1: test, param2:'test2'}}
  useEffect(() => {
    if (!isLoading) return;
    axios(serverUrl + url, options).then((res) => {
      console.log(`Success on ${url}:`, res);
      setIsLoading(false);
      setResponse(res.data);
    })
      .catch((error) => {
        console.log(`Error on ${url}:`, error);
        setIsLoading(false);
        setError(error.response.data);
      });
  }, [isLoading]);

  return [{ isLoading, response, error }, doFetch];
};
