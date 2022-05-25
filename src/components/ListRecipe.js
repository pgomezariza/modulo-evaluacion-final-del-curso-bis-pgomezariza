import ItemRecipe from "./ItemRecipe";


function ListRecipe(props) { 
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