import '../styles/Button.scss';

function RecoverBtn() {
  const handleClickRecoverBtn = (ev) => {
    console.log("RecoverBtn");
  };

  return (
    <button type="button" className="recoverBtn"
    onClick={handleClickRecoverBtn}> Recuperar </button>
  );
};

export default RecoverBtn; 