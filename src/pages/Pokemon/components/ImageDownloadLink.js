import React from 'react';

export const ImageDownloadLink = ({imagePath, displayName}) => {
    return (
        <a className={'text-xl p-2 m-2 w-[9.375rem] rounded bg-dark-pink hover:text-white'}
           target={'_blank'}
           href={imagePath}
           download
        >{displayName}</a>
    );
}