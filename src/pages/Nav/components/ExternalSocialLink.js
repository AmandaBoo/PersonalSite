import {SvgLinkIcon} from "./SvgLinkIcon";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import React from "react";

export const ExternalSocialLinks = () => {
    return (
        <div className={'flex justify-center'}>
            <SvgLinkIcon url={'https://github.com/AmandaBoo/'}>
                <GitHubIcon className={'text-brown hover:'} fontSize={'large'}/>
            </SvgLinkIcon>
            <SvgLinkIcon url={'https://www.linkedin.com/in/amandabui-dev/'}>
                <LinkedInIcon className={'text-brown'} fontSize={'large'}/>
            </SvgLinkIcon>
        </div>
    )
}