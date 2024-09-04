import styled from 'styled-components'
import { Colors } from '../../styles'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  min-height: 70vh;
  padding: 15px;
  border: 3px solid ${Colors.titleColor};

  > p {
    text-align: center;
    font-family: 'Montserrat', sans-serif;
    font-weight: normal;
    font-size: 25px;
  }

  ul {
    display: flex;
    flex-direction: column;
    gap: 8px;
  }

  li {
    display: flex;
    justify-content: space-between;
    align-items: center;

    h3 {
      font-family: 'Montserrat', sans-serif;
      font-weight: normal;
      font-size: 14px;
    }

    div {
      display: flex;
      gap: 8px;
      align-items: center;
    }
  }

  .Buttons {
    display: inline-flex;
    gap: 12px;
    height: min-content;
    padding: 2px;
    border-radius: 20px;
    background-color: ${Colors.background};

    button {
      display: flex;
      align-items: center;
      justify-content: center;
      height: 20px;
      width: 20px;
      padding: 1px;
      border: none;
      border-radius: 50%;
      background-color: ${Colors.darkYellow};
      cursor: pointer;
    }

    img {
      max-height: 16px;
      max-width: 16px;
    }
  }

  footer {
    margin-top: 32px;

    div {
      display: flex;
      justify-content: space-between;
      align-items: center;

      p {
        font-family: 'Montserrat', sans-serif;
        font-size: 18px;
        font-weight: normal;
      }

      i {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 55px;
        height: 55px;
        padding: 2px;
        border: 3px solid ${Colors.titleColor};
        border-radius: 50%;

        img {
          height: 40px;
          width: 40px;
        }
      }
    }
  }
`

export const BoxCart = styled.div`
  position: relative;
  width: 100%;
  margin-top: 12px;
  padding: 50px 12px 60px 12px;
  color: ${Colors.background};
  background-color: ${Colors.blue};
  overflow: hidden;

  h2 {
    text-align: center;
    margin-bottom: 5px;
    font-family: 'Playfair Display', serif;
    font-size: 32px;
    font-weight: normal;
    text-transform: uppercase;
    color: ${Colors.titleColor};
  }

  .border {
    border: 1.6px solid ${Colors.titleColor};
    padding: 4px;
  }

  .Detalhe {
    position: absolute;
    z-index: 1;
    height: 100px;
    width: 100px;
    border-radius: 50%;
    background-color: ${Colors.background};

    &__1 {
      top: -50px;
      left: -50px;
    }
    &__2 {
      top: -50px;
      right: -50px;
    }
    &__3 {
      bottom: -50px;
      left: -50px;
    }
    &__4 {
      bottom: -50px;
      right: -50px;
    }
  }
`
