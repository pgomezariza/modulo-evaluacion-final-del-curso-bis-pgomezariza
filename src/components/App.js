import { useState, useEffect } from "react";
import getApiData from "../services/recipesApi";
import ListRecipe from "./ListRecipe";

function App() {
  //Variables de Estado
  const [dataRecipes, setDataRecipes] = useState([]);


  useEffect(() => {
    getApiData().then((dataFromApi) => {
      console.log(dataFromApi);
      setDataRecipes(dataFromApi);
    });
  }, []);


  return (
    <>
      <h1 className="title">Las Recetas de Paula</h1>
      <ListRecipe recipes={dataRecipes}/>
      </>
  );

};
export default App;