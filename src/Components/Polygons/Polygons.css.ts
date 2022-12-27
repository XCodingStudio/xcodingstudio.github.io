import styled from "styled-components";

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