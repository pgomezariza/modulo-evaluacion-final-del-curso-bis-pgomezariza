import localStorage from '../services/localStorage';

import '../styles/Button.scss';


function RecoverBtn() {
  const handleClickRecoverBtn = (ev) => {
    let recover; 
    recover=localStorage.get('saveRecipes', []);
    localStorage.set('recipes', recover);
    //cargo las recetas en el localStorage, pero no lo tengo automatizado al darle al boton de recuperar. 
  };

  return (
    <button type="button" className="recoverBtn"
    onClick={handleClickRecoverBtn}> Recuperar </button>
  );
};

export default RecoverBtn; 