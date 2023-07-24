import React, { useState, useEffect } from 'react';
import axios from 'axios';
import md5 from 'md5';
import {
  Container,
  Grid,
  Button,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions
} from '@mui/material';

import ComicsHeader from '../ComicsHeader/ComicsHeader';

import '../../SharedStyles/styles.css'; 

function ComicsPage() {
  const [comics, setComics] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedComic, setSelectedComic] = useState(null);
  const [relatedComics, setRelatedComics] = useState([]);

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

  const handleOpenModal = (comic) => {
    setSelectedComic(comic);
    fetchRelatedComics(comic.id);
  };

  const handleCloseModal = () => {
    setSelectedComic(null);
    setRelatedComics([]);
  };

  const fetchRelatedComics = async (comicId) => {
    const publicKey = 'e1204a023988f306179fcc7b6baf0a59';
    const privateKey = '659a96d7be8bdfcbf3dcb1beca9cee335db90aaf';
    const ts = Date.now();
    const hash = md5(ts + privateKey + publicKey);
    const url = `https://gateway.marvel.com/v1/public/comics/${comicId}/characters?apikey=${publicKey}&ts=${ts}&hash=${hash}&limit=5`;

    try {
      const response = await axios.get(url);
      setRelatedComics(response.data.data.results);
    } catch (error) {
      console.error('Error al obtener cómics relacionados:', error);
      setRelatedComics([]);
    }
  };

  return (
    <Container className="comics-page">
      <div className="header-container">
        <ComicsHeader searchTerm={searchTerm} handleSearchChange={handleSearchChange} />
      </div>
      <Grid container spacing={3}>
        {filteredComics.length === 0 ? (
          <div className="loader-container">
            <p className="loader-message">
              Lo siento, no pudimos encontrar tu cómic. Seguro Stan Lee no lo ha escrito.
            </p>
          </div>
        ) : (
          filteredComics.map((comic) => (
            <Grid item xs={12} sm={6} md={4} lg={3} key={comic.id}>
              <Card className="card">
                <CardActionArea onClick={() => handleOpenModal(comic)}>
                  <CardMedia
                    component="img"
                    image={`${comic.thumbnail.path}.${comic.thumbnail.extension}`}
                    alt={comic.title}
                    height="300"
                  />
                  <CardContent className="card-content">
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
          ))
        )}
      </Grid>

      <Dialog open={selectedComic !== null} onClose={handleCloseModal} maxWidth="md" className="modal-container">
        {selectedComic && (
          <>
            <DialogTitle className="modal-title">{selectedComic.title}</DialogTitle>
            <DialogContent className="modal-content">
            <Typography
                  gutterBottom
                  variant="h6"
                  component="h3"
                  className="modal-description-title"
                >
                  Descripción:
                </Typography>
              <Typography variant="body1" className="modal-description">
                {selectedComic.description || 'No hay descripción disponible'}
              </Typography>

              <Typography gutterBottom variant="h6" component="h3" className="modal-related-title">
                Cómics relacionados:
              </Typography>
              <ul className="modal-related-list">
                {relatedComics.map((comic) => (
                  <li key={comic.id} className="modal-related-item">
                    <img src={`${comic.thumbnail.path}.${comic.thumbnail.extension}`} alt={comic.name} className="modal-related-image" />
                    <Typography variant="body2" className="modal-related-name">
                      {comic.name}
                    </Typography>
                  </li>
                ))}
              </ul>
            </DialogContent>
            <DialogActions>
              <Button className="modal-button-comic" onClick={handleCloseModal}>
                Cerrar
              </Button>
            </DialogActions>
          </>
        )}
      </Dialog>
    </Container>
  );
}

export default ComicsPage;
