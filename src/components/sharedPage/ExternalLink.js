import React from 'react';

export const ExternalLink = ({url, title, displayName}) => {
    return (
        <a className={'text-xl p-2 m-2 w-[9.375rem] text-center rounded bg-dark-pink hover:text-white'}
           href={url}
           title={title}
           target="_blank"
        >{displayName}</a>
    );
}