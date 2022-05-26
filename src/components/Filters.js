import FilterTypeFood from './FilterTypeFood';

function Filters(props) {
  return (
    <section>
      <form className=''>
        <FilterTypeFood 
          handleFilterTypeFood = {props.handleFilterTypeFood}
        />
      </form>
    </section>

  );
  

}
export default Filters; 
