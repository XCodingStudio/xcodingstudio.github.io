import React from 'react';
import { MainBanner } from "./Components/MainBanner/MainBanner";
import { GrayTextPolygon } from "./Components/Polygons/GrayTextPolygon";
import { Config } from "./utils/Config";
import {
    HardCoded_FirstSectionConfig,
    HardCoded_GalleryConfig,
    HardCoded_MainBannerConfig, HardCoded_TechnologiesSectionConfig
} from "./utils/hardCodedConfig";
import { Gallery } from "./Components/Gallery/Gallery";
import './App.css';
import { Footer } from "./Components/Footer/Footer";
import { WhiteTextPolygon } from "./Components/Polygons/WhiteTextPolygon";

function App() {

    const config = Config.getInstance();
    config.MainBannerConfig = HardCoded_MainBannerConfig;
    config.FirstGraySection = HardCoded_FirstSectionConfig;
    config.GallerySection = HardCoded_GalleryConfig;
    config.TechnologiesSection = HardCoded_TechnologiesSectionConfig;

    return (
        <>
            <MainBanner config={config.MainBannerConfig} />
            <GrayTextPolygon config={config.FirstGraySection} cutDown={true} />
            <Gallery config={config.GallerySection} />
            <GrayTextPolygon config={config.FirstGraySection} cutDown={false} />
            <WhiteTextPolygon config={config.TechnologiesSection} />
            <Footer />
        </>
    );
}

export default App;
