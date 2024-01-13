import React, { useEffect,useState } from 'react'
import styled from 'styled-components'
import { IoIosSearch } from "react-icons/io";
import Navbar from '../Navbar/navbax';
import { getMostPopular } from '../Services/services';
import { useNavigate } from 'react-router-dom';

const Wrapper = styled.div`
    width: 100%;
    height: 100vh;
    overflow-y: scroll;
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
`;
const Section = styled.div`
width: 100%;
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
width: 190px;
height: 40px;
background-color:transparent;
color: blue;
border: none;
outline: none;
border-radius: 10px;
position: relative;
top: -30px;
left: 13px;
`;
const Popularity = styled.div`
width: 30px;
height: 30px;
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
padding: 5px;
`;





function Explorer() {
  const navigate = useNavigate();
const [mostPopular, setMostPopular] = useState([]) // [] is the initial value
// const [topRated, setTopRated] = useState([]) // [] is the initial value
// const [mostRecent, setMostRecent] = useState([]) // [] is the initial value
// const [genre, setGenre] = useState([]) // [] is the initial value
// const [search, setSearch] = useState([]) // [] is the initial value
// const [searchInput, setSearchInput] = useState([]) // [] is the initial value
// const [searchInput, setSearchInput] = useState([]) // [] is the initial value

useEffect(() => {
  getMostPopular().then((response) => {
    setMostPopular(response.data.results);
    console.log("popular",response.data.results)
  });}, [])

  return (
    <Wrapper>
      <SideBar>
        <Navbar />
        <Section>
      <Title> Explore Movies</Title>
      <SearchBar>
        <Search>       
        <Input type="text" placeholder="Search for a movie" />
        <SearchIcon />
        </Search>
      </SearchBar>

      <DropDownsMenu>
        <Select>
          <Option>Most Popular</Option>
          <Option>Top Rated</Option>
          <Option>Most Recent
          </Option>
        </Select>
        <Select>
        <Option>Genre</Option>
          <Option>Action</Option>
          <Option>Adventure</Option>
        </Select>
      </DropDownsMenu>
      <Posters>
      {mostPopular.map((e) => (
        <div  key={e.id} onClick={()=>{navigate("/movie-description",{state:{"movie_id":e.id}})}}>
        <Popularity>{e.vote_average}</Popularity>
        <Frame>
          <Img src={`https://image.tmdb.org/t/p/w342`+e.backdrop_path} />
          <MovieTitle>{e.title}</MovieTitle>
        </Frame>
        </div>))}
      </Posters>

      </Section>
      </SideBar>

    </Wrapper>
  )
}

export default Explorer