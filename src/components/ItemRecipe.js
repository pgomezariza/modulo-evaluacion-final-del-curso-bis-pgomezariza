import { Link } from "react-router-dom";

function ItemRecipe (props){
  return (
    <>
      <img width="100" height=""
        className=""
        alt={props.recipe.recipe}
        src={props.recipe.photoURL}
      />
      <h2 className="">
        {props.recipe.title} - {props.recipe.cuisine}
      </h2>
      <p className="">
      "{props.recipe.tags} - {props.recipe.calories}"
      </p>
      <Link to={`/recipe/${props.recipe.id}`} className="">Details</Link>
    </>
  );
}
export default ItemRecipe; 