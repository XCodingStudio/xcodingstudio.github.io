import { Content, GrayPolygon, Title } from "./Polygons.css";
import { BasicSectionType } from "../../utils/types";
import { FC } from "react";

type GrayTextPolygonType = {
    config: BasicSectionType;
}

export const GrayTextPolygon: FC<GrayTextPolygonType> = ({ config }) => {
    return (
        <GrayPolygon>
            <Title>{config.title}</Title>
            <Content>{config.content}</Content>
        </GrayPolygon>
    );
}