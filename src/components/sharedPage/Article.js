import React from "react";
import {BodyTitle} from "./BodyTitle";

export const Article = ({title, body}) => {
    return (
        <div className={'article'}>
            <BodyTitle title={title}/>
            {body}
        </div>
    );
}