import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { matchPath, useLocation } from 'react-router';

import getApiData from '../services/moviesApi';
import localStorage from '../services/localStorage';

import MovieSceneList from './MovieSceneList';
import Filters from './Filters';
import MovieSceneDetail from './MovieSceneDetail';

import '../styles/App.scss';


function App() {
  //Variables de Estado
  const [dataMovies, setDataMovies] = useState(localStorage.get('movies', []));
  const [filterMovie, setFilterMovie] = useState('');
  const [filterYears, setFilterYear] = useState('');
  const [filterWow, setFilterWow] = useState ('');

  useEffect(() => {
    if (dataMovies.length === 0) {
      getApiData().then((dataClean) => {
        setDataMovies(dataClean);
      });
    }
  }, );

  useEffect(() => {
    localStorage.set('movies', dataMovies);
  }, [dataMovies]); 

  const handleFilterMovie = (value) => {
    setFilterMovie(value);
  };

  const handleFilterYear = (value) => {
    setFilterYear(value);
  };

  const handleFilterWow = (value) => {
    setFilterWow(value);
  };


  const movieFilters = dataMovies
    .filter((item) => {
      return item.title.toLowerCase().includes(filterMovie.toLowerCase());
    })
    .filter((item) => {
      if (filterYears.length === 0) {
        return true;
      } else {
        return filterYears.includes(item.year);
      }
    });

  const getYear = () => {
    const movieYears = dataMovies.map((movie) => movie.year);
    const uniqueYear = movieYears.filter((year, index) => {
      return movieYears.indexOf(year) === index;
    });
    return uniqueYear;
  };

  const { pathname } = useLocation();
  const dataPath = matchPath('/movie/:id', pathname);

  const movieId = dataPath !== null ? dataPath.params.id : null;
  const movieFound = movieFilters.find((item) => item.id === parseInt(movieId));

  return (
    <>
      <h1 className="title">Las Recetas de Paula</h1>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Filters
                handleFilterMovie={handleFilterMovie}
                filterMovie={filterMovie}
                handleFilterYear={handleFilterYear}
                years={getYear()}
              />
              <MovieSceneList movies={movieFilters} />

            </>
          }
        />
        <Route
          path="/movie/:id"
          element={<MovieSceneDetail user={movieFound} />}
        />
      </Routes>
    </>
  );
};

export default App;
