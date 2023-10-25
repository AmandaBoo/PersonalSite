import React from 'react';
import {InternalProjectLInk} from "./InternalLink";
import {ProjectDescription} from "./ProjectDescription";
import {ThumbnailImage} from "./ThumbnailImage";
import {ProjectTitle} from "./ProjectTitle";

export const ProjectCard = ({projectName, projectLink, projectDescription, imgPath}) => {
    return (
        <div className={'flex justify-center pb-5 text-left mx-10 fade-popup'}>
            <div className={'flex justify-center flex-col border-brown border-2'}>
                <ThumbnailImage imgPath={imgPath}/>
                <ProjectTitle title={projectName}/>
                <ProjectDescription description={projectDescription}/>
                <InternalProjectLInk
                    name={'ARTICLE'}
                    path={projectLink}
                />
            </div>
        </div>
    );
}