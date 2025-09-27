import React, { useState, useCallback, useEffect } from 'react';

import Table from './Table';
import initialData from '../../data/stats/site';

const Stats = () => {
  const [data, setResponseData] = useState(initialData);
  // TODO think about persisting this somewhere


  

// ...existing code...
const fetchData = useCallback(async () => {
  try {
    const res = await fetch(
      'https://api.github.com/repos/eaklamanu/eaklamanu.github.io',
    );
    if (!res.ok) throw new Error('Network response was not ok');
    const resData = await res.json();

    setResponseData(
      initialData.map((field) => ({
        ...field,
        value: resData[field.key] !== undefined ? resData[field.key] : field.value,
      })),
    );
  } catch (error) {
    console.error('Failed to fetch GitHub repo stats:', error);
    // Optionally, set an error state here
  }
}, []);
// ...existing code...



  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return (
    <div>
      <h3>Some stats about this site</h3>
      <Table data={data} />
    </div>
  );
};

export default Stats;
