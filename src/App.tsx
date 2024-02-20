import { ThemeProvider } from "styled-components";

import { GlobalStyle, Reset } from "styles";
import { Theme } from "styles/theme";

import styled from "styled-components";

import { Main } from "components/Main";

export const App = () => {
  const theme =  Theme ;
  return (
    <ThemeProvider theme={theme}>
    <GlobalStyle />
    <Reset />
    <Bg>
      <Main/>
    </Bg>
  </ThemeProvider>
  )
}

const Bg = styled.div`
  width: 100vw;
  height: 100vh;
  ${({theme}) => theme.BoxCenter};
  background-color: ${({theme}) => theme.colors.gray1};;
`;