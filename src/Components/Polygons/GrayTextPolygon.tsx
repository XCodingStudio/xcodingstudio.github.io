import { Content, GrayPolygon } from "./Polygons.css";
import { BasicSectionType } from "../../utils/types";
import { FC } from "react";

type GrayTextPolygonType = {
    config: BasicSectionType;
}

export const GrayTextPolygon: FC<GrayTextPolygonType> = ({ config }) => {
    return (
        <GrayPolygon>
            <h1>{config.title}</h1>
            <Content>{config.content}</Content>
        </GrayPolygon>
    );
}