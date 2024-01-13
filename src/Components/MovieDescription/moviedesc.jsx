import { useEffect,useState } from 'react'
import styled from 'styled-components'
import { getMovieCast, getMovieDetails } from '../Services/services';
import { useLocation } from 'react-router-dom';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import Navbar from '../Navbar/navbax';


const Moviedesc = () => {
    const location = useLocation()
    const  id  = location.state.movie_id
    const [movieDetails, setMovieDetails] = useState({});
    const [movieCast, setMovieCast] = useState([]);
    const [castOrOverview, setCastOrOverview] = useState("overview"); // [] is the initial value

    useEffect(() => {
        getMovieDetails(id).then((res) => {
            setMovieDetails(res.data);
            console.log("movieDetails", res.data)
        });
        getMovieCast(id).then((res) => {
            setMovieCast(res.data.cast);
            console.log("movieCast", res.data.cast)
            
        });

    }, []);
    const Wrapper = styled.div`
    /* margin-top: 100px; */
    `;
    const Menu = styled.div`
    margin-top: 20px;
    display: flex;
    
    justify-content: center;
    `;

    const Section = styled.div`
    margin: 20px 0 40px 0;
    padding: 0 5%;

    `;

    const Carosel = styled.div`
    position: relative;
    `;
    const Img = styled.img`
    width: 100%;
    height: 500px;
    `;

    const Heading = styled.div`
    font:18px antique-olive;
    font-size: 20px;
    margin-bottom: 40px;
    font-style: italic;
    margin-top: 20px;
    `;
    const Description = styled.div`
    /* font:18px antique-olive; */
    background-color:  #17181C;
    font-size: 15px;
    margin-bottom: 40px;
    font-weight:600;
    margin-top: 20px;
    `;



    const MenuItems = styled.div`
    display: flex;
    align-items: center;
    /* padding: 0 40px; */
    background-color: #282B2F;
    width: 340px;
    height: 50px;
    border-radius: 10px;
    justify-content: space-between;
    `;

    const Cast = styled.div`
    background-color: #282B2F;
    width: 150px;
    display: flex;
    align-items: center;
    height: 50px;
    border-radius: 10px;
    justify-content: center;
    &:hover{
        background-color: #3C3F43;
        cursor: pointer;
    }

    `;

    const Overview = styled.div`
    background-color: #282B2F;
    display: flex;
    align-items: center;
    height: 50px;
    width: 150px;
    border-radius: 10px;
    justify-content: center;
    
    &:hover{
        background-color: #3C3F43;
        cursor: pointer;
    }
    `;

    const Title = styled.div`
    margin-top: 25px;
    font-weight: 800;
    text-align: center;
    `;
    const Text = styled.div`
   background-color: #282B2F;
   &:hover{
         background-color: #3C3F43;
   }
    `;
    const OverviewWords = styled.div`
    background-color: #282B2F;
    padding-left: 10px;
    `;
    const BugdetandReview = styled.div`
    display: flex;
    align-items: center;
    /* padding: 0 40px; */
    background-color: #282B2F;
    width: 450px;
    height: 50px;
    justify-content: space-between;
    `;
    const Budget = styled.div`
    background-color: #282B2F;
    width: 150px;
    display: flex;
    align-items: center;
    height: 50px;
    border-radius: 10px;
    justify-content: center;
    border: 1px solid white;
    &:hover{
        background-color: #3C3F43;
        ${Text}{
        background-color: #3C3F43;
    }
    ${OverviewWords}{
        background-color: #3C3F43;
    }}
    `;
    const Review = styled.div`
    background-color: #282B2F;
    width: 150px;
    display: flex;
    align-items: center;
    height: 50px;
    border-radius: 10px;
    justify-content: center;
    border: 1px solid white;
    &:hover{
        background-color: #3C3F43;
    
    ${Text}{
        background-color: #3C3F43;
    }
    ${OverviewWords}{
        background-color: #3C3F43;
    }}
    `;
    const VoteCount = styled.div`
   background-color: #282B2F;
    width: 150px;
    display: flex;
    align-items: center;
    height: 50px;
    border-radius: 10px;
    justify-content: center;
    border: 1px solid white;
    &:hover{
        background-color: #3C3F43;
        ${Text}{
        background-color: #3C3F43;
    }
    ${OverviewWords}{
        background-color: #3C3F43;
    }
    }
    `;
    const BugetSection = styled.div`
    margin-top: 20px;
    display: flex;
    justify-content: center;
    `;
    
    const Casting = styled.div`
    margin: 20px 0 40px 0;
    padding: 0 5%;
    `;
    const Frame = styled.div`
    display: flex;
    width: 380px;
    height: 80px;
    background-color: #282B2F;
    justify-content: space-around;
    align-items: center;
    `;
    const Info = styled.div`
    margin-left: 20px;
    `;
    const Name = styled.div`
    font-size: 16px;
    font-weight: 800;
    background-color: #282B2F;
    padding-bottom: 10px;
    `;
    const Character = styled.div`
    font-size: 14px;
    font-style: italic;
    background-color: #282B2F;
    `;
    const CastImg = styled.img`
    width: 50px;
    height: 50px;
    border-radius: 50%;
    `;
    const Div = styled.div`
    display: grid;grid-template-columns: repeat(auto-fill, minmax(380px, 1fr));
    gap: 20px;
    `;
    const SideBar = styled.div`
    width: 100%;
    height: 100%;
    display: flex ;
    `;
    const Movie = styled.div`
    width: 100%;
    height: 100vh;
    padding: 0 20px;
    overflow-y: scroll;
    `;
    const Genre = styled.div`
    position: relative;
    width: 100px;
    background-color: #1976D2 !important;
    border-radius: 20px;
    padding: 10px;
    text-align: center;
    top: -80px;
    left: 20px;
    color: white;
    font-size: 20px;
    background: transparent;
    `;


  return (
    <Wrapper>
        <SideBar>
        <Navbar/>
        <Movie>        
        <Carosel>
            <CircularProgressbar className='CircularProgressbar' value={movieDetails.vote_average}  maxValue={10} text={`${movieDetails.vote_average}`} />
            <Img src={`https://image.tmdb.org/t/p/w342`+movieDetails.backdrop_path} />
            <div  style={{display:"flex",gap:"20px"}}>
            {movieDetails.genres?.map((e)=>(
            <Genre key={e.id}>{e.name}</Genre>
            ))}
             </div>
        </Carosel>
        <Menu>
            <MenuItems>
            <Overview onClick={()=>{setCastOrOverview("overview")}} >Overview</Overview>
            <Cast onClick={()=>{setCastOrOverview("cast")}}> Cast </Cast>
            </MenuItems>
        </Menu> 
        {castOrOverview === "overview"?<Section>
        <Title>{movieDetails.tagline}</Title>
        <Heading>Overview</Heading>
        <Description>{movieDetails.overview} </Description>
        <Heading>Details</Heading>
        <Description>
            Original Language:{movieDetails.original_language} <br />
            Original Title: {movieDetails.original_title} <br />
            Release Date: {movieDetails.release_date}
        </Description>

        <BugetSection>

        <BugdetandReview>
            <Budget>
                <Text>Budget:</Text>
                <OverviewWords>${movieDetails.budget}</OverviewWords>
            </Budget>
            <VoteCount>
                <Text>Vote Count:</Text>
                <OverviewWords>{movieDetails.vote_count}</OverviewWords>
            </VoteCount>
            <Review>
                <Text>Popularity:</Text>
                <OverviewWords>{movieDetails.popularity}</OverviewWords>
            </Review>

        </BugdetandReview>
        </BugetSection>

        </Section>:<Casting>
           
            <Div >
            {movieCast.map((e)=>(
            <Frame key={e.id}>
                <CastImg src={`https://image.tmdb.org/t/p/w342`+e.profile_path} />
                <Info>
                    <Name>{e.name}</Name>
                    <Character>{e.character}</Character>
                </Info>
            </Frame>
            ))}
            
            </Div>
            
        </Casting>}
        </Movie>
        </SideBar>

    </Wrapper>
  )
}

export default Moviedesc