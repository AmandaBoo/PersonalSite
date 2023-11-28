import {PageTitle} from "../../components/sharedPage/PageTitle";
import React, {useEffect, useState} from "react";
import {Checkbox, Chip, FormControlLabel, Switch, TextField, Typography} from "@mui/material";

export const KitfoxPage = () => {
    const [totalReviews, setTotalReviews] = useState(null)
    const [fullPrice, setFullPrice] = useState(null)
    const [hasPublisher, setHasPublisher] = useState(false)

    const [kitfoxEstimate, setKitfoxEstimate] = useState(0)

    const updateTotalReviews = (event) => {
        setTotalReviews(event.target.value)
    }
    const updateFullPrice = (event) => {
        setFullPrice(event.target.value)
    }

    const setPublisher = (event) => {
        setHasPublisher(event.target.checked)
    }

    useEffect(() => {
        let revenue = totalReviews * 12 * .7 * fullPrice
        if (hasPublisher) revenue = revenue * .6
        setKitfoxEstimate(Math.round(revenue/1000))
    }, [totalReviews, fullPrice, hasPublisher]);

    return (
        <div className={'fade-popup p-5 md:p-0'}>
            <PageTitle projectTitleName={'Kitfox Steam Revenue Calculation'}/>
            <div className={'max-w-article m-0-auto py-10 flex flex-col'}>
                <div className={'mb-5'}>
                    <Typography>Revenue in thousands (k)</Typography>
                    <Chip className={"min-w-[25%]"} label={kitfoxEstimate}/>
                </div>
                <div className={'mb-5'}>
                    <TextField id="filled-basic" label="Total Reviews" variant="outlined" value={totalReviews} onChange={updateTotalReviews} />
                </div>
                <div className={'mb-5'}>
                    <TextField id="filled-basic" label="Full Price" variant="outlined" value={fullPrice} onChange={updateFullPrice}/>
                </div>
                <div>
                    <Typography>Does this game have an external publisher?</Typography>
                    <Switch checked={hasPublisher} onChange={setPublisher}/>
                </div>
            </div>
        </div>
    );
}