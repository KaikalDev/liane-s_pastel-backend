import styled, { createGlobalStyle } from 'styled-components'

export const Colors = {
  blue: '#030027',
  background: '#ebebeb',
  titleColor: '#cca000',
  darkYellow: '#826808',
  textColor: '#000',
  buttonColor: '#128c7e'
}

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    list-style: none;
    font-family: "Roboto", sans-serif;
  }

  body {
    background-color: ${Colors.background};
  }
`

export const Container = styled.div`
  max-width: 1024px;
  width: 100%;
  margin: 0 auto;
`
