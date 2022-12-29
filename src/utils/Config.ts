import { BasicSectionType, GallerySectionType, MainBannerConfigType } from "./types";

export class Config {
    private static instance: Config;
    private _MainBannerConfig: MainBannerConfigType | undefined;
    private _FirstGraySection: BasicSectionType | undefined;
    private _GallerySection: GallerySectionType | undefined;

    private constructor() {}

    public static getInstance(): Config {
        if (!Config.instance) {
            Config.instance = new Config();
        }

        return Config.instance;
    }

    get MainBannerConfig(): MainBannerConfigType {
        // eslint-disable-next-line @typescript-eslint/consistent-type-assertions
        return <MainBannerConfigType>this._MainBannerConfig;
    }

    set MainBannerConfig(mainBannerConfig: MainBannerConfigType) {
        this._MainBannerConfig = mainBannerConfig;
    }

    get FirstGraySection(): BasicSectionType | undefined {
        return this._FirstGraySection;
    }

    set FirstGraySection(FirstSectionConfig: BasicSectionType | undefined) {
        this._FirstGraySection = FirstSectionConfig;
    }

    get GallerySection(): GallerySectionType | undefined {
        return this._GallerySection;
    }

    set GallerySection(value: GallerySectionType | undefined) {
        this._GallerySection = value;
    }
}
