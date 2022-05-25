import { Link } from 'react-router-dom';
import '../styles/MovieSceneDetail.scss';


function MovieSceneDetail(props) {
  console.log(props)
  return (
    <>
      <section className="movie__details2">
        <img width="100" height="100"
          className="movie__details2--img"
          alt={props.user.movie}
          src={props.user.poster}
        />
        <div className="movie__details2--others">
          <h2>{props.user.title}</h2>
          <p>"{props.user.full_line}"</p>
          <p>{props.user.director}</p>
          <a className="audio" href={props.user.audio} target="blank">
            LISTEN
          </a>
        </div>
      </section>
      <Link to="/" className="back__list">
        BACK
      </Link>
    </>
  );
}
    
export default MovieSceneDetail;