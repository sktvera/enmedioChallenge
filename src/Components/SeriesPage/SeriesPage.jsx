import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Container, Typography, Grid, Card, CardActionArea, CardMedia, CardContent } from '@mui/material';
import md5 from 'md5';
import './Assets/styles.css'; // Importamos el archivo de estilos personalizado

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
  }, []);

  return (
    <Container maxWidth="lg" className="series-container">
      <Typography variant="h3" component="h1" className="series-title">
        Series
      </Typography>
      <Grid container spacing={3}>
        {series.map((serie) => (
          <Grid item xs={12} sm={6} md={4} key={serie.id}>
            <Card>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="300"
                  image={`${serie.thumbnail.path}.${serie.thumbnail.extension}`}
                  alt={serie.title}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2" className="serie-title">
                    {serie.title}
                  </Typography>
                  <Typography variant="body2" color="textSecondary" component="p" className="serie-description">
                    {serie.description}
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

export default SeriesPage;
