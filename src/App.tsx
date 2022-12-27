import React from 'react';
import { MainBanner } from "./Components/MainBanner/MainBanner";
import { GrayTextPolygon } from "./Components/Polygons/GrayTextPolygon";
import { Config } from "./utils/Config";
import {
    HardCoded_FirstSectionConfig,
    HardCoded_GalleryConfig,
    HardCoded_MainBannerConfig
} from "./utils/hardCodedConfig";
import { Gallery } from "./Components/Gallery/Gallery";
import './App.css';
import { Footer } from "./Components/Footer/Footer";

function App() {

    const config = Config.getInstance();
    config.MainBannerConfig = HardCoded_MainBannerConfig;
    config.FirstGraySection = HardCoded_FirstSectionConfig;
    config.GallerySection = HardCoded_GalleryConfig;

    return (
        <>
            <MainBanner config={config.MainBannerConfig} />
            <GrayTextPolygon config={config.FirstGraySection} cutDown={true} />
            <Gallery config={config.GallerySection} />
            <GrayTextPolygon config={config.FirstGraySection} cutDown={false} />
            <Footer />
        </>
    );
}

export default App;
