import {ExternalLink} from "../../../components/sharedPage/ExternalLink";
import React from "react";

export const FFXIVExternalLink = () => {
    return (
        <div className={'flex justify-center'}>
            <ExternalLink
                url={'https://github.com/AmandaBoo/FF14AutoCrafter'}
                title={'External LInk to FF14 Auto Crafter'}
                displayName={'REPO'}
            />
        </div>
    )
}