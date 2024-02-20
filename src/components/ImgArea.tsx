import styled from "styled-components"

import  CannonImg  from "assets/cannon.png"
import  HillLeftImg  from "assets/hillLeft.png"
import  HillRightImg  from "assets/hillRight.png"


export const ImgArea = () => {
  return (
    <>
        <Lhill src={HillLeftImg} />
        <Cannon src={CannonImg} />
        <Rhill src={HillRightImg} />
    </>
  )
}


const Cannon = styled.img`
    position: absolute;
    bottom: -10px;
    left: 50%;
    transform: translateX(-50%);
    width: 15%;
    height: 30%;
    min-width: 200px;
    z-index: 12;
`;



const Lhill= styled.img`
    position: absolute;
    bottom: -10px;
    left: -10px;
    height: 30%;
`;

const Rhill = styled.img`
    position: absolute;
    bottom: -10px;
    right: -10px;
    height: 30%;
`;