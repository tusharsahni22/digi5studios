import React from 'react'
import styled from 'styled-components'
import { useNavigate } from 'react-router-dom';
import { MdOutlineFavoriteBorder } from "react-icons/md";

const Wrapper = styled.div`
/* margin-top: 100px; */
`;
const Posters = styled.div`
display: flex;
overflow-x: scroll;
&::-webkit-scrollbar{
    display: none;
  }
`;
const Heading = styled.div`
font:18px antique-olive;
font-size: 35px;
/* margin-bottom: 40px; */
font-weight: 800;
`;
const Service = styled.div`
display: flex;
justify-content: space-between;

`;
const Title = styled.div`
margin-top: 25px;
font-weight: 800;
`;

const Frame = styled.div`
padding: 10px;
&:hover{
transition: transform 0.4s ease;
transform-origin: 50% 50%;
transform: scale(1.1);
cursor: pointer;

}

`;
const Img =styled.img`
width: 190px;
height: 240px;
border-radius: 10px;

`;
const FavoriteIcon = styled(MdOutlineFavoriteBorder)`
  position: relative;
  top: 60px;
  left: 165px;
  /* color: white; */
  background-color: transparent;
  &:hover{
    color: red;
  }
`;
const BiCart = styled.div`
    position: relative;
    top: 220px;
    color: white;
    left: 120px;
    width: 52px;
    padding: 5px;
    background-color: blue;
    border-radius: 10px;
    text-align: center;
    &:hover{
    color: red;
  }
`;

function Poster(props) {
    
    const navigate = useNavigate();
  return (
    <Wrapper>
    <Heading>{props.title}</Heading>
    <Posters >
    {props.dummyData.map((e)=>(
        <Frame key={e.id} >
          <FavoriteIcon/>
        <BiCart>{e.vote_average}★</BiCart>
        <Img loading='lazy' onClick={()=>{navigate("/movie-description",{state:{movie_id:e.id}})}} src={`https://image.tmdb.org/t/p/w342`+e.poster_path} />   
        <Service>
        <div>                
        <Title>{e.title}</Title>
        </div>
        </Service>
        </Frame>
     ))}
    </Posters>
</Wrapper>
  )
}

export default Poster