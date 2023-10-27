import React from 'react';
import {PageTitle} from "../../components/sharedPage/PageTitle";
import {PokemonProjectImagesContainer} from "./components/PokemonProjectImagesContainer";
import {Article} from "../../components/sharedPage/Article";
import {background, overview} from "./consts";
import {ImageDownloadLink} from "./components/ImageDownloadLink";

export const PokemonPage = () => {
    return (
        <div className={'fade-popup p-5 md:p-0'}>
            <PageTitle projectTitleName={'Pokemon Type Chart'}/>
            <PokemonProjectImagesContainer/>
            <ImageDownloadLink imagePath={'./images/pokemon/pokemonChart.png'} displayName={'Type Chart'}/>
            <div className={'max-w-article text-left m-0-auto py-10'}>
                <Article title={'Overview'} body={overview}/>
                <Article title={'Background'} body={background}/>
            </div>
        </div>
    );
}