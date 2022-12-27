import React from 'react';
import './App.css';
import { MainBanner } from "./Components/MainBanner/MainBanner";
import { Config } from "./utils/Config";
import { HardCoded_MainBannerConfig } from "./utils/hardCodedConfig";

function App() {

    const config = Config.getInstance();
    config.MainBannerConfig = HardCoded_MainBannerConfig;

    return (
        <>
            <MainBanner config={config.MainBannerConfig}/>
        </>
    );
}

export default App;
