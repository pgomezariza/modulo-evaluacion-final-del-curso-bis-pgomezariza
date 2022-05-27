import { Link } from 'react-router-dom';
import '../styles/DetailRecipe.scss';

function DetailRecipe(props) {
  console.log(props);
  return (
    <>
      <section>
        <img width="500" height="500"
          className=""
          alt={props.recipe}
          src={props.recipe}
        />
        <div>
          <h3 className="card__title">{props.recipe}</h3>
          <p className="card__description"> Tipo de comida: {props.recipe}</p>
          <p className="card__description"> Tags: {props.recipe}</p>
          <p className="card__description"> Calorias: {props.recipe}</p>
        </div>
      <Link to="/" className="back__list">Back to List </Link>
      </section>
    </>
  );
}

export default DetailRecipe; 