import React from 'react';

export const DNDProject = ({}) => {

    return (
        <div className={'fade-popup'}>
            <div className={'mid-text link-spacing project-header'}>DND SHEETS</div>

            <div className={'padding-top'}>
                {createDownloadLink('Artificer', 'Artificer.pdf')}
                {createDownloadLink('Half Caster', 'HalfCaster.pdf')}
                {createDownloadLink('Full Caster', 'FullCaster.pdf')}
                {createDownloadLink('Martial', 'Martial.pdf')}
                {createDownloadLink('Warlock', 'Warlock.pdf')}
            </div>
        </div>
    );
}

function createDownloadLink(displayName, pdfPath) {
    return (
        <a className={'link'}
           target={'_blank'}
           href={"./pdfs/" + pdfPath}
           download
        >{displayName}</a>
    );
}