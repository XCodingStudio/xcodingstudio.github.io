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
