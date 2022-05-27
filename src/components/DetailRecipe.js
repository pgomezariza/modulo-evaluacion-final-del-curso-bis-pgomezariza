import { Link } from 'react-router-dom';
import '../styles/DetailRecipe.scss';

function DetailRecipe(props) {
  console.log(props);

  return (
    <>
      <section>
        <img
          width="500"
          height="500"
          className=""
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
        <Link to="/" className="back__list">
          Back to List{' '}
        </Link>
      </section>
    </>
  );
}

export default DetailRecipe;
