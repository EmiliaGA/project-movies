import React, { useEffect, useState } from 'react';
import './Details.css';

export const Details = ({ movieId, apiKey }) => {
  const [loading, setLoading] = useState(false);
  const [movieData, setMovieData] = useState({});

  useEffect(() => {
    setLoading(true);
    fetch(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${apiKey}&language=en-US`, { method: 'GET' })
      .then((response) => response.json())
      .then((data) => setMovieData(data))
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return (
      <h1 className="loading">Loading data...</h1>
    )
  }
  return (
    <div className="details-page">
      <div className="detail-background-picture" style={{ backgroundImage: `linear-gradient(180deg, rgba(0,0,0,0) 70%, rgba(0,0,0,1) 100%), url(https://image.tmdb.org/t/p/w1280${movieData.backdrop_path})` }}>
        <div className="detail-container">
          <section className="movie-data-section">

            {movieData.poster_path && <img className="movie-data-cover" src={`https://image.tmdb.org/t/p/w1280${movieData.poster_path}`} alt="Yo" />}
            <div className="movie-data-container">

              <h1 className="movie-data-title"> {movieData.title}</h1>
              <span className="movie-data-rating">⭐{movieData.vote_average}</span>
              <p className="movie-data-overview">
                {movieData.overview}
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>

  )
}
