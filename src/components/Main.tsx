import { useEffect, useState } from "react";
import styled, { keyframes } from "styled-components"

import { ImgArea } from "./ImgArea";

import { useRecoilState, useRecoilValue } from "recoil";
import { DuplicatesForCheck, NumberSetting, SettingModalCheck , NumberArr} from "state/atoms";
import  Effect from "assets/sound/eff.flac"

export const Main = () => {
    // 대포 횟수 
    const [cannonCount, setCannonCount] = useState(0);

    const [finishCheck, setFinishCheck] = useState(false);



    // 홀수 대포
    const [circleVisibility, setCircleVisibility ] = useState(false);
    // 짝수 대포
    const [showNewAnimation, setShowNewAnimation] = useState(false);

    const inputNumber = useRecoilValue(NumberSetting);
    const inputCheck = useRecoilValue(DuplicatesForCheck);
    const modalCheck = useRecoilValue(SettingModalCheck);

    // 현재 보여줄 숫자
    const [thisNumber, setThisNumber] = useState(0)
    // 지금까지 나온 숫자를 담을 State
    const [thisNumberArr, setThisNumberArr] = useRecoilState<number[]>(NumberArr);




    useEffect(()=>{
        // console.log("지정한 수", (Number(inputNumber)));
        // console.log("대포카운터",cannonCount);
        if(!inputCheck && !modalCheck && Number(inputNumber) <= cannonCount){
            const timeoutId = setTimeout(() => {
                console.log("시마이");
                setFinishCheck(true);
              }, 1000);
          
              // Clean-up 함수: 컴포넌트가 언마운트되거나 의존성 배열이 변경될 때 clearTimeout 호출
              return () => clearTimeout(timeoutId);
      }
    },[cannonCount])
   
    const generateRandomNumber = (max: number) => {
        return Math.floor(Math.random() * max) + 1;
    };


    const onClickCannon = (): void => {
        if(!finishCheck){
            setCannonCount(cannonCount + 1);
            let randomNumber: number;
            if (inputCheck) {
                // 중복 허용된 상태에서 무작위 숫자 생성
                randomNumber = generateRandomNumber(Number(inputNumber));
            } else {
                // 중복 없이 무작위 숫자 생성
                do {
                    randomNumber = generateRandomNumber(Number(inputNumber));
                } while (thisNumberArr.includes(randomNumber));
            }
    
            setThisNumber(randomNumber);
            setThisNumberArr([...thisNumberArr, randomNumber]);
    
    
    
            if(cannonCount % 2 === 1){
                // console.log("짝수")
                setCircleVisibility(false);
                setShowNewAnimation(true);
            }else{
                // console.log("홀수")
                setCircleVisibility(true);
                setShowNewAnimation(false);
            }
        }else alert("시마이")
     
    }

  return (
    <View>
          
            {!finishCheck && circleVisibility && <Circle>
                <p>{thisNumber}</p> 
                <audio autoPlay>
                <source src={Effect} type="audio/flac" />
                </audio>
            </Circle>}
       

            {!finishCheck && showNewAnimation && <Circle>
                <p>{thisNumber}</p>
                <audio autoPlay>
                <source src={Effect} type="audio/flac" />
                </audio>
            </Circle>}
     
        <ImgArea/>
        {
            !finishCheck ?  <Button onClick={(()=>{onClickCannon()})}>발싸</Button> : <Button>끝</Button>
        }
       
    </View>
  )
}

const View = styled.main`
    position: relative;
    width: 90%;
    height: 90%;
    background: linear-gradient(0deg, rgba(255,255,255,1) 0%, rgba(81,124,211,1) 100%);
    border-radius: 8px;
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
        font-size: 30px;
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
