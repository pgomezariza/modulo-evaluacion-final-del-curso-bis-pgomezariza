import '../styles/FilterTypeFood.scss';

function FilterTypeFood(props) {
  const handleFilterTypeFood = (ev) => {
    props.handleFilterTypeFood(ev.target.value);
  };

  return (
    <>
      <div>
        <label className="label_input" htmlFor="recipeFilter">
          Recetas
          <input
            type="text"
            placeholder="Buscar por tipo de comida..."
            className="recipe_input"
            name="recipeFilter"
            onChange={handleFilterTypeFood}
            value={props.filterTypeFood}
          />
        </label>
      </div>
    </>
  );
}
export default FilterTypeFood;
