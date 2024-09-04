import styled from 'styled-components'
import { Colors } from '../../styles'

export const Header = styled.header`
  position: relative;
  height: 35vh;
  text-align: center;
  background-color: ${Colors.blue};

  img {
    height: 35vh;
    width: 40%;
    object-fit: cover;
  }

  .overlay {
    position: absolute;
    height: 100%;
    width: 100%;

    &::before {
      position: absolute;
      z-index: 1;
      top: 0;
      left: 0;
      height: 100%;
      width: 100%;
      background-image: radial-gradient(
          ${Colors.background} 0%,
          transparent 70%
        ),
        radial-gradient(${Colors.blue}, ${Colors.blue});
      opacity: 0.2;
      content: '';
    }

    img {
      position: relative;
      z-index: 2;
      opacity: 1;
    }
  }
`
