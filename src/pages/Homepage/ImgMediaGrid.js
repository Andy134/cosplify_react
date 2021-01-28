import { Grid } from '@material-ui/core';
import React, { useState, useEffect } from 'react';
import ImgMediaCard from "./ImgMediaCard";
import ImgMediaCard1 from "./ImgMediaCard1";
import {lstPostDefault} from "./../../data"

function ImgMediaCards(props) {

    var viewStyle = props.viewStyle;

    function displayMediaCard(post, index) {
        const MediaCardStyles = [
            <ImgMediaCard key={index} post={post} />,
            <ImgMediaCard1 key={index} post={post} />
        ]
        if (!viewStyle) {
            return MediaCardStyles[0];
        }
        return MediaCardStyles[viewStyle];
    }

    return (
        <Grid container spacing={2}>
            {
                lstPostDefault.map((post, index) => {
                    return displayMediaCard(post, index)
                })
            }
        </Grid>
    )
}

export default ImgMediaCards;