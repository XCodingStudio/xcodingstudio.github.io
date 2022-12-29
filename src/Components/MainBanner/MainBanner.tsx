import { Container, Title } from "./MainBanner.css";
import { FC } from "react";
import { MainBannerConfigType } from "../../utils/types";

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
