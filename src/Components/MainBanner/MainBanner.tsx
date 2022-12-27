import { Container } from "./MainBanner.css";
import { FC } from "react";
import { MainBannerConfigType } from "../../utils/types";

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