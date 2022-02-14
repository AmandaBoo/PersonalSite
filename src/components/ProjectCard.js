import React, {useState} from 'react';
import {InternalLink} from "./InternalLInk";

export const ProjectCard = ({projectName, projectLink, projectDescription, imgPath}) => {
    const [isLoaded, setIsLoaded] = useState(false);
    return (
        <div className={'flex justify-center pb-5 text-left mx-10 fade-popup'}>
            <div className={'flex justify-center flex-col border border-white border-4 bg-hover-black'}>
                {createThumbnailImage(imgPath, setIsLoaded)}
                {createTitle(projectName)}
                {createTextBody(projectDescription)}
                <InternalLink
                    displayName={'ARTICLE'}
                    internalLink={projectLink}
                />
            </div>
        </div>
    );
}

function createTitle(projectName) {
    return (
        <span className={'font-serif text-2xl p-3 pb-2'}>
            {projectName}
        </span>
    );
}

function createTextBody(projectDescription) {
    return (
        <p className={'w-96 pb-10 pb-3 px-3'}>
            {projectDescription}
        </p>
    );
}

function createThumbnailImage(imgPath, setIsLoaded) {
    return (
        <div className={'flex justify-center w-96 h-96'}>
            <img
                onLoad={() => setIsLoaded(true)}
                className={'object-cover'}
                alt={'project-gif'}
                src={imgPath}
            />
        </div>
    );
}