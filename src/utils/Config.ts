import { BasicSectionType, GallerySectionType, MainBannerConfigType, TechnologiesSectionType } from "./types";

export class Config {
    private static instance: Config;
    private _MainBannerConfig!: MainBannerConfigType;
    private _FirstGraySection!: BasicSectionType;
    private _GallerySection!: GallerySectionType;
    private _TechnologiesSection!: TechnologiesSectionType;

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

    get FirstGraySection(): BasicSectionType {
        return this._FirstGraySection;
    }

    set FirstGraySection(FirstSectionConfig: BasicSectionType) {
        this._FirstGraySection = FirstSectionConfig;
    }

    get GallerySection(): GallerySectionType {
        return this._GallerySection;
    }

    set GallerySection(value: GallerySectionType) {
        this._GallerySection = value;
    }

    get TechnologiesSection(): TechnologiesSectionType {
        return this._TechnologiesSection;
    }

    set TechnologiesSection(value: TechnologiesSectionType) {
        this._TechnologiesSection = value;
    }
}
