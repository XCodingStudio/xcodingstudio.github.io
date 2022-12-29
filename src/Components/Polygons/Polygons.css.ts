import styled from "styled-components";
import { isSafari } from "../../utils/browsers";

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
    justify-content: center;
`;

export const IconWrapper = styled.div`
    padding-top: 4%;
`;

export const PythonIcon = styled.img`
    width: 40%;
    filter: invert(44%) sepia(26%) saturate(984%) hue-rotate(164deg) brightness(102%) contrast(87%);
`;

export const JavascriptIcon = styled.img`
    width: 40%;
    filter: invert(81%) sepia(27%) saturate(945%) hue-rotate(4deg) brightness(107%) contrast(88%);
`;

export const ReactIcon = styled.img`
    width: 40%;
    filter: invert(73%) sepia(59%) saturate(734%) hue-rotate(166deg) brightness(103%) contrast(103%);
`;

export const Icon = styled.img`
    width: ${isSafari ? 40 : 25}%;
`;
