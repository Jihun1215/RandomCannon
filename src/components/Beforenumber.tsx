import styled from "styled-components";

export const Beforenumber = () => {
  return (
    <Aside>
    여기의 최근 나온 번호 적기
    </Aside>
  )
}

const Aside = styled.aside`
    position: absolute;
    bottom: 0;
    right: 0;
    width: 150px;
    height: 350px;
    border: 1px solid red;
`;