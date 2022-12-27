import { FC } from "react";
import { GallerySectionType } from "../../utils/types";
import { GalleryContainer, ImageContainer } from "./Gallery.css";

type GalleryType = {
  config: GallerySectionType;
};

export const Gallery: FC<GalleryType> = ({ config }) => {
  return (
      <GalleryContainer>
        <ImageContainer>
            <img src={config.image_one} alt={config.title_one}/>
            <h2>{config.title_one}</h2>
            <p>{config.content_one}</p>
        </ImageContainer>
        <ImageContainer>
            <img src={config.image_two} alt={config.title_two}/>
            <h2>{config.title_two}</h2>
            <p>{config.content_two}</p>
        </ImageContainer>
        <ImageContainer>
            <img src={config.image_three} alt={config.title_three}/>
            <h2>{config.title_three}</h2>
            <p>{config.content_three}</p>
        </ImageContainer>
      </GalleryContainer>
  )
};