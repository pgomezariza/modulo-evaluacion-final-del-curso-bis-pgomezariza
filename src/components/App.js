import { useState, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { matchPath, useLocation } from 'react-router';

import getApiData from '../services/recipesApi';

import ListRecipe from './ListRecipe';
import Filters from './Filters';
import DetailRecipe from './DetailRecipe';

import '../styles/App.scss'; 

function App() {
  //Variables de Estado
  const [dataRecipes, setDataRecipes] = useState([]);
  const [filterTypeFood, setFilterTypeFood] = useState (''); 


  useEffect(() => {
    getApiData().then((dataFromApi) => {
      console.log(dataFromApi);
      setDataRecipes(dataFromApi);
    });
  }, []);

  const handleFilterTypeFood = (value) => {
    setFilterTypeFood(value);
  };


  const recipeFilters = dataRecipes.filter((recipe) => {
    if (filterTypeFood==='') {
      return true; 
    } else {
      return recipe.typefood === filterTypeFood;
    }
  });
    

  const { pathname } = useLocation();
  const dataPath = matchPath('/recipe/:recipeId', pathname);

  const recipeId = dataPath !== null ? dataPath.params.recipeId : null;
  const recipeFound = dataRecipes.find((item) => item.id === recipeId);
  

  return (
    <>
      <h1 className="title">Las Recetas de Paula</h1>
      <div className="">
        <p className="quote_1">Rico Rico y con Fundamento...</p>
        <p className="quote_by">By Karlos Arguiñano</p>
        <p className="quote_2">Como a tripa vacia CORAZON sin alegría no puede ser...a continuación encontrarás unas recetas ricas ricas para tus menus semanales.</p>
        <p className="quote_3">Bon Appétit!</p>
        <Routes>
          <Route 
            path="/" 
            element={
              <>
                <Filters 
                  handleFilterTypeFood = {handleFilterTypeFood }
                />
                <ListRecipe recipes={recipeFilters}/>
              </>
            } 
          />
          <Route
            path="/recipe/:recipeId"
            element={<DetailRecipe  />}
          />
        </Routes>
      </div>
    </>
  );
};
export default App;