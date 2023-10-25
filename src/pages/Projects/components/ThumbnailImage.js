import React from "react";

export const ThumbnailImage = ({imgPath}) => {
    return (
        <div className={'flex justify-center max-w-[24rem] max-h-[24rem] md:w-96 md:h-96'}>
            <img
                className={'object-cover'}
                alt={'project-gif'}
                src={imgPath}
            />
        </div>
    );
}