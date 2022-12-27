import { Container } from "./MainBanner.css";
import { MainBannerConfigType } from "../../Config";
import { FC } from "react";

type MainBannerType = {
    config: MainBannerConfigType;
};

export const MainBanner: FC<MainBannerType> = ({ config }) => {
    return (
        <Container>
            <h1>{config.title}</h1>
        </Container>
    )
}