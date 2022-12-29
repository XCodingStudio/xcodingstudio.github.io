import React from 'react';
import { MainBanner } from "./Components/MainBanner/MainBanner";
import { CutGrayTextPolygon } from "./Components/Polygons/CutGrayTextPolygon";
import { Config } from "./utils/Config";
import {
    HardCoded_FirstSectionConfig,
    HardCoded_GalleryConfig,
    HardCoded_MainBannerConfig, HardCoded_TechnologiesSectionConfig
} from "./utils/hardCodedConfig";
import { Gallery } from "./Components/Gallery/Gallery";
import './App.css';
import { Footer } from "./Components/Footer/Footer";
import { TechnologiesPolygon } from "./Components/Polygons/TechnologiesPolygon";

function App() {

    const config = Config.getInstance();
    config.MainBannerConfig = HardCoded_MainBannerConfig;
    config.FirstGraySection = HardCoded_FirstSectionConfig;
    config.GallerySection = HardCoded_GalleryConfig;
    config.TechnologiesSection = HardCoded_TechnologiesSectionConfig;

    return (
        <>
            <MainBanner config={config.MainBannerConfig} />
            <CutGrayTextPolygon config={config.FirstGraySection} cutDown={true} />
            <Gallery config={config.GallerySection} />
            <CutGrayTextPolygon config={config.FirstGraySection} cutDown={false} />
            <TechnologiesPolygon config={config.TechnologiesSection} />
            <Footer />
        </>
    );
}

export default App;
