import { useState } from "react";
import styled, { keyframes } from "styled-components"

import { ImgArea } from "./ImgArea";

import { useRecoilValue } from "recoil";
import { DuplicatesForCheck, NumberSetting, SettingModalCheck } from "state/atoms";
import  Effect from "assets/sound/eff.flac"

export const Main = () => {
    // 대포 횟수 
    const [cannonCount, setCannonCount] = useState(0);


    // 홀수 대포
    const [circleVisibility, setCircleVisibility ] = useState(false);
    // 짝수 대포
    const [showNewAnimation, setShowNewAnimation] = useState(false);

    const inputNumber = useRecoilValue(NumberSetting);
    const inputCheck = useRecoilValue(DuplicatesForCheck);
    const modalCheck = useRecoilValue(SettingModalCheck);

    console.log(inputNumber, inputCheck, modalCheck);

    

  

    const onClickCannon = () => {
        setCannonCount(cannonCount + 1);
        if(cannonCount % 2 === 1){
            console.log("짝수")
            setCircleVisibility(false);
            setShowNewAnimation(true);
        }else{
            console.log("홀수")
            setCircleVisibility(true);
            setShowNewAnimation(false);
        }
    }

  return (
    <View>
          
            {circleVisibility && <Circle>
                <p>홀수</p> 
                <audio autoPlay>
                <source src={Effect} type="audio/flac" />
                </audio>
            </Circle>}
       

            {showNewAnimation && <Circle>
                <p>짝수</p>
                <audio autoPlay>
                <source src={Effect} type="audio/flac" />
                </audio>
            </Circle>}
     
        <ImgArea/>
        
        <Button onClick={(()=>{onClickCannon()})}>발싸</Button>
    </View>
  )
}

const View = styled.main`
    position: relative;
    width: 90%;
    height: 90%;
    background: linear-gradient(0deg, rgba(255,255,255,1) 0%, rgba(81,124,211,1) 100%);
`;


const CnnonAnimationKeyframes = keyframes`
  0% { transform: translateY(-100px); }
  100% { transform: translateY(-400px); }
`;

const Circle = styled.div`
    position: absolute;
    top: 80%;
    left: 47%;
    ${({theme}) => theme.BoxCenter};
    transform: translateY(-90%) translateX(-50%);
    width: 120px;
    height: 120px;
    z-index: 10;
    border-radius: 50%;
    background: ${({theme}) => theme.colors.greey};
    animation: ${CnnonAnimationKeyframes} 1.3s forwards;
    p {
        color: ${({theme}) => theme.colors.white};
        font-size: 18px;
        font-weight: 700;
    }
`;



const Button = styled.button`
    position: absolute;
    top: 90%;
    left: 50%;
    transform: translateY(-90%) translateX(-50%);
    z-index: 21;
    width: 8vh;
    height: 8vh;
    min-width: 50px;
    min-height: 50px;
    background-color: rgb(255, 255, 0);
    border: 2px black solid;
    border-radius: 100%;
    &:hover {
        background-color: rgb(235, 235, 0);
        border: 4px black solid;
    }
    &:active {
        background-color: rgb(215, 215, 0);
    }
`;
