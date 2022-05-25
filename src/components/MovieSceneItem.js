import { Link } from 'react-router-dom';
import '../styles/MovieSceneItem.scss';

function MovieSceneItem(props) {
  
  return (
    <>
      <img width="100" height="100" 
        className="movie__details1--img"
        alt={props.movie.movie}
        src={props.movie.poster}
      />
      <h2 className="movie__details1--title">
        {props.movie.title} - {props.movie.year}
      </h2>
      <p className="movie__details1--Phrase">"{props.movie.full_line}"</p>
      <Link to={`/movie/${props.movie.id}`}
        className="movie__details1--btn">
        Details
      </Link>
    </>
  );
}
export default MovieSceneItem;