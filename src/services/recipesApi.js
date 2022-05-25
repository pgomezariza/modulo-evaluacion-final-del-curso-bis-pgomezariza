//https://api.sampleapis.com/recipes/recipes
//1. Petición a la Api con un Fetch. Recibimos la respuesta y la convertimos en JSON porque lo que me da la API es un string. Limpio los datos para quedarme con lo que me piden, mediante un map. Y dataClean será mi array de recetas. 

const getApiData = () => {
  return fetch('https://api.sampleapis.com/recipes/recipes')
    .then ((response) => response.json())
    .then ((data) => {
      const dataClean = data.map((movie, index) => {
        return {
          id: index,
          poster: movie.poster,
          title: movie.movie,
          full_line: movie.full_line,
          year: movie.year,
          director: movie.director,
          audio: movie.audio,
          wow: movie.total_wows_in_movie,
        };
      });
      return dataClean; 
    });
};

export default getApiData; 