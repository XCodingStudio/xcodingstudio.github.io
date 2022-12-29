import styled from "styled-components";

export const FooterContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-weight: bold;
    background: #e0e0e0;
  
    * {
        padding: 2%;
    }

 
    @media only screen and (max-width: 576px) {
        align-items: center;
        justify-content: center;
        text-align: center;
        flex-wrap: wrap;
    }
`;

export const Logo = styled.img``;
export const Icon = styled.img`
    width: 1.3rem;
    margin-right: 1rem;
    transition: all 0.1s ease;
    
    &:hover {
        filter: invert(70%) sepia(26%) saturate(6470%) hue-rotate(319deg) brightness(108%) contrast(97%);
        transition: all 0.1s ease;
    }
`;

export const SocialMedia = styled.div`
    width: 10%;
`;
