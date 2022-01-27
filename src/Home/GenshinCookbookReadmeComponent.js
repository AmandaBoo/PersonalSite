import React from 'react'

export const    GenshinCookbookReadmeComponent = ({}) => {
    return (
        <>
            {createTechnologyContent()}
            {createDataAnalyticsContent()}
        </>
    );
};

function createHeader3(headerTitle) {
    return  <h3 className={'header'}>{headerTitle}</h3>
}

function createTechnologyContent() {
    return (
        <>
            {createHeader3('Technology and Hosting')}
            <p className={'project-text-line-height'}>
                The site is written using Sass, and Javascript through the React framework, and served
                through Cloudflare.
            </p>
        </>
    );
}

function createDataAnalyticsContent() {
    return (
        <>
            {createHeader3('Local Storage')}
            <p>
                The core functionality of the site is not reliant on cookies,
                but instead, on local storage. Upon hitting the site for the first time, a user's local
                storage is set with multiple string representations of their in-progress recipes, inventory, mora, and
                settings.
            </p>
            <p>
                Existing users receive updates to their local storage whenever they refresh the site.
                This is done by checking their current local storage against the contents of master files and appending
                any
                missing information to their local storage values.
            </p>

            {createHeader3('Server Storage')}
            <p>
                Luckily, the majority of the site's data can be kept server-side
                (exm. images of recipes and ingredients, details on how each recipe is made, etc)
            </p>
            <p>
                Upon landing on the site, a user's local storage is scanned, updated if needed, and then used
                in conjunction with the server-side files to populate the UI and run simple calculations used in the
                cooking and crafting flows.
            </p>

            {createHeader3('Analytics')}
            <p>
                Cookies are only used for the purposes of viewing basic user information through Google Analytics
            </p>
        </>
    );
}