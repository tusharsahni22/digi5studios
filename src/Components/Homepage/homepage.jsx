import React, { useEffect , useState} from 'react'
import styled from 'styled-components'
// import SlideShow from './slideShow'
import Posters from './Posters'
import Navbar from '../Navbar'
import { getPopularMovie, getTopRatedMovie, getTrendingMovies, getUpcomingMovie } from '../Services/services';


const Wrapper = styled.div`
width: 100%;
`;

const SideBar = styled.div`
width: 100%;
height: 100%;
display: flex ;
`;
const Section = styled.div`
width: 100%;
height: 100vh;
padding: 0 20px;
margin-top: 25px;
overflow-y: scroll;
`;



function Homepage() {

  const [trendingMovies, setTrendingMovies] = useState([]); // [] is the initial value
  const [popularMovies,  setPopularMovies ] = useState([]); // [] is the initial value
  const [topRatedMovies, setTopRatedMovies] = useState([]); // [] is the initial value
  const [upcomingMovies, setUpcomingMovies] = useState([]); // [] is the initial value

useEffect(() => {
  getTrendingMovies().then((response) => {
    setTrendingMovies(response.data.results);
  });
  getPopularMovie().then((response) => {
    setPopularMovies(response.data.results);
    console.log("ttt",response.data.results);
  });
  getTopRatedMovie().then((response) => {
    setTopRatedMovies(response.data.results);
  });
  getUpcomingMovie().then((response) => {
    setUpcomingMovies(response.data.results);
  });
}, [])
  
  return (
    <Wrapper>
      <SideBar>
        <Navbar/>
      <Section>
       <Posters title={"Popular"} dummyData={popularMovies}/>
       <Posters title={"Trending"} dummyData={trendingMovies}/>
       <Posters title={"Top Rated"} dummyData={topRatedMovies}/>
       <Posters title={"Upcoming"} dummyData={upcomingMovies}/>
       </Section>
       </SideBar>
       
    </Wrapper>
  )
}

export default Homepage