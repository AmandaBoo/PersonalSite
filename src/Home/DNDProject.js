import React from 'react';

export const DNDProject = ({}) => {

    return (
        <div className={'fade-popup'}>
            <div className={'mid-text link-spacing project-header mobile-padding-none'}>DND SHEETS</div>
            {createProjectImages()}
            {createOverview()}
            {createMyStory()}
            {createDownloadLinks()}
        </div>
    );
}

function createProjectImages() {
    return (
        <div className={'flex-center mobile-display-block'}>
            <img
                className={'dnd-sheet-img padding-top padding-right mobile-padding-right-none'}
                src={'./images/fullStatSheet.jpg'}
                alt={'dnd sheet stats'}
            />
            <img
                className={'dnd-sheet-img padding-top'}
                src={'./images/statSheet1.jpg'}
                alt={'dnd sheet stats'}
            />
        </div>
    );
}

function createOverview() {
    return (
        <div className={'body-text'}>
            <p className={'project-text-header divider'}>OVERVIEW</p>
            <p>
                At the bottom of this page you can find printer-friendly, DND sheets for 5E, that I've
                hand-designed using Figma and Goodnotes. While the offerings may not encompass all of the canonical
                classes of 5e, I'm actively working towards doing so~
            </p>
            <p>
                Feel free to print them out for physical use, or copy them over to
                your favorite tablet notebook app to begin scribbling!
            </p>
        </div>
    );
}

function createMyStory() {
    return (
      <div className={'body-text'}>
          <p className={'project-text-header divider'}>MY STORY</p>
          <p>
              DND Sheets was a project that sprung to life through no unusual circumstances for me.
              While I had been very happy with a handful of custom
              sheets I had found on Dungeon Masters Guild and other small businesses over the last few years,
              I eventually realized that I was hacking around them to accommodate my needs,
              whether it be scribbling notes in the margins of the sheets, grabbing blank sheets of paper to begin keeping
              track of additional things, or not writing anything down, and instead keeping the relevant books and
              google tabs open on my laptop to reference mid-game.
          </p>
          <p>
              The chaos of trying to figure out what I could or couldn't do with my character resulted in me spending less time
              paying attention to the game and more time reading chicken scratch and digging through books.
          </p>
          <p>
              My goal with these sheets is that I hope they can allow more people to engage with their game, as most everything that is
              needed can be easily found and referenced within a few page flips.
          </p>
      </div>
    );
}

function createDownloadLinks() {
    return (
        <>
            <div className={'padding-top'}>
                <p className={'project-text-header'}>Generic Sheets</p>
                {createDownloadLink('Half Caster', 'HalfCaster.pdf')}
                {createDownloadLink('Full Caster', 'FullCaster.pdf')}
                {createDownloadLink('Martial', 'Martial.pdf')}
            </div>
            <div>
                <p className={'project-text-header'}>Class Specific Sheets</p>
                {createDownloadLink('Artificer', 'Artificer.pdf')}
                {createDownloadLink('Warlock', 'Warlock.pdf')}
            </div>
        </>
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