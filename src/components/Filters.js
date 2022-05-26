import FilterTypeFood from './FilterTypeFood';

function Filters(props) {
  return <section>
    <form>
      <FilterTypeFood handleFilterTypeFood = {props.handleFilterTypeFood } />
    </form>
  </section>

}
export default Filters; 
