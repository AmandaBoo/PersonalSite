import React from "react";

export const GenshinProjectGifsContainer = () => {
    return (
        <div className={'flex justify-center md:px-16 py-8'}>
            <div className={'max-w-[1500px]'}>
                <a className={'thumbnail-link'} href={'https://genshin-cookbook.com'} target="_blank">
                    <img
                        alt={'genshin-screenshot'}
                        src={'./images/genshin/genshin_gif.gif'}
                    />
                </a>
            </div>
        </div>
    );
}