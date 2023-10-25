import React from "react";

export const ProjectDescription = ({description}) => {
    return (
        <p className={'max-w-[24rem] md:w-96 px-3'}>
            {description}
        </p>
    );
}