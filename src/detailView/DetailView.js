import React from 'react';
import styled from 'styled-components';

const DetailContainer=styled.div`
    background-color: #f8e9d5;
    font-weight: bold;
    font-size: 14px;
    font-family: 'Open Sans', sans-serif;
    height: 85vh;
    overflow: scroll;
    overflow-x: hidden;
    padding-top: 15px;
`;

const H1=styled.h1`
font-size: 40px;
    margin-top: 0px;
    line-height: 25px;
    text-align: center;
    font-family: 'Great Vibes', cursive;
    border-bottom: 3px solid black;

`;

const H2=styled.h2`
font-size: 30px;
    margin-left: 10px;
    margin-bottom: 0px;
    font-family: 'Great Vibes', cursive;
`;

const Ul=styled.ul`
    margin-top: 0px;
`;

const Ol=styled.ol`
    margin-top: 0px;
    margin-bottom: 0px;
    padding-bottom: 14px;
`;

const Button=styled.button`
    color: #af7227;
    background: transparent;
    border: none;
    font-size: 20px;
`;

const ButtonContainer=styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`;

const DetailView=({recipe,deleteRecipe,setShowForm})=>{
    const {name,ingridients,directions}=recipe;
    return(
        <DetailContainer>
            <H1>{name}</H1>
            <ButtonContainer>
                <Button onClick={()=>deleteRecipe(name)}><i className="fas fa-eraser">Delete</i></Button>
                <Button onClick={()=>setShowForm('update')}><i className="fas fa-edit"></i>Edit</Button>
            </ButtonContainer>
            <H2>Ingridients:</H2>
            <Ul>
            {ingridients.map(i=><li key={i}>{i}</li>)}
            </Ul>
            <H2>Directions:</H2>
            <Ol>
                {directions.map(d=><li key={d}>{d}</li>)}
            </Ol>
        </DetailContainer>

    )
};

export default DetailView;