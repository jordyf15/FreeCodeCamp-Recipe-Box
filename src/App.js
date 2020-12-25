import React,{useState,useEffect} from 'react';
import startingRecipes from './data/startingRecipes.json';
import IndexViewList from './indexView/IndexViewList';
import DetailView from './detailView/DetailView';
import RecipeForm from './recipeForm/RecipeForm';
import styled from 'styled-components';

const Container=styled.div`
  width: 70vw;
  margin-left: auto;
  margin-right: auto;
  @media (max-width: 768px) {
    width: 100vw;
  }
`;

const Button=styled.button`
    color: #af7227;
    background: transparent;
    border: none;
    font-size: 20px;
    margin-left: auto;
    margin-right: auto;
`;

const ButtonContainer=styled.div`
    background-color: #f8e9d5;
    text-align: center;
    padding-bottom: 14px;
    padding-top: 14px;
`;

const H1=styled.h1`
  text-align: center;
  font-size: 60px;
  margin-top: 0px;
  margin-bottom: 5px;
  color: #fffafa;
  text-decoration: underline;
`;


const App=()=>{
  const [allRecipes,setAllRecipes]=useState(null);
  const [currentRecipe,setCurrentRecipe]=useState(null);
  const [showForm,setShowForm]=useState(null);//new: new form, update: updateform, null: no form

  const updateFormShow=showForm==='update'?null:{display: 'none'};
  const addNewFormShow=showForm==='new'?null:{display: 'none'};

  useEffect(()=>{
    if(!localStorage.getItem('jordyf15_recipes'))localStorage.setItem('jordyf15_recipes',JSON.stringify(startingRecipes));
    const recipes=JSON.parse(localStorage.getItem('jordyf15_recipes'));
    setAllRecipes(recipes);
    setCurrentRecipe(recipes[0]);
  },[]);
  if(!allRecipes)return null;

  const changeDetailView=(recipeName)=>{
    const currRecipe=allRecipes.filter(r=>r.name===recipeName)[0];
    setCurrentRecipe(currRecipe)
  }

  const addNewRecipe=(newRecipe)=>{
      const result=[...allRecipes,newRecipe];
      localStorage.setItem('jordyf15_recipes',JSON.stringify(result))
      setAllRecipes(result);
      setCurrentRecipe(newRecipe);
      setShowForm(null);
  }

  const deleteRecipe=(recipeName)=>{
    const result=allRecipes.filter(r=>r.name!==recipeName);
    localStorage.setItem('jordyf15_recipes',JSON.stringify(result));
    const deletedIndex=allRecipes.findIndex(r=>r.name===recipeName);
    setCurrentRecipe(allRecipes[deletedIndex===0?deletedIndex+1:deletedIndex-1]);
    setAllRecipes(result);
  }

  const updateRecipe=(updatedRecipeData,updatedRecipeName)=>{
    const result=allRecipes.map(r=>r.name===updatedRecipeName?updatedRecipeData:r);
    localStorage.setItem('jordyf15_recipes',JSON.stringify(result));
    setAllRecipes(result);
    setCurrentRecipe(updatedRecipeData);
    setShowForm(null);
  }
  
  return(
    <>
     <RecipeForm setShowForm={setShowForm} show={addNewFormShow} name='' directions='' ingridients='' submitRecipe={addNewRecipe}/>
      <RecipeForm setShowForm={setShowForm} show={updateFormShow} name={currentRecipe.name} submitRecipe={updateRecipe} directions={currentRecipe.directions.join('|')} ingridients={currentRecipe.ingridients.join('|')}/>
    <H1>Recipe Box</H1>
     <Container>
       <IndexViewList currentRecipe={currentRecipe} recipes={allRecipes} changeDetailView={changeDetailView}/>
        <DetailView setShowForm={setShowForm} deleteRecipe={deleteRecipe} recipe={currentRecipe}/>
        <ButtonContainer>
          <Button onClick={()=>setShowForm('new')}><i className="fas fa-scroll"></i>Add New Recipe</Button>
        </ButtonContainer>
    </Container>
    </>
  )
};

export default App;