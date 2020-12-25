import React from 'react';
import styled from 'styled-components';

const IndexContainer=styled.div`
    text-align: center;
    height: 0;
    font-size: 20px;
    font-weight: bold;
    width: 34%;
    border-bottom: 25px solid #f8e9d5;
    border-left: 10px solid transparent;
    border-right: 10px solid transparent;
    border-top-right-radius: 60px;
    border-top-left-radius: 60px;
`;

const P=styled.p`
    margin: 0px;
    overflow: hidden;
`;

const IndexView =({recipe,changeDetailView,currentRecipe})=>{
    const boxShadow=currentRecipe.name===recipe.name?'none':'0px 2px #af7227'

    return(
        <IndexContainer style={{boxShadow}}onClick={()=>changeDetailView(recipe.name)}>
            <P>{recipe.name}</P>
        </IndexContainer>
    )
};

export default IndexView;