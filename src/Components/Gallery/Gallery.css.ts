import styled from "styled-components";

export const GalleryContainer = styled.div`
    display: flex; 
    flex: 1;
    justify-content: center;
    padding: 5%;
`;

export const ImageContainer = styled.div`
    padding-top: 5%;
    width: 100%;
    text-align: center;
`;

export const Image = styled.img`
  width: 80%;
  height: 80%;
  filter: grayscale(50%);
  transition: all 0.2s ease;
  
  &:hover {
    filter: grayscale(0%);
  }
`;

export const H2Title = styled.h2``;
