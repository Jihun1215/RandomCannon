import styled from "styled-components";

import {  useRecoilValue } from "recoil";
import {  NumberArr} from "state/atoms";

export const Beforenumber = () => {
  const thisNumberArr = useRecoilValue<number[]>(NumberArr);
  return (
    <Aside>
      <Card>
        <Text>
          <h3>최근 나온 번호</h3>
        </Text>
        {thisNumberArr && thisNumberArr.map((number, index) => {
          return <Item key={index}><p>{index + 1}번: </p>
          <span> {number}번</span></Item>
        })}
      </Card>
    </Aside>
  )
}

const Aside = styled.aside`
    position: absolute;
    bottom: 6%;
    right: 7%;
    width: 200px;
    height: 350px;
    background-color:rgba(255, 255, 255, 0.7);
    border-radius: 14px;
`;

const Card = styled.div`
  width: 100%;
  min-height: 100%;
  ${({theme}) => theme.FlexCol};
  align-items: center;
  gap: 5px 0;
  overflow-y: auto;
  max-height: 100%; /* 추가: 최대 높이를 100%로 설정 */
  box-sizing: border-box; /* 추가: padding, border를 높이에 포함시키기 위해 box-sizing 설정 */
  padding: 10px; /* 예시: 내용 상하 간격을 위해 padding 추가 (필요에 따라 조절 가능) */

`;

const Text = styled.div`
  width: 100%;
  height: 50px;
  ${({theme}) => theme.BoxCenter};
  h3 {
    font-size: 24px;
    font-weight: 600;
  }
`;


const Item = styled.div`
  width: 100%;
  min-height: 40px;
  ${({theme}) => theme.FlexRow};
  ${({theme}) => theme.FlexCenter};
  font-size: 20px;
  font-weight: 700;
    p {
      width: 30%;
      height: 100%;
      ${({theme}) => theme.BoxCenter};
    }
    span {
      width: 70%;
      height: 100%;
      ${({theme}) => theme.BoxCenter};
    }
`;