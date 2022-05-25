import '../styles/FilterYear.scss';

function FilterYear(props) {
  const handleFilterYear = (ev) => {
    props.handleFilterYear(ev.target.value);
  };
  const renderYears = () => {
    return props.years.map((year, index) => {
      return (
        <option key={index} value={year}>
          {year}
        </option>
      );
    });
  };
  return (
    <>
      <div className="form__year">
        <label className="form__yLabel" htmlFor="movieFilterYear">
          YEAR
        </label>
        <select
          className="form__yInput"
          name="movieFilterYear"
          id="year"
          onChange={handleFilterYear}
        >
          <option className="form--movieOptYear" value="">
            All
          </option>
          {renderYears()}
        </select>
      </div>
    </>
  );
}
export default FilterYear;