import localStorage from '../services/localStorage';

import '../styles/FilterTypeFood.scss';

function SaveBtn(props) {
  const handleClickSaveBtn = (ev) => {
    localStorage.set('saveRecipes', props.recipes);
  };

  return (
    <button type="button" className="saveBtn"
    onClick={handleClickSaveBtn}> Guardar </button>
  );
};

export default SaveBtn; 