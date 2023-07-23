import React, { useState, useEffect } from 'react';
import axios from 'axios';
import md5 from 'md5';
import { Container, Grid, TextField, Card, CardActionArea, CardContent, CardMedia, Typography } from '@mui/material';
import './Assets/styles.css'; // Importamos el archivo de estilos personalizado

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
  }, []);

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredComics = comics.filter((comic) =>
    comic.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Container maxWidth="lg" className="comics-container">
      <Typography variant="h3" component="h1" className="comics-title">
        Comics
      </Typography>
      <TextField
        className="search-input"
        label="Buscar por nombre de cómic"
        variant="outlined"
        fullWidth
        value={searchTerm}
        onChange={handleSearchChange}
      />
      <Grid container spacing={3}>
        {filteredComics.map((comic) => (
          <Grid item xs={12} sm={6} md={4} key={comic.id}>
            <Card>
              <CardActionArea>
                <CardMedia
                  component="img"
                  image={`${comic.thumbnail.path}.${comic.thumbnail.extension}`}
                  alt={comic.title}
                  height="300"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2" className="comic-title">
                    {comic.title}
                  </Typography>
                  <Typography variant="body2" color="textSecondary" component="p" className="comic-description">
                    {comic.description || 'No hay descripción disponible'}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default ComicsPage;
