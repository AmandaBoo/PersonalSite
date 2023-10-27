import React from "react";

export const DNDProjectImages = () => {
    const createProjectImages = (src, alt) => {
        return (
            <div className={'w-1/2 md:w-1/3 px-2'}>
                <img
                    src={src}
                    alt={alt}
                />
            </div>
        );
    }


    return (
        <div className={'flex justify-center py-8'}>
            {createProjectImages('./images/dnd/fullStatSheet.jpg', 'Image of first two stat pages')}
            {createProjectImages('./images/dnd/statSheet1.jpg', 'Image of first second stat sharedPage')}
        </div>
    );
}