import React from "react";
import {PDFDownloadLink} from "./PDFDownloadLink";

export const InternalDownloadLinksContainer = () => {
    return (
        <div className={'text-center'}>
            <div>
                <p className={'my-[1em] font-serif text-3xl'}>Generic Sheets</p>
                <div className={'flex flex-wrap justify-center'}>
                    <PDFDownloadLink
                        pdfPath={'HalfCaster.pdf'}
                        displayName={'Half Caster'}
                    />
                    <PDFDownloadLink
                        pdfPath={'FullCaster.pdf'}
                        displayName={'Full Caster'}
                    />
                    <PDFDownloadLink
                        pdfPath={'Martial.pdf'}
                        displayName={'Martial'}
                    />
                </div>
            </div>
            <div>
                <p className={'my-[1em] font-serif text-3xl'}>Class Specific Sheets</p>
                <div className={'flex flex-wrap justify-center'}>
                    <PDFDownloadLink
                        pdfPath={'Artificer.pdf'}
                        displayName={'Artificer'}
                    />
                    <PDFDownloadLink
                        pdfPath={'Warlock.pdf'}
                        displayName={'Warlock'}
                    />
                </div>
            </div>
        </div>
    );
}