import { useEffect, useState } from "react";
import styled, { keyframes } from "styled-components"

import { ImgArea } from "./ImgArea";

import { useRecoilValue } from "recoil";
import { DuplicatesForCheck, NumberSetting, SettingModalCheck } from "state/atoms";
// import { CnnonAnimation } from "styles/Animation";




export const Main = () => {

    const [circleVisibility, setCircleVisibility ] = useState(false);

    const inputNumber = useRecoilValue(NumberSetting);
    const inputCheck = useRecoilValue(DuplicatesForCheck);
    const modalCheck = useRecoilValue(SettingModalCheck);

    // useEffect(()=>{
    //     if(!modalCheck){
    //         setCircleVisibility(false)
    //     }
    // },[modalCheck])

    console.log(inputNumber, inputCheck, modalCheck)

    const onClickcannon = () => {
        setCircleVisibility(true)
    }


    useEffect(() => {
        if (circleVisibility ) {
            // 애니메이션 종료 후 circleVisibility를 false로 변경
            const timeoutId = setTimeout(() => {
                setCircleVisibility(false);
            }, 1800); // 애니메이션 지속시간인 1.8초(ms)와 동일하게 설정
          
            // 컴포넌트가 언마운트되면 타임아웃 클리어
            return () => clearTimeout(timeoutId);
        }
    }, [circleVisibility]);


  return (
    <View>
        {
            circleVisibility && <Circle>
            <p>NaN</p> 
         </Circle>
        }
     
        <ImgArea/>
        
        <Button onClick={(()=>{onClickcannon()})}>발싸</Button>
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

// const Circle = styled.div<{circlevisibility: string}>`
//      position: absolute;
//     top: 90%;
//     left: 50%;
//     transform: translateY(-90%) translateX(-50%);
//     width: 100px;
//     height: 100px;
//     z-index: 12;
//     border-radius: 50%;
//     background: red;
//     transition: 1.8 ease-in-out;
//     animation: ${(props) => (props.circlevisibility === "true" ? ` ${CnnonAnimationKeyframes} 1.8s forwards` : 'null')};
//     ${({theme}) => theme.BoxCenter};
//     p {
//         color: ${({theme}) => theme.colors.white};
//         font-size: 18px;
//         font-weight: 700;
//     }
// `; 

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
    animation: ${CnnonAnimationKeyframes} 1.8s forwards;
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
