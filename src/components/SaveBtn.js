import localStorage from '../services/localStorage';

import '../styles/Button.scss';

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