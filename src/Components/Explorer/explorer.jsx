import React, { useEffect,useState } from 'react'
import styled from 'styled-components'
import { IoIosSearch } from "react-icons/io";
import Navbar from '../Navbar/navbax';
import {getActionMovies, getAdventureMovies, getMostPopular, getMostRecent, getRomanceMovies, getSearch, getTopRated } from '../Services/services';
import { useNavigate } from 'react-router-dom';

const Wrapper = styled.div`
    width: 100%;
`;

const SideBar = styled.div`
    width: 100%;
    height: 100%;
    display: flex ;
`;
const Title = styled.div`
width: 100%;
display: flex;
justify-content: center;
margin-top: 25px;
font-weight: 800;
`;

const SearchBar = styled.div`
width: 100%;
display: flex;
justify-content: center;
margin-top: 25px;
`;

const Input = styled.input`
width: 100%;
height: 40px;
background-color:#323234;
border: none;
outline: none;
`;
const Search = styled.div`
padding: 0 10px;
width: 50%;
height: 40px;
display: flex;
align-items: center;
background-color:#323234;
color: white;
border-radius: 10px;
`;

const SearchIcon = styled(IoIosSearch)`
background-color:#323234;
&:hover{
    cursor: pointer;
}
`;
const Section = styled.div`
width: 100%;
height: 100vh;
overflow-y: scroll;
`;
const DropDownsMenu = styled.div`
display: flex;
justify-content: space-around;
margin-top: 25px;
`;
const Select = styled.select`
width: 40%;
height: 40px;
background-color:#323234;
color: white;
border: none;
outline: none;
border-radius: 10px;
&:hover{
    cursor: pointer;
}
`;
const Option = styled.option`
background-color:#323234;
color: white;
border: none;
outline: none;
border-radius: 10px;
`;
const Posters = styled.div`
display: flex;
flex-wrap: wrap;
justify-content: space-around;
margin-top: 25px;
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
const MovieTitle = styled.div`
margin-top: 25px;
font-weight: 800;
max-width: 190px;
`;
const Popularity = styled.div`
width: 52px;
background-color:#527AFF;
color: white;
border: none;
outline: none;
border-radius: 10px;
position: relative;    
text-align: center;
position: relative;
top: 65px;
left: 25px;
padding: 8px;
`;





function Explorer() {
  const navigate = useNavigate();
  const [data, setData] = useState([]) // [] is the initial value
const [mostPopular, setMostPopular] = useState([]) // [] is the initial value
const [topRated, setTopRated] = useState([]) // [] is the initial value
const [mostRecent, setMostRecent] = useState([]) // [] is the initial value
const [romance, setRomance] = useState([]) // [] is the initial value
const [action, setAction] = useState([]) // [] is the initial value
const [adventure, setAdventure] = useState([]) // [] is the initial value
const [search, setSearch] = useState([]) // [] is the initial valuw


const handleDatatoDisplay = (e) => {
  console.log("first",e)
  if(e === "Most Popular"){
    setData(mostPopular)
  }
  else if(e === "Top Rated"){
    setData(topRated)
  }
  else if(e === "Most Recent"){
    setData(mostRecent)
  }
  else if(e === "Romance"){
    setData(romance)
  }
  else if(e === "Action"){
    setData(action)
  }
  else if(e === "Adventure"){
    setData(adventure)
  }
}

const handleSearch = (word) => {
  console.log("first",search)
  console.log("word",word)
  getSearch(word).then((response) => {
    console.log("search",response.data.results)
    setData(response.data.results);
  })
}


useEffect(() => {
  getMostPopular().then((response) => {
    setData(response.data.results);
    setMostPopular(response.data.results);
  })
  getTopRated().then((response) => {
    setTopRated(response.data.results);
  })
  getMostRecent().then((response) => {
    setMostRecent(response.data.results);
    })
  getActionMovies().then((response) => {
    setAction(response.data.results);
  })
  getAdventureMovies().then((response) => {
    setAdventure(response.data.results);
  })
  getRomanceMovies().then((response) => {
    setRomance(response.data.results);
  })




}, [handleDatatoDisplay()])



  return (
    <Wrapper>
      <SideBar>
        <Navbar />
        <Section>
      <Title> Explore Movies</Title>
      <SearchBar>
        <Search>       
        <Input type="text" placeholder="Search for a movie" onChange={(e)=>{setSearch(e.target.value)}}/>
        <SearchIcon onClick={()=>{handleSearch(search)}}/>
        </Search>
      </SearchBar>

      <DropDownsMenu>
        <Select onChange={(e)=>{handleDatatoDisplay(e.target.value)}}>
          <Option value={"Most Popular"} >Most Popular</Option>
          <Option value={"Top Rated"} >Top Rated</Option>
          <Option value={"Most Recent"}>Most Recent
          </Option>
        </Select>
        <Select onChange={(e)=>{handleDatatoDisplay(e.target.value)}}>
        <Option value={"Romance"}>Romance</Option>
          <Option value={"Action"}>Action</Option>
          <Option value={"Adventure"}>Adventure</Option>
        </Select>
      </DropDownsMenu>
      <Posters>
      {data.map((e) => (
        <div  key={e.id} onClick={()=>{navigate("/movie-description",{state:{"movie_id":e.id}})}}>
        <Popularity>{e.vote_average}★</Popularity>
        <Frame>
          <Img src={`https://image.tmdb.org/t/p/w342`+e.backdrop_path} />
        </Frame>
          <MovieTitle>{e.title}</MovieTitle>
        </div>))}
      </Posters>

      </Section>
      </SideBar>

    </Wrapper>
  )
}

export default Explorer