import React, { useState, useEffect } from 'react';
import axios from 'axios';
import md5 from 'md5';

function ComicsPage() {
  const [comics, setComics] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const publicKey = 'e1204a023988f306179fcc7b6baf0a59';
    const privateKey = '659a96d7be8bdfcbf3dcb1beca9cee335db90aaf';
    const ts = Date.now();
    const hash = md5(ts + privateKey + publicKey);
    const url = `https://gateway.marvel.com/v1/public/comics?apikey=${publicKey}&ts=${ts}&hash=${hash}`;

    const fetchComics = async () => {
      try {
        const response = await axios.get(url);
        setComics(response.data.data.results);
      } catch (error) {
        console.error('Error al obtener datos de la API de Marvel:', error);
      }
    };

    fetchComics();
  }, [comics]);

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredComics = comics.filter((comic) =>
    comic.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <h1>Comics</h1>
      <div className="form-group">
        <input
          type="text"
          className="form-control"
          placeholder="Buscar por nombre de cómic"
          value={searchTerm}
          onChange={handleSearchChange}
        />
      </div>
      <ul>
        {filteredComics.map((comic) => (
          <li key={comic.id}>{comic.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default ComicsPage;
