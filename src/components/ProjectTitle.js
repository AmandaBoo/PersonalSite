import React from 'react';

export const ProjectTitle = ({projectTitleName}) => {
    return (
        <div className={'text-3xl md:text-5xl font-serif text-white border-b-2 border-white ' +
        'max-w-[75%] md:max-w-[50%] width-full m-0-auto p-5'}>
            {projectTitleName}
        </div>
    );
}