import styled from "styled-components"

import  CannonImg  from "assets/cannon.png"
import  HillLeftImg  from "assets/hillLeft.png"
import  HillRightImg  from "assets/hillRight.png"





export const Main = () => {
  return (
    <View>
        <Circle/>
        <Lhill src={HillLeftImg} />
        <Cannon src={CannonImg} />
        <Rhill src={HillRightImg} />
        <Button>발싸</Button>
    </View>
  )
}

const View = styled.main`
    position: relative;
    width: 90%;
    height: 90%;
    background: linear-gradient(0deg, rgba(255,255,255,1) 0%, rgba(81,124,211,1) 100%);
`;

const Circle = styled.div`
    width: 100px;
    height: 100px;
    border-radius: 50%;
    background: red;
`;

const Cannon = styled.img`
    position: absolute;
    bottom: -10px;
    left: 50%;
    transform: translateX(-50%);
    width: 15%;
    height: 30%;
    min-width: 200px;
    z-index: 10;
`;

const Button = styled.button`
position: absolute;
    top: 90%;
    left: 50%;
    transform: translateY(-90%) translateX(-50%);
    z-index: 11;
    width: 8vh;
    height: 8vh;
    min-width: 50px;
    min-height: 50px;
    background-color: rgb(255, 255, 0);
    border: 2px black solid;
    border-radius: 100%;
    &:hover {
        background-color: rgb(235, 235, 0);
        border: 5px black solid;
    }
    &:active {
        background-color: rgb(215, 215, 0);
    }
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


