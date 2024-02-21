import { ThemeProvider } from "styled-components";

import { GlobalStyle, Reset } from "styles";
import { Theme } from "styles/theme";

import styled from "styled-components";

import { Main } from "components/Main";
import { SettingModal } from "components/SettingModal";
import { Beforenumber } from "components/Beforenumber";



export const App = () => {
  const theme =  Theme;

  const onClickRestart = () => {
      window.location.reload();
  }

  return (
    <ThemeProvider theme={theme}>
    <GlobalStyle />
    <Reset />
    <Bg>
      <SettingModal/>
      <Main/>
      <Beforenumber/>
      <ReStart onClick={(()=>{onClickRestart()})}>다시</ReStart>
    </Bg>
  </ThemeProvider>
  )
}

const Bg = styled.div`
  position: relative;
  width: 100vw;
  height: 100vh;
  ${({theme}) => theme.BoxCenter};
  background-color: ${({theme}) => theme.colors.gray1};
`;

const ReStart = styled.div`
  position: absolute;
  bottom: 20px;
  right: 40px;
  font-size: 36px;
  font-weight: 700;
  z-index: 1000000;
  cursor: pointer;
`;