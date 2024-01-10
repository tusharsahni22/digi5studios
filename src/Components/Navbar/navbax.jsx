import React from 'react'
import styled from 'styled-components'
import { FaHome ,FaRegUserCircle} from "react-icons/fa";
import { MdOutlineExplore } from "react-icons/md";
import { FaRegBookmark } from "react-icons/fa6";
const Wrapper = styled.div`

`;

const VerticalNav = styled.div`
width: 60px;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
gap: 40px;
background-color: black ;
color: white;
height: 100vh;
&:hover{
  background-color: #1a1a1a;
}
`;
const Homeicon = styled(FaHome)`
&:hover{
  cursor: pointer;
}
`;
const Exploreicon = styled(MdOutlineExplore)`
&:hover{
  cursor: pointer;
}
`;
const Bookmarkicon = styled(FaRegBookmark)`
&:hover{
  cursor: pointer;
}
`;
const Profileicon = styled(FaRegUserCircle)`
&:hover{
  cursor: pointer;
}
`;


function Navbar() {
  return (
    <Wrapper>
      <VerticalNav>
        <Homeicon/>
        <Exploreicon/>
        <Bookmarkicon/>
        <Profileicon/>
        
        
      </VerticalNav>
    </Wrapper>
  )
}

export default Navbar