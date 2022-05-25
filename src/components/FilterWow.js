function Wow(props) {
  const handleFilterWow = (ev) => {
    props.handleFilterWow(ev.target.value);
  };
  
  return (
    <>
      <div className="form__year">
        <label className="form__yLabel" htmlFor="movieFilterYear">
          SCENE
        </label>
        <select
          className="form__yInput"
          name="movieFilterYear"
          id="year"
          onChange={handleFilterWow}
        >
          <option className="form--movieOptYear" value="">
            All
          </option>
          <option className="form--movieOptYear" value="1">
            1
          </option>
          <option className="form--movieOptYear" value="2">
            2
          </option>
          <option className="form--movieOptYear" value="3">
            3
          </option>
          <option className="form--movieOptYear" value="4">
            4
          </option>
          <option className="form--movieOptYear" value="5">
            5
          </option>
          <option className="form--movieOptYear" value="6">
            6
          </option>
          <option className="form--movieOptYear" value="7">
            7
          </option>
          <option className="form--movieOptYear" value="8">
            8
          </option>
          <option className="form--movieOptYear" value="9">
            9
          </option>
          <option className="form--movieOptYear" value="10">
            10
          </option>
        </select>
      </div>
    </>
  );
}
export default Wow;