import { Link } from "react-router-dom";

function ItemRecipe(props){
  return (
    <>
        <img width="150" height="150"
          className=""
          alt={props.recipe.recipe}
          src={props.recipe.photoUrl}
        />
        <div>
          <h3 className="card__title">{props.recipe.title}</h3>
          <p className="card__description"> Tipo de comida: {props.recipe.cuisine}</p>
          <p className="card__description"> Tags: {props.recipe.tags}</p>
          <p className="card__description"> Calorias: {props.recipe.calories}</p>
        </div>
      <Link to={`/recipe/${props.recipe.id}`} className="">Details</Link>
    </>
  );
};
export default ItemRecipe; 