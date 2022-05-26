import { useState, useEffect } from "react";
import getApiData from "../services/recipesApi";
import ListRecipe from "./ListRecipe";
import Filters from "./Filters";

function App() {
  //Variables de Estado
  const [dataRecipes, setDataRecipes] = useState([]);
  const [filterTypeFood, setFilterTypeFood] = useState ([]); 
  


  useEffect(() => {
    getApiData().then((dataFromApi) => {
      console.log(dataFromApi);
      setDataRecipes(dataFromApi);
    });
  }, []);


  return (
    <>
      <h1 className="title">Las Recetas de Paula</h1>
      <p className="quote_1">Rico Rico y con Fundamento...</p>
      <p className="quote_by">By Karlos Arguiñano</p>
      <p className="quote_2">Como a tripa vacia CORAZON sin alegría no puede ser...a continuación encontrarás unas recetas ricas ricas para tus menus semanales.</p>
      <p className="quote_3">Bon Appétit!</p>
      <ListRecipe recipes={dataRecipes}/>
      <Filters />
      </>
  );

};
export default App;