import { Container } from "./MainBanner.css";
import { FC } from "react";
import { MainBannerConfigType } from "../../utils/types";
import { Title } from "../Polygons/Polygons.css";

type MainBannerType = {
    config: MainBannerConfigType;
};

export const MainBanner: FC<MainBannerType> = ({ config }) => {
    return (
        <Container>
            <Title>{config.title}</Title>
        </Container>
    )
}