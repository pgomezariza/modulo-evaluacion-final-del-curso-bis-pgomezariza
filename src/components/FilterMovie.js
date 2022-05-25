import '../styles/FilterMovie.scss';

function FilterMovie(props) {
  const handleFilterMovie = (ev) => {
    props.handleFilterMovie(ev.target.value);
  };

  return (
    <>
      <div className="form__movie">
        <label className="form__mLabel" htmlFor="movieFilter">
          MOVIE
          <input
            type="text"
            className="form__mInput"
            name="movieFilter"
            onChange={handleFilterMovie}
            placeholder="Title..."
            value={props.filterMovie}
          />
        </label>
      </div>
    </>
  );
}
export default FilterMovie;
