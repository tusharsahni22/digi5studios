import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
/* background-color: aqua; */
`;

const Head = styled.div`
position: relative;
width: 100%;
top: 81px;
height: 64px;
display: flex;
justify-content: space-between;
border-radius: 18px;
background-color: #FFF;
color: #000;
/* margin: 44px 34px; */
/* margin-top: 44px; */
/* margin-left: 34px;
margin-right: 34px; */
margin-bottom: 44px;
align-items: center;

`;
const Logo = styled.div`
display: flex;
align-items: center;
gap: 10px;
padding-left: 35px;
`;
const Img = styled.img`
height: 40px ;
width: 40px;

`;
const Menu = styled.div`
display: flex;
gap: 30px;
align-items: center;
`;

const Button = styled.div`
width: 78px;
font-size: 13px;
height: 32px;
justify-content: center;
display: flex;
align-items: center;
text-align: center;
border-radius: 16px;
background-color: #E1FF2B;
box-shadow: 0px 3px 5px 0px rgba(0, 0, 0, 0.04);

`;

const Login = styled.div`
height: 48px;
width: 107px;
flex-shrink: 0;
gap: 15px;
justify-content: center;
display: flex;
font-size: 13px;
align-items: center;
border-radius: 14px;
background-color: #E1FF2B;
filter: drop-shadow(0px 3px 5px rgba(0, 0, 0, 0.04));
`;


function Header() {
  return (
    <Wrapper>
      <Head>
        <Logo>
          <Img src="./logo.jpg"/>
          <div>Picnomic</div>
          <div style={{"marginLeft":"50px"}}>|</div>
        </Logo>
        <Menu>
          <Button>Home</Button>
          <Button>Pricing</Button>
          <Button>About</Button>

        </Menu>
        <Login>
          <Img src='./Ellipse 1.svg' alt='logo'></Img>
          Login
        </Login>
      </Head>

    </Wrapper>
  )
}

export default Header