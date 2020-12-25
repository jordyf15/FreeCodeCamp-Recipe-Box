import React,{useState} from 'react';
import IndexView from './IndexView';
import styled from 'styled-components';

const IndexViewListContainer=styled.div`
    display: flex;
    flex-direction: row;
`;

const ButtonContainer=styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    background-color: #f8e9d5;
`;

const Button=styled.button`
    color: #af7227;
    background: transparent;
    border: none;
    margin-top: 10px;
    font-size: 30px;
`;

const IndexViewList =({recipes,changeDetailView,currentRecipe})=>{
    const [startIndex,setStartIndex]=useState(0);
    const [endIndex,setEndIndex]=useState(3);
    const nextIndexes=()=>{
        setStartIndex(startIndex+3);
        setEndIndex(endIndex+3);
    }
    const prevIndexex=()=>{
        setStartIndex(startIndex-3);
        setEndIndex(endIndex-3);
    }   

    return(
        <>
            <IndexViewListContainer>    
                {recipes.slice(startIndex,endIndex).map(r=><IndexView currentRecipe={currentRecipe} key={r.name} changeDetailView={changeDetailView} recipe={r}/>)}
            </IndexViewListContainer>
            <ButtonContainer>
                {startIndex<=0?<Button disabled={true} onClick={()=>prevIndexex()}><i className="far fa-caret-square-left"></i></Button>
                :<Button onClick={()=>prevIndexex()}><i className="far fa-caret-square-left"></i></Button>}
                {endIndex>=recipes.length?<Button disabled={true} onClick={()=>nextIndexes()}><i className="far fa-caret-square-right"></i></Button>
                :<Button onClick={()=>nextIndexes()}><i className="far fa-caret-square-right"></i></Button>}
            </ButtonContainer>
        </>
    )
};

export default IndexViewList;