function FilterTypeFood(props) {
    const handleFilterTypeFood = (ev) => {
      props.handleFilterTypeFood(ev.target.value); 
    };
    
  return (
    <>
      <div>
        <label>
          Recetas
          <input
            type="text"
            placeholder="Buscar por tipo de comida..."
            className="recipeFilter"
            name=""
            onChange={handleFilterTypeFood}
            value={props.FilterTypeFood}
          />
        </label>
      </div>

    </>
  );

} 
export default FilterTypeFood;
