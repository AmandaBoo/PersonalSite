import React from "react";

export const PokemonProjectImagesContainer = () => {
    return (
        <div className={'flex justify-center md:px-8 py-8'}>
            <div className={'md:w-1/2'}>
                <img
                    src={'./images/pokemon/pokemonChart.jpeg'}
                    alt={'FF14 Auto Crafter Script'}
                />
                <p className={'text-center italic'}>
                    Use the link below to download a higher quality version of the type chart
                </p>
            </div>
        </div>
    );
}