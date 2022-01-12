import React from 'react';

export const LinkComponent = ({url, displayName, additionalStyles}) => {
    return (
        <a href={url}
           target={"_blank"}
           className={'link styled-link ' + additionalStyles}
        >
            {displayName}
        </a>
    )
}