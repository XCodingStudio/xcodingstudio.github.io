export type MainBannerConfigType = {
    title: string;
};

export class Config {
    private static instance: Config;
    private _MainBannerConfig: MainBannerConfigType | undefined;

    private constructor() {}

    public static getInstance(): Config {
        if (!Config.instance) {
            Config.instance = new Config();
        }

        return Config.instance;
    }

    get MainBannerConfig(): MainBannerConfigType {
        return <MainBannerConfigType>this._MainBannerConfig;
    }

    set MainBannerConfig(mainBannerConfig: MainBannerConfigType) {
        this._MainBannerConfig = mainBannerConfig;
    }
}
