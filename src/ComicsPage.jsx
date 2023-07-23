import React, { useState, useEffect } from 'react';
import axios from 'axios';
import md5 from 'md5';
import './ComicsPage.css'; // Importamos el archivo de estilos personalizado

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
    <div className="comics-container">
      <h1 className="comics-title">Comics</h1>
      <div className="search-form">
        <input
          type="text"
          className="search-input"
          placeholder="Buscar por nombre de cómic"
          value={searchTerm}
          onChange={handleSearchChange}
        />
      </div>
      <ul className="comics-list">
        {filteredComics.map((comic) => (
          <li key={comic.id} className="comic-item">
            <img src={comic.thumbnail} alt={comic.title} className="comic-image" />
            <h3 className="comic-title">{comic.title}</h3>
            <p className="comic-description">{comic.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ComicsPage;
