import React from "react";

export const DigitalArt = ({src, alt}) => {
    return (
        <div className={'min-w-[25%] w-3/12 m-2'}>
            <img
                alt={alt}
                src={src}
            />
        </div>
    );
}