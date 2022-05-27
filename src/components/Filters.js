import FilterTypeFood from './FilterTypeFood';

import '../styles/Filters.scss';

function Filters(props) {
  return (
    <section>
      <form className="">
        <FilterTypeFood
          handleFilterTypeFood={props.handleFilterTypeFood}
          filterTypeFood={props.filterTypeFood}
        />
      </form>
    </section>
  );
}
export default Filters;
