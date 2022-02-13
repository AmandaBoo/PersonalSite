import React from 'react';
import {ProjectCard} from "../components/ProjectCard";

export const ProjectsPage = ({}) => {
    return (
        <div className={'flex-center fade-popup mobile-display-block'}>
            <ProjectCard
                projectName={'GENSHIN COOKBOOK'}
                projectLink={'/genshincookbook'}
                projectDescription={"A webtool designed to assist in tracking the many recipes of Genshin Impact"}
                imgPath={'./images/genshin_smol_gif.gif'}
                imgUrl={'https://genshin-cookbook.com'}
            />
            <ProjectCard
                projectName={'DND SHEETS'}
                projectLink={'/dndsheets'}
                projectDescription={"Printer-friendly, A5 wide, DND Sheets I custom-designed for use in 5e"}
                imgPath={'./images/froggy_questboard.png'}
                imgUrl={null}
            />
        </div>
    );
};