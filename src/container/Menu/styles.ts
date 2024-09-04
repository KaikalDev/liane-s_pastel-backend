import styled from 'styled-components'
import { Colors } from '../../styles'

export const Container = styled.div`
  width: calc(50% + 50px);

  div {
    display: flex;
    gap: 5px;
    max-height: 24px;

    button {
      border: none;
      background: ${Colors.blue};
      padding: 0 12px;
      border-radius: 20px;
      cursor: pointer;
    }
  }

  h1 {
    font-family: 'Oswald', sans-serif;
    text-transform: capitalize;
    font-weight: normal;
    font-size: 32px;
    margin-bottom: 12px;
    margin-top: 16px;
  }

  h2 {
    font-family: 'Montserrat', sans-serif;
    font-size: 18px;
  }

  ul {
    display: flex;
    flex-direction: column;
    gap: 5px;
    padding-bottom: 8px;
    border-bottom: 1px solid ${Colors.textColor};
  }

  li {
    display: flex;
    justify-content: space-between;
  }
`
