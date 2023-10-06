import { useState, useEffect } from 'react';

export const CatData = () => {
  const [data, setData] = useState(null);
  const [dataLoaded, setDataLoaded] = useState(false);

  const fetchData = async () => {
    const url = 'https://catfact.ninja/fact';
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
    setData(data);
    setDataLoaded(true);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return <div>{!dataLoaded ? <p>Loading...</p> : <p>{data.fact}</p>}</div>;
};

// export default CatData;
