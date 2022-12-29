import { FC } from "react";
import { TechnologiesSectionType } from "../../utils/types";
import {
    FlexWrapper,
    H1Title,
    Icon,
    IconWrapper,
    JavascriptIcon,
    PythonIcon,
    ReactIcon,
    WhitePolygon
} from "./Polygons.css";

type WhiteTextPolygonType = {
    config: TechnologiesSectionType
};

export const TechnologiesPolygon: FC<WhiteTextPolygonType> = ({ config }) => {
    return (
        <WhitePolygon>
            <H1Title>{config.title}</H1Title>
            <FlexWrapper>
                <IconWrapper>
                    <PythonIcon src={config.pythonIcon} alt={config.pythonIcon} />
                </IconWrapper>
                <IconWrapper>
                    <JavascriptIcon src={config.javascriptIcon} alt={config.javascriptIcon} />
                </IconWrapper>
                <IconWrapper>
                    <ReactIcon src={config.reactIcon} alt={config.reactIcon} />
                </IconWrapper>
                <IconWrapper>
                    <Icon src={config.djangoIcon} alt={config.djangoIcon} />
                </IconWrapper>
                <IconWrapper>
                    <Icon src={config.azureIcon} alt={config.azureIcon} />
                </IconWrapper>
            </FlexWrapper>
        </WhitePolygon>
    )
}
