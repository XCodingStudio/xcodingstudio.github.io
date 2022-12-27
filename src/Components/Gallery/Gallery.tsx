import { FC } from "react";
import { GallerySectionType } from "../../utils/types";
import { GalleryContainer, H2Title, Image, ImageContainer } from "./Gallery.css";
import { Content } from "../Polygons/Polygons.css";

type GalleryType = {
  config: GallerySectionType;
};

export const Gallery: FC<GalleryType> = ({ config }) => {
  return (
      <GalleryContainer>
        <ImageContainer>
            <Image src={config.image_one} alt={config.title_one} />
            <H2Title>{config.title_one}</H2Title>
            <Content>{config.content_one}</Content>
        </ImageContainer>
        <ImageContainer>
            <Image src={config.image_two} alt={config.title_two} />
            <H2Title>{config.title_two}</H2Title>
            <Content>{config.content_two}</Content>
        </ImageContainer>
        <ImageContainer>
            <Image src={config.image_three} alt={config.title_three} />
            <H2Title>{config.title_three}</H2Title>
            <Content>{config.content_three}</Content>
        </ImageContainer>
      </GalleryContainer>
  )
};