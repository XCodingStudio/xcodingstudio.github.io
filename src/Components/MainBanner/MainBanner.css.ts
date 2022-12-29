import styled from 'styled-components';
import CityNight from '../../Assets/Images/CityNight.jpg';

export const Container = styled.div`
    background: url(${CityNight});
    filter: brightness(75%);
    color: #ffffff;
    height: 100vh;
    width: 100%;
    margin-top: 0;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: 50% 50%;
    display: flex;
    align-items: center;
    justify-content: center;
`

export const Title = styled.h1`
    font-size: 3.2rem;
    text-align: center;
    letter-spacing: 0.2rem;
`;

export const Arrows = styled.svg`
    width: 6rem;
    height: 7rem;
    position: absolute;
    left: 50%;
    margin-left: -3rem;
    bottom: 2rem;

    path {
        stroke: #2994D1;
        fill: transparent;
        stroke-width: 0.1rem;
        animation: arrow 2s infinite;
        -webkit-animation: arrow 2s infinite;
    }

    @keyframes arrow {
        0% { 
          opacity:0 
        }
        40% {
          opacity:1 
        }
        80% {
          opacity:0 
        }
        100% {
          opacity:0 
        }
    }

    path.a1 {
      animation-delay: -1s;
    }
    
    path.a2 {
      animation-delay: -0.5s;
    }
    
    path.a3 {
      animation-delay: 0s;
    }
`;
