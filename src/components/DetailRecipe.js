function DetailRecipe(props){
  return (
    <>
      <section>
        <img width="150" height="150"
          className=""
          alt={props.recipe.recipe}
          src={props.recipe.photoUrl}
        />
        <div>
          <h3 className="card__title">{props.recipe.title}</h3>
          <p className="card__description"> Tipo de comida {props.recipe.cuisine}</p>
          <p className="card__description"> Tags {props.recipe.tags}</p>
          <p className="card__description"> Calorias {props.recipe.calories}</p>
        </div>
      </section>
      <Link to="/" className="back__list">Back to List</Link>
    </>
  );
}

export default DetailRecipe; 