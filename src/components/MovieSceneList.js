import MovieSceneItem from './MovieSceneItem';
import '../styles/MovieSceneList.scss';

function MovieSceneList(props) {
  // Si el array esta vacio, devuelvo html con mensaje.
  if(props.movies.length < 1){
    return (
      <p className="movieNotFound">Lo sentimos. No hay ninguna película que coincida con su busqueda</p>
    )
  }
  //Si no esta vacio, continuo.
  const moviesElements = props.movies.map((movie) => {
    return (
      <li key={movie.id} className="movies">
        <MovieSceneItem movie={movie} />
      </li>
    );
  });
  return (
    <section className="movie__details1">
      <ul className="movie__details1--all">{moviesElements}</ul>
    </section>
  );
}
export default MovieSceneList;
