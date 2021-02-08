import { Grid } from '@material-ui/core';
import React from 'react';
import { lstPost } from "./../../data";
import ImgMediaCard from "./ImgMediaCard";
import ImgMediaCard1 from "./ImgMediaCard1";
import Grow from '@material-ui/core/Grow';

function ImgMediaCards(props) {

    const [checked, setChecked] = React.useState(true)
    var viewStyle = props.viewStyle;

    function displayMediaCard(post, index) {
        const MediaCardStyles = [
            <Grow in={checked}>
                <ImgMediaCard key={index} post={post} />
            </Grow>
            ,
            <Grow in={checked}>
                <ImgMediaCard1 key={index} post={post} />
            </Grow>
        ]
        if (!viewStyle) {
            return MediaCardStyles[0];
        }
        return MediaCardStyles[viewStyle];
    }

    return (
        <Grid container spacing={2}>
            {
                lstPost.map((post, index) => {
                    return displayMediaCard(post, index)
                })
            }
        </Grid>
    )
}

export default ImgMediaCards;