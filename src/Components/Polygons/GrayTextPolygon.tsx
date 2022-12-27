import { Content, GrayPolygon, H1Title } from "./Polygons.css";
import { BasicSectionType } from "../../utils/types";
import { FC } from "react";

type GrayTextPolygonType = {
    config: BasicSectionType;
    cutDown: boolean;
}

export const GrayTextPolygon: FC<GrayTextPolygonType> = ({ config, cutDown }) => {
    return (
        <GrayPolygon cutDown={cutDown}>
            <H1Title>{config.title}</H1Title>
            <Content>{config.content}</Content>
        </GrayPolygon>
    );
}