import { Avatar, Card, CardContent, CardMedia, Divider, Grid, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Sidebar from "./../../components/Sidebar";
import React from 'react';
import { lstPost } from './../../data'

const useStyles = makeStyles((theme) => ({
    category: {
        color: 'orangered'
    },
    smallAvatar: {
        width: theme.spacing(3),
        height: theme.spacing(3),
    }
}));

function Post() {
    return (
        <Grid container spacing={2}>
            <Grid item md={9} xs={12}>
                <PostHeader />
            </Grid>
            <Grid item md={3} xs={12} >
                <Sidebar />
            </Grid>
        </Grid>
    )
}

export default Post;

function PostHeader() {
    const classes = useStyles();
    return (
        <Grid container spacing={2}>
            <Grid item xs={12}>
                <Card elevation={1}>
                    <CardMedia
                        component="img"
                        alt={lstPost[0].title}
                        image={lstPost[0].img}
                        title={lstPost[0].title}
                        height={300}
                    />
                    <CardContent>
                        <Typography variant="subtitle1" className={classes.category}>Category</Typography>
                        <Typography variant="h5">{lstPost[0].title}</Typography>
                        <br />
                        <Avatar alt="Remy Sharp" className={classes.smallAvatar}></Avatar>
                    </CardContent>
                </Card>
            </Grid>

        </Grid>)
}