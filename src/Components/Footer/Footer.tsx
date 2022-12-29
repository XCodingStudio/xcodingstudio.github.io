import { FooterContainer, Logo, SocialMedia, Icon } from "./Footer.css";
import XCodingStudioLogo from '../../Assets/Images/XCodingStudioLogo.png';
import { icons } from "../../Assets/Icons";

export const Footer = () => {
    return (
        <FooterContainer >
            <Logo src={XCodingStudioLogo} alt={XCodingStudioLogo} />
            <SocialMedia>
                <Icon src={icons.facebookIcon} alt={icons.facebookIcon} />
                <Icon src={icons.instagramIcon} alt={icons.instagramIcon} />
                <Icon src={icons.linkedinIcon} alt={icons.linkedinIcon} />
            </SocialMedia>
        </FooterContainer>
    )
}
