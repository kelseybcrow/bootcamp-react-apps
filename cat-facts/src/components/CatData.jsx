import { useState, useEffect } from 'react';

export const CatData = () => {
  useEffect(() => {
    fetchData();
  }, []);

  return <div>{!dataLoaded ? <p>Loading...</p> : <p>{data.fact}</p>}</div>;
};

// export default CatData;
