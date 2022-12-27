import React from 'react';
import { MainBanner } from "./Components/MainBanner/MainBanner";
import { GrayTextPolygon } from "./Components/Polygons/GrayTextPolygon";
import { Config } from "./utils/Config";
import { HardCoded_FirstSectionConfig, HardCoded_MainBannerConfig } from "./utils/hardCodedConfig";
import './App.css';

function App() {

    const config = Config.getInstance();
    config.MainBannerConfig = HardCoded_MainBannerConfig;
    config.FirstGraySection = HardCoded_FirstSectionConfig;

    return (
        <>
            <MainBanner config={config.MainBannerConfig}/>
            <GrayTextPolygon config={config.FirstGraySection}/>
        </>
    );
}

export default App;
