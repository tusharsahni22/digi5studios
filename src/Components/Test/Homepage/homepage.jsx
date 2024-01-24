import React from 'react'
import Header from "../Header"
import styled  from 'styled-components'
import { MdOutlineFileUpload } from "react-icons/md";
// import { createGlobalStyle } from 'styled-components';

// const GlobalStyle = createGlobalStyle`
//   body {
//     margin: 0;
//     padding: 0;
//     background-image: url('path-to-your-image.jpg');
//     background-position: center;
//     background-repeat: no-repeat;
//     background-size: cover;
//     height: 100vh;
//   }
// `;


const Wrapper = styled.div`
background-image: url("./bg.png");
background-size: cover;
background-position: center;
background-repeat: no-repeat;
height: 200vh;
margin: 0;
    padding: 0;
`;
const HeaderPostion = styled.div`
/* margin-left: 34px;
margin-right: 34px; */
padding: 0 34px;
`;
const MainSection = styled.div`
margin-top: 201px;
width: 100%;
display: flex;
justify-content: space-between;
`;
const LeftSetion = styled.div`
margin-left: 65px;
padding: 20px;

`;
const RightSetion = styled.div`
padding: 20px;
`;
const AiImagediv = styled.div`
width: 549px;
margin-bottom: 10px;
height: 481px;
border-radius: 23px;
background: #FFF;
display: flex;
flex-direction: column;
align-items: center;
`;
const Img = styled.img`
    height: 249px;
    width: 80%;


`;
const RactangleBox = styled.div`
width: 512px;
height: 206px;
border-radius: 10px;
opacity: 0.2;
background-color: #D9D9D9;
display: flex;
    flex-direction: column;
    justify-content: end;
    align-items: center;
    padding-bottom: 10px;
`;

const DemoImagestoTest = styled.div`
border-radius: 23px;
background: #FFF;
width: 549px;
height: 223px;
`;
const Text = styled.div`
display: flex;
align-items: center;
gap: 10px;
padding: 28px 0;
padding-left: 35px;
`;
const UploadLogo = styled.div`
width: 40px;
height: 40px;
border-radius: 10px;
background: #E1FF2B;
`;
const Title = styled.div`
font-size: 18px;
font-weight: bold;
`;
const SubTitle = styled.div`
font-size: 14px;
font-weight: 500;
`;
const Images = styled.div`
display: flex;
gap: 10px;
padding-left: 35px;
`;
const HeadLine = styled.div`
height: 276px;
color: #2D2D2D;
font-family: Inter;
font-size: 100px;
font-style: normal;
font-weight: 800;
line-height: 88.571%; /* 88.571px */
`;
const Tagline = styled.div`
width: 348px;
height: 34px;
flex-shrink: 0;
color: #718400;
font-family: Inter;
font-size: 28px;
font-style: normal;
font-weight: 700;
line-height: normal;
margin-top:12px;
margin-bottom: 40px;
`;
const Descrption = styled.div`
width: 402px;
height: 98px;
flex-shrink: 0;
color: #686868;
font-family: Inter;
font-size: 18px;
font-style: normal;
font-weight: 400;
line-height: normal;
`;
const JoinButton = styled.div`
width: 242px;
height: 48px;
margin-top: 57px;
border-radius: 14px;
background-color: #1E1E1E;
color:white;
filter: drop-shadow(0px 3px 5px rgba(0, 0, 0, 0.04));
display: flex;
justify-content: center;
align-items: center;
font-size: 14px;
font-weight: 500;
`;
const UploadButton = styled.div`
width: 242px;
gap: 20px;
height: 48px;
margin-top: 57px;
border-radius: 14px;
background-color: black ;
color:white;
filter: drop-shadow(0px 3px 5px rgba(0, 0, 0, 0.04));
display: flex;
justify-content: center;
align-items: center;
font-size: 14px;
font-weight: 500;
`;
const BirdsImage = styled.div`
position: relative;
top: -466px;
left: 224px;
`;
const BackhroundImage = styled.div`
width: 609.36px;
height: 400.948px;
transform: rotate(15deg);
flex-shrink: 0;
background: url("./vecteezy_hummingbird-png-with-ai-generated_24704567 (1) 1.png"), lightgray 50% / cover no-repeat;
box-shadow: 0px 14px 5.4px 0px rgba(73, 85, 0, 0.37);
`;



function Homepage() {
  return (
    <div>
    {/* <GlobalStyle/> */}
    <Wrapper>
      <HeaderPostion>
        <Header />
        </HeaderPostion>
        <MainSection>
        <LeftSetion>
          <AiImagediv>
          <Img src='./aiEnhance.jpg'/>
          <RactangleBox>
          <UploadButton>
          <MdOutlineFileUpload/> 
          Upload Image</UploadButton>
          </RactangleBox>
          </AiImagediv>
          <DemoImagestoTest>
            <Text>
              <UploadLogo>
                <img src='./upload.jpg' style={{width:"40px",height:"40px"}}/>
              </UploadLogo>
              <div>
              <Title>Don’t have a Image to test ?</Title>
              <SubTitle>Try from our Library </SubTitle>
              </div>
            </Text>
            <Images>
              <img src='./Rectangle 46.jpg' style={{width:"100px",height:"100px"}}/>
              <img src='./Rectangle 47.jpg' style={{width:"100px",height:"100px"}}/>
              <img src='./Rectangle 48.jpg' style={{width:"100px",height:"100px"}}/>
              <img src='./Rectangle 49.jpg' style={{width:"100px",height:"100px"}}/>
            </Images>

          </DemoImagestoTest>
        </LeftSetion>
        <RightSetion>
          <div>
          <HeadLine>
          We All Hate Pixelated Images 
          </HeadLine>
          <Tagline>
          AI Based Image Enhancer 
          </Tagline>
          <Descrption>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s. </Descrption>
          <JoinButton>Join Now</JoinButton>
          </div>
          <BirdsImage>
            <BackhroundImage></BackhroundImage>
          </BirdsImage>
        </RightSetion>
        </MainSection>
    </Wrapper>
    </div>
  )
}

export default Homepage