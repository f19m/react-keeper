import { useState, useEffect } from 'react';
import axios from 'axios';
import serverUrl from '../config';

export default (url) => {
  const [isLoading, setIsLoading] = useState(false);
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);

  const doFetch = () => { };

  useEffect(() => {
    if (!isLoading) return;
    axios(serverUrl + url, {
      method: 'POST',
      data: {

      },
    }).then((res) => {
      console.log(`Success on ${url}:`, res);
      setIsLoading(false);
      setResponse(res.data);
    })
      .catch((error) => {
        console.log(`Error on ${url}:`, error);
        setIsLoading(false);
        setError(error.response.data);
      });
  });

  return [{ isLoading, response, error }, doFetch];
};
