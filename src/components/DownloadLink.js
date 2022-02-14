import React from 'react';

export const DownloadLink = ({pdfPath, displayName}) => {
    return (
        <a className={'text-xl p-2 m-2 w-[9.375rem] rounded bg-pale-pink text-dark-pink hover:bg-dark-pink hover:text-white'}
           target={'_blank'}
           href={"./pdfs/" + pdfPath}
           download
        >{displayName}</a>
    );
}