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
  const [filterTypeFood, setFilterTypeFood] = useState('');

  useEffect(() => {
    getApiData().then((dataFromApi) => {
      setDataRecipes(dataFromApi);
    });
  }, []);

  const handleFilterTypeFood = (value) => {
    setFilterTypeFood(value);
  };

  const recipeFilters = dataRecipes.filter((recipe) => {
    if (filterTypeFood === '') {
      return true;
    } else {
      return recipe.cuisine
        .toLowerCase()
        .includes(filterTypeFood.toLowerCase());
    }
  });
  // console.log(recipeFilters);
  const { pathname } = useLocation();
  const dataPath = matchPath('/recipe/:id', pathname);

  const recipeId = dataPath !== null ? dataPath.params.id : null;
  const recipeFound = recipeFilters.find(
    (recipe) => recipe.id === parseInt(recipeId)
  );
  // console.log(recipeFound);
  return (
    <>
      <h1 className="font-effect-fire">Las Recetas de Paula</h1>
      <div className="header">
        <p className="header__quote1">"¡... Rico Rico y con Fundamento...!"</p>
        <p className="header__quoteby">By Karlos Arguiñano</p>
        <p className="header__quote2">
          Como a tripa vacia ❤️ sin alegría no puede ser... A continuación
          encontrarás unas recetas ricas ricas para tus menus semanales.
        </p>
        <p className="header__quote3">Bon Appétit!</p>
      </div>
      <div>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Filters
                  handleFilterTypeFood={handleFilterTypeFood}
                  filterTypeFood={filterTypeFood}
                />
                <ListRecipe recipes={recipeFilters} />
              </>
            }
          />
          <Route
            path="/recipe/:id"
            element={<DetailRecipe recipedetail={recipeFound} />}
          />
        </Routes>
      </div>
    </>
  );
}
export default App;
