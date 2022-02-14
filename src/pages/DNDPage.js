import React from 'react';
import {ProjectTitle} from "../components/ProjectTitle";
import {DownloadLink} from "../components/DownloadLink";

export const DNDPage = ({}) => {

    return (
        <div className={'fade-popup p-5 md:p-0'}>
            <ProjectTitle
                projectTitleName={'DND SHEETS'}
            />
            {createProjectImages()}
            <div className={'max-w-article text-left m-0-auto py-10'}>
                {createOverview()}
                {createMyStory()}
                {createDownloadLinks()}
            </div>
        </div>
    );
}

function createProjectImages() {
    return (
        <div className={'flex justify-center py-8'}>
            {createProjectImg('./images/fullStatSheet.jpg', 'Image of first two stat pages')}
            {createProjectImg('./images/statSheet1.jpg', 'Image of first second stat page')}
        </div>
    );
}

function createOverview() {
    return (
        <div>
            {createTitle('OVERVIEW')}
            <p className={'my-4'}>
                At the bottom of this page you can find printer-friendly, DND sheets for 5E, that I've
                hand-designed using Figma and Goodnotes. While the offerings may not encompass all of the canonical
                classes of 5e, I'm actively working towards doing so~
            </p>
            <p className={'my-4'}>
                Feel free to print them out for physical use, or copy them over to
                your favorite tablet notebook app to begin scribbling!
            </p>
        </div>
    );
}

function createMyStory() {
    return (
      <div>
          {createTitle('MY STORY')}
          <p className={'my-4'}>
              DND Sheets was a project that sprung to life through no unusual circumstances for me.
              While I had been very happy with a handful of custom
              sheets I had found on Dungeon Masters Guild and other small businesses over the last few years,
              I eventually realized that I was hacking around them to accommodate my needs,
              whether it be scribbling notes in the margins of the sheets, grabbing blank sheets of paper to begin keeping
              track of additional things, or not writing anything down, and instead keeping the relevant books and
              google tabs open on my laptop to reference mid-game.
          </p>
          <p className={'my-4'}>
              The chaos of trying to figure out what I could or couldn't do with my character resulted in me spending less time
              paying attention to the game and more time reading chicken scratch and digging through books.
          </p>
          <p className={'my-4'}>
              My goal with these sheets is that I hope they can allow more people to engage with their game, as most everything that is
              needed can be easily found and referenced within a few page flips.
          </p>
      </div>
    );
}

function createDownloadLinks() {
    return (
        <div className={'text-center'}>
            <div>
                <p className={'my-[1em] font-serif text-white text-3xl'}>Generic Sheets</p>
                <DownloadLink
                    pdfPath={'HalfCaster.pdf'}
                    displayName={'Half Caster'}
                />
                <DownloadLink
                    pdfPath={'FullCaster.pdf'}
                    displayName={'Full Caster'}
                />
                <DownloadLink
                    pdfPath={'Martial.pdf'}
                    displayName={'Martial'}
                />
            </div>
            <div>
                <p className={'my-[1em] font-serif text-white text-3xl'}>Class Specific Sheets</p>
                <DownloadLink
                    pdfPath={'Artificer.pdf'}
                    displayName={'Artificer'}
                />
                <DownloadLink
                    pdfPath={'Warlock.pdf'}
                    displayName={'Warlock'}
                />
            </div>
        </div>
    );
}

function createProjectImg(src, alt) {
    return (
        <div className={'min-w-[33%] w-1/3 px-2'}>
            <img
                src={src}
                alt={alt}
            />
        </div>
    );
}

function createTitle(title) {
    return (
        <p className={'text-3xl my-[1em] font-serif border-b-[3px] border-white'}>{title}</p>
    );
}