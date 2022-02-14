import React from 'react'

export const GenshinCookbookReadmeComponent = ({}) => {
    return (
        <>
            {createTechnologyContent()}
            {createDataAnalyticsContent()}
        </>
    );
};

function createHeader2(headerTitle) {
    return  <h2 className={'font-serif border-b-2 border-white text-2xl my-[1rem]'}>{headerTitle}</h2>
}

function createTechnologyContent() {
    return (
        <>
            {createHeader2('Technology and Hosting')}
            <p className={'my-4'}>
                The site is written using Sass, and Javascript through the React framework, and served
                through Cloudflare.
            </p>
        </>
    );
}

function createDataAnalyticsContent() {
    return (
        <>
            {createHeader2('Local Storage')}
            <p className={'my-4'}>
                The core functionality of the site is not reliant on cookies,
                but instead, on local storage. Upon hitting the site for the first time, a user's local
                storage is set with multiple string representations of their in-progress recipes, inventory, mora, and
                settings.
            </p>
            <p className={'my-4'}>
                Existing users receive updates to their local storage whenever they refresh the site.
                This is done by checking their current local storage against the contents of master files and appending
                any
                missing information to their local storage values.
            </p>

            {createHeader2('Server Storage')}
            <p className={'my-4'}>
                Luckily, the majority of the site's data can be kept server-side
                (exm. images of recipes and ingredients, details on how each recipe is made, etc)
            </p>
            <p className={'my-4'}>
                Upon landing on the site, a user's local storage is scanned, updated if needed, and then used
                in conjunction with the server-side files to populate the UI and run simple calculations used in the
                cooking and crafting flows.
            </p>

            {createHeader2('Analytics')}
            <p className={'my-4'}>
                Cookies are only used for the purposes of viewing basic user information through Google Analytics
            </p>
        </>
    );
}