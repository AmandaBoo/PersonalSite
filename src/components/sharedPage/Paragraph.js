import React from "react";
import {BodyTitle} from "./BodyTitle";

export const Paragraph = ({body}) => {
    return (
        <div className={'md:py-10 max-w-article m-0-auto text-left article'}>
            {body}
        </div>
    );
}