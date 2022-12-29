import styled from "styled-components";

export const WhitePolygon = styled.div`
    padding: 6%;
    text-align: center;
`;

export const GrayPolygon = styled.div<{ cutDown: boolean }>`
    clip-path: ${(props) => props.cutDown ? 
        'polygon(50% 0%, 100% 0, 100% 35%, 100% 70%, 100% 81%, 78% 86%, 36% 93%, 0 100%, 0% 35%, 0 0)' :
        'polygon(55% 9%, 100% 15%, 100% 100%, 0 100%, 0 0);'
    };
    background: #e0e0e0;
    padding: 8%;
    text-align: center;
`;

export const H1Title = styled.h1``;

export const Content = styled.div`
    padding: 2%;
    line-height: 1.6rem;
`;

export const FlexWrapper = styled.div`
    display: flex;
    justify-content: space-between;
`;

export const IconWrapper = styled.div`
    padding-top: 4%;
`;

export const PythonIcon = styled.img`
    width: 6rem;
    filter: invert(44%) sepia(26%) saturate(984%) hue-rotate(164deg) brightness(102%) contrast(87%);

    @media only screen and (max-width: 576px) {
        width: 2rem;
    }
`;

export const JavascriptIcon = styled.img`
    width: 6rem;
    filter: invert(81%) sepia(27%) saturate(945%) hue-rotate(4deg) brightness(107%) contrast(88%);

    @media only screen and (max-width: 576px) {
        width: 2rem;
    }
`;

export const ReactIcon = styled.img`
    width: 6rem;
    filter: invert(73%) sepia(59%) saturate(734%) hue-rotate(166deg) brightness(103%) contrast(103%);

    @media only screen and (max-width: 576px) {
        width: 2rem;
    }
`;

export const Icon = styled.img`
    width: 6rem;

    @media only screen and (max-width: 576px) {
        width: 2rem;
    }
`;
