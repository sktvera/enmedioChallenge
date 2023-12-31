import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  Typography,
  Grid,
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
} from "@mui/material";
import md5 from "md5";
import PerfectScrollbar from "react-perfect-scrollbar";
import "react-perfect-scrollbar/dist/css/styles.css";
import "../../SharedStyles/styles.css";

function SeriesPage() {
  const [seriesList, setSeriesList] = useState([]);
  const [selectedSeries, setSelectedSeries] = useState(null);
  const [selectedSeriesDetails, setSelectedSeriesDetails] = useState({
    creators: [],
    stories: [],
    characters: [],
  });

  useEffect(() => {
    const publicKey = "e1204a023988f306179fcc7b6baf0a59";
    const privateKey = "659a96d7be8bdfcbf3dcb1beca9cee335db90aaf";
    const ts = Date.now();
    const hash = md5(ts + privateKey + publicKey);
    const url = `https://gateway.marvel.com/v1/public/series?apikey=${publicKey}&ts=${ts}&hash=${hash}`;

    const fetchSeries = async () => {
      try {
        const response = await axios.get(url);
        setSeriesList(response.data.data.results);
      } catch (error) {
        console.error("Error al obtener datos de la API de Marvel:", error);
      }
    };

    fetchSeries();
  }, []);

  const fetchSeriesDetails = async (seriesId) => {
    const publicKey = "e1204a023988f306179fcc7b6baf0a59";
    const privateKey = "659a96d7be8bdfcbf3dcb1beca9cee335db90aaf";
    const ts = Date.now();
    const hash = md5(ts + privateKey + publicKey);
    const url = `https://gateway.marvel.com/v1/public/series/${seriesId}?apikey=${publicKey}&ts=${ts}&hash=${hash}`;

    try {
      const response = await axios.get(url);
      const { creators, stories, characters } = response.data.data.results[0];
      setSelectedSeriesDetails({
        creators: creators.items,
        stories: stories.items,
        characters: characters.items,
      });
    } catch (error) {
      console.error("Error al obtener detalles de la serie:", error);
    }
  };

  const handleOpenModal = async (selectedSeries) => {
    setSelectedSeries(selectedSeries);
    await fetchSeriesDetails(selectedSeries.id);
  };

  const handleCloseModal = () => {
    setSelectedSeries(null);
  };

  return (
    <div className="series-page">
      <Grid container spacing={3}>
        {seriesList.map((series) => (
          <Grid item xs={12} sm={5} md={3} key={series.id}>
            <Card className="card" onClick={() => handleOpenModal(series)}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="300"
                  image={`${series.thumbnail.path}.${series.thumbnail.extension}`}
                  alt={series.title}
                />
                <CardContent className="card-content">
                  <Typography
                    gutterBottom
                    variant="h5"
                    component="h2"
                    className="serie-title"
                  >
                    {series.title}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                    className="serie-description"
                  >
                    {series.description}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        ))}
      </Grid>

      <Dialog
        open={selectedSeries !== null}
        onClose={handleCloseModal}
        maxWidth="md"
        className="modal-container"
      >
        {selectedSeries && (
          <>
            <DialogTitle className="modal-title">
              {selectedSeries.title}
            </DialogTitle>
            <DialogContent className="modal-content">
              <PerfectScrollbar>
                <Typography
                  gutterBottom
                  variant="h6"
                  component="h3"
                  className="modal-description-title"
                >
                  Descripción:
                </Typography>
                <Typography variant="body1" className="modal-description">
                  {selectedSeries.description || "Sin descripción"}
                </Typography>

                <Typography
                  gutterBottom
                  variant="h6"
                  component="h3"
                  className="modal-related-title"
                >
                  Personajes:
                </Typography>
                <ul className="modal-related-list">
                  {selectedSeriesDetails.characters.map((character) => (
                    <li
                      key={character.resourceURI}
                      className="modal-related-item"
                    >
                      {character.thumbnail && (
                        <img
                          src={`${character.thumbnail.path}.${character.thumbnail.extension}`}
                          alt={character.name}
                          className="modal-related-image"
                        />
                      )}
                      <Typography variant="body2" className="modal-related-name">
                        {character.name}
                      </Typography>
                    </li>
                  ))}
                </ul>

                <Typography
                  gutterBottom
                  variant="h6"
                  component="h3"
                  className="modal-related-title"
                >
                  Historias:
                </Typography>
                <ul className="modal-related-list">
                  {selectedSeriesDetails.stories.map((story) => (
                    <li key={story.resourceURI} className="modal-related-item">
                      <Typography variant="body2" className="modal-related-name">
                        {story.name} - {story.type}
                      </Typography>
                    </li>
                  ))}
                </ul>
              </PerfectScrollbar>
            </DialogContent>
            <DialogActions>
              <Button className="modal-button-comic" onClick={handleCloseModal}>
                Cerrar
              </Button>
            </DialogActions>
          </>
        )}
      </Dialog>
    </div>
  );
}

export default SeriesPage;
