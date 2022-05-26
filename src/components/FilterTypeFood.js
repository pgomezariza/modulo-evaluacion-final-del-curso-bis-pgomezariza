function FilterTypeFood(props) {
    const handleChange = (ev) => {
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
            onChange={handleChange}
            value={props.filterTypeFood}
          />
        </label>
      </div>
    </>
  );
} 
export default FilterTypeFood;
