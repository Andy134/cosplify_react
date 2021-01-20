import { Container, Grid } from '@material-ui/core';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { makeStyles } from '@material-ui/core/styles';
import React from 'react';
import ImgMediaCard from "./ImgMediaCard";

const useStyles = makeStyles((theme) => ({
    root: {
        marginTop: '0.5rem'
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    title: {
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    },
    control: {
        padding: theme.spacing(2),
    }
}));

const lstPost = [
    {
        title: "Lorem Ipsum is simply dummy",
        img: "https://i.pinimg.com/564x/a3/12/8d/a3128d4ad2eb6a7d117d65f71afb3e78.jpg",
        secondary: "Contrary to popular belief, Lorem Ipsum is not simply random text.",
    },
    {
        title: "Lorem Ipsum is simply dummy",
        img: "https://i.pinimg.com/564x/5d/5b/26/5d5b263d52e8d47023e9e3bf5f1be452.jpg",
        secondary: "Contrary to popular belief, Lorem Ipsum is not simply random text.",
    },
    {
        title: "Lorem Ipsum is simply dummy",
        img: "https://i.pinimg.com/564x/84/13/d1/8413d12235faeb3775df846cf7303dca.jpg",
        secondary: "Contrary to popular belief, Lorem Ipsum is not simply random text.",
    },
    {
        title: "Lorem Ipsum is simply dummy",
        img: "https://i.pinimg.com/564x/03/9a/45/039a4591e0e59dd7b5da0669f9424de9.jpg",
        secondary: "Contrary to popular belief, Lorem Ipsum is not simply random text.",
    }
    ,
    {
        title: "Lorem Ipsum is simply dummy",
        img: "https://i.pinimg.com/564x/98/a0/a3/98a0a37762fc82e7c8de7fa3dca28b9a.jpg",
        secondary: "Contrary to popular belief, Lorem Ipsum is not simply random text.",
    }
    ,
    {
        title: "Lorem Ipsum is simply dummy",
        img: "https://www.rolecostume.com/blog/wp-content/uploads/2015/06/gq0526ww06s.jpg",
        secondary: "Contrary to popular belief, Lorem Ipsum is not simply random text.",
    }
]

function Homepage() {
    const classes = useStyles();

    return (
        <Container maxWidth="lg">
            <Grid container spacing={2} className={classes.root}>
                {
                    lstPost.map((post, index) => {
                        return <ImgMediaCard ket={index} post={post}/>
                    })
                }
            </Grid>
        </Container>
    )
}

export default Homepage;