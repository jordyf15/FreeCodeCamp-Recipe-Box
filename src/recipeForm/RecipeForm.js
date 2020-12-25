import React,{useState,useEffect} from 'react';
import styled from 'styled-components';

const Form=styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 60vw;
    height: 80vh;
    position: absolute;
    top: 10vh;
    left: 20vw;
    background-color: #f8e9d5;
`;

const FormContainer=styled.div`
    width: 100vw;
    height: 100vh;
    // min-width: 490px;
    position: fixed;
    background-color: rgba(0,0,0,0.7);
`;

const H2=styled.h2`
font-size: 30px;
    margin-left: 10px;
    margin-bottom: 0px;
    font-family: 'Great Vibes', cursive;
    text-align: left;
    width: 100%;
`;

const InputName=styled.input`
    width: 80%;
    text-align: center;
    border: none;
    border-bottom: 2px solid black;
    background-color: transparent;
`;

const InputOthers=styled.textarea`
    overflow: scroll;
    width: 80%;
    background-color: transparent;
    border: 2px solid black;

    @media (max-width: 768px) {
        height: 30%;
    }
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
    background-color: #f8e9d5;
`;
const RecipeForm=(props)=>{
    const [name,setName]=useState(props.name);
    const [ingridients,setIngridients]=useState(props.ingridients);
    const [directions,setDirections]=useState(props.directions);


    const handleSubmit=(e)=>{
        e.preventDefault();
        props.submitRecipe({name,ingridients: ingridients.split('|'),directions:directions.split('|')},props.name);
        
    }

    useEffect(()=>{
        setName(props.name);
        setIngridients(props.ingridients);
        setDirections(props.directions);
    },[props])

    return(
        <FormContainer style={props.show}>
            <Form onSubmit={handleSubmit}>
                <H2>Name: </H2>
                <InputName value={name} onChange={({target})=>setName(target.value)}/>
                <H2>Ingridients: </H2>
                <InputOthers placeholder='Seperate each ingridient with a "|", ex: milk|chocolate bar|flour' value={ingridients} onChange={({target})=>setIngridients(target.value)}/>
                <H2>Directions: </H2>
                <InputOthers placeholder='Seperate each direction with a "|", ex: put the chocolate and flour to the mixing bowl|mix the ingridients' value={directions} onChange={({target})=>setDirections(target.value)}/>
                <ButtonContainer>
                    <Button type='submit'><i className="far fa-plus-square"></i>Save</Button>
                    <Button type='button' onClick={()=>props.setShowForm(null)}><i className="far fa-window-close"></i>Close</Button>
                </ButtonContainer>
                 </Form>
        </FormContainer>
    )
};

export default RecipeForm;