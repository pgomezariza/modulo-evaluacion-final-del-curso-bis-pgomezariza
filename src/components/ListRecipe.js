import ItemRecipe from "./ItemRecipe";


function ListRecipe(props) { 
  //Si el array está vacio, devuelvo html con mensaje.
  if(props.recipes.length < 1){
    return (
      <p className="recipeNotFound">Lo sentimos, no hay ninguna receta que coincida con su busqueda.</p>
    )
  }
  
  //Si no está vacio, continuo.
  const recipesElements = props.recipes.map((recipe) => {
    return (
      <li key={recipe.id}> 
        <ItemRecipe recipe={recipe} />
      </li>
    );
  });

  return (
    <section className="">
      <ul className="">{recipesElements}</ul>
    </section>
  );
};
export default ListRecipe; 