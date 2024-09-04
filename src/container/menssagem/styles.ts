import styled from 'styled-components'
import { Colors } from '../../styles'

export const Container = styled.div`
  padding: 12px 20px;
  margin-top: 32px;
  margin-bottom: 32px;
  background-color: ${Colors.blue};
  color: ${Colors.background};

  h3 {
    margin-bottom: 12px;
    text-align: center;
    font-family: 'Montserrat', sans-serif;
  }
`

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  gap: 12px;

  div {
    display: flex;
    flex-direction: column;
    gap: 4px;

    &.error-message {
      font-size: 12px;
    }
  }

  label {
    font-family: 'Montserrat', sans-serif;
    font-weight: bold;
  }

  input,
  select {
    height: 25px;
    border: none;
    border: 1px solid #000;

    &.error {
      border: 1px solid red;
    }
  }

  > button {
    border: 1px solid #000;
    color: #000;
  }
`

export const MenssageBox = styled.div`
  margin-bottom: 48px;

  .auto-expand {
    padding: 10px;
    width: 100%;
    min-height: 50px;
    max-height: 300px;
    margin-top: 16px;
    box-sizing: border-box;
    white-space: pre-wrap;
    overflow-y: auto;
    resize: none;
    border: 1px solid #ccc;
  }

  .buttons {
    display: flex;
    flex-direction: row;
    gap: 12px;
    margin-top: 12px;
    justify-content: space-between;

    i {
      display: flex;
      margin-right: 8px;
      align-items: center;

      img {
        height: 20px;
        width: 20px;
      }
    }

    button,
    a {
      padding: 4px 15px;
      align-items: center;
      display: flex;
      border-radius: 50px;
      border: none;
      font-family: 'Montserrat', sans-serif;
      font-weight: bold;
      text-decoration: none;
      font-size: 18px;
      cursor: pointer;

      &:last-child {
        color: ${Colors.background};
        background-color: ${Colors.buttonColor};
      }
    }
  }
`
