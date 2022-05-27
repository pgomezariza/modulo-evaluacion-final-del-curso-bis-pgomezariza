import ItemRecipe from "./ItemRecipe";
import '../styles/ListRecipe.scss';


function ListRecipe(props) { 
  //Si el array está vacio, devuelvo html con mensaje.
  if(props.recipes.length < 1){
    return (
      <p className="recipeNotFound">¡OPS! No hemos encontrado el tipo de comida que buscas. Inténtalo de nuevo. </p>
    )
  }
  
  //Si no está vacio, continuo.
  const recipesElements = props.recipes.map((recipe) => {
    return (
      <li className="recipes"> 
        <ItemRecipe recipe={recipe} />
      </li>
    );
  });

  return (
    <section>
      <ul className="recipes__all">{recipesElements}</ul>
    </section>
  );
};
export default ListRecipe; 