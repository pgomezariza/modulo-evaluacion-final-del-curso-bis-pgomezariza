import { Link } from 'react-router-dom';
import '../styles/DetailRecipe.scss';

function DetailRecipe(props) {

  return (
    <>
      <section className="recipe__detail">
        <img
          width="450"
          height="450"
          className="card__photo"
          alt={props.recipedetail.photoUrl}
          src={props.recipedetail.photoUrl}
        />
        <div>
          <h3 className="card__title">{props.recipedetail.title}</h3>
          <p className="card__description">
            {' '}
            Tipo de comida: {props.recipedetail.cuisine}
          </p>
          <p className="card__description"> Tags: {props.recipedetail.tags}</p>
          <p className="card__description">
            {' '}
            Calorias: {props.recipedetail.calories}
          </p>
        </div>
      </section>
      <Link to="/" className="back__list">
          Volver{' '}
      </Link>
    </>
  );
}

export default DetailRecipe;
