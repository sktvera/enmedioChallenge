import React, { useState, useEffect } from 'react';
import axios from 'axios';
import md5 from 'md5';

function SeriesPage() {
  const [series, setSeries] = useState([]);

  useEffect(() => {
    const publicKey = 'e1204a023988f306179fcc7b6baf0a59';
    const privateKey = '659a96d7be8bdfcbf3dcb1beca9cee335db90aaf';
    const ts = Date.now();
    const hash = md5(ts + privateKey + publicKey);
    const url = `https://gateway.marvel.com/v1/public/series?apikey=${publicKey}&ts=${ts}&hash=${hash}`;

    const fetchSeries = async () => {
      try {
        const response = await axios.get(url);
        setSeries(response.data.data.results);
      } catch (error) {
        console.error('Error al obtener datos de la API de Marvel:', error);
      }
    };

    fetchSeries();
  }, [series]);

  return (
    <div>
      <h1>Series</h1>
      <ul>
        {series.map((serie) => (
          <li key={serie.id}>{serie.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default SeriesPage;
