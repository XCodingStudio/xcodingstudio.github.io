import { BasicSectionType, GallerySectionType, MainBannerConfigType, TechnologiesSectionType } from "./types";
import MobileApps from '../Assets/Images/MobileApps.jpg';
import WebApps from '../Assets/Images/WebApps.jpg';
import Design from '../Assets/Images/Design.jpg';
import { icons } from "../Assets/Icons";

export const HardCoded_MainBannerConfig: MainBannerConfigType = {
    title: "Digital Products and Services for You"
}

export const HardCoded_FirstSectionConfig: BasicSectionType = {
    title: "Lorem Ipsum is simply dummy text of the printing and typesetting industry",
    content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the " +
        "industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and " +
        "scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into " +
        "electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of" +
        "Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like " +
        "Aldus PageMaker including versions of Lorem Ipsum."
}

export const HardCoded_GalleryConfig: GallerySectionType = {
    title_one: "Mobile Apps",
    content_one: "Lorem Ipsum is simply dummy text of the printing",
    image_one: `${MobileApps}`,
    title_two: "Web Apps",
    content_two: "Lorem Ipsum is simply dummy text of the printing",
    image_two: `${WebApps}`,
    title_three: "Design",
    content_three: "Lorem Ipsum is simply dummy text of the printing",
    image_three: `${Design}`
}

export const HardCoded_TechnologiesSectionConfig: TechnologiesSectionType = {
    title: "The technologies we are using",
    javascriptIcon: `${icons.javascriptIcon}`,
    pythonIcon: `${icons.pythonIcon}`,
    reactIcon: `${icons.reactIcon}`,
    djangoIcon: `${icons.djangoIcon}`,
    azureIcon: `${icons.azureIcon}`
}
