import { GrayPolygon } from "./Polygons.css";
import { BasicSectionType } from "../../utils/types";
import { FC } from "react";

type GrayTextPolygonType = {
    config: BasicSectionType;
}

export const GrayTextPolygon: FC<GrayTextPolygonType> = ({ config }) => {
    return (
        <GrayPolygon>
            <p>{config.title}</p>
            <p>{config.content}</p>
        </GrayPolygon>
    );
}