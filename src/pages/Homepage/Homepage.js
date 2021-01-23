import { CardHeader, Container, Grid, IconButton, Paper, Tab, Tabs, Typography } from '@material-ui/core';
import Card from '@material-ui/core/Card';
import { makeStyles } from '@material-ui/core/styles';
import { ArrowRight, ArrowRightSharp, KeyboardArrowRight } from '@material-ui/icons';
import React from 'react';
import ImgMediaCard from "./ImgMediaCard";

const useStyles = makeStyles(() => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap'
    },
    typo: {
        padding: "1rem",
        fontSize: "1.2rem",
        fontWeight: "600",
    },
    pullRight: {
        marginLeft: 'auto'
    }
}));

const lstPost = [
    {
        id: 1,
        title: "Lorem Ipsum is simply dummy",
        img: "https://i.pinimg.com/564x/a3/12/8d/a3128d4ad2eb6a7d117d65f71afb3e78.jpg",
        secondary: "Contrary to popular belief, Lorem Ipsum is not simply random text.",
        favourite: true
    },
    {
        id: 2,
        title: "Lorem Ipsum is simply dummy",
        img: "https://i.pinimg.com/564x/5d/5b/26/5d5b263d52e8d47023e9e3bf5f1be452.jpg",
        secondary: "Contrary to popular belief, Lorem Ipsum is not simply random text.",
    },
    {
        id: 3,
        title: "Lorem Ipsum is simply dummy",
        img: "https://i.pinimg.com/564x/84/13/d1/8413d12235faeb3775df846cf7303dca.jpg",
        secondary: "Contrary to popular belief, Lorem Ipsum is not simply random text.",
    },
    {
        id: 4,
        title: "Lorem Ipsum is simply dummy",
        img: "https://i.pinimg.com/564x/03/9a/45/039a4591e0e59dd7b5da0669f9424de9.jpg",
        secondary: "Contrary to popular belief, Lorem Ipsum is not simply random text.",
    }
    ,
    {
        id: 5,
        title: "Lorem Ipsum is simply dummy",
        img: "https://i.pinimg.com/564x/98/a0/a3/98a0a37762fc82e7c8de7fa3dca28b9a.jpg",
        secondary: "Contrary to popular belief, Lorem Ipsum is not simply random text.",
    }
    ,
    {
        id: 6,
        title: "Lorem Ipsum is simply dummy",
        img: "https://i.pinimg.com/236x/4e/f8/d2/4ef8d23f31a35ea4405a633febc071e5.jpg",
        secondary: "Contrary to popular belief, Lorem Ipsum is not simply random text.",
    },
    {
        id: 7,
        title: "Lorem Ipsum is simply dummy",
        img: "https://i.pinimg.com/564x/94/3f/3d/943f3d398165306173ba9f449b3b3211.jpg",
        secondary: "Contrary to popular belief, Lorem Ipsum is not simply random text.",
    },
    {
        id: 8,
        title: "Lorem Ipsum is simply dummy",
        img: "https://i.pinimg.com/564x/8b/e5/4c/8be54c9b2e274be5b8d6d9724f6fa911.jpg",
        secondary: "Contrary to popular belief, Lorem Ipsum is not simply random text.",
    }

]

const lstPostDefault = [
    {
        id: 1,
        title: "Lorem Ipsum is simply dummy",
        img: "https://i.pinimg.com/564x/66/72/02/66720279ae45939c7866b5797a0b8611.jpg",
        secondary: "Contrary to popular belief, Lorem Ipsum is not simply random text.",
    },
    {
        id: 2,
        title: "Lorem Ipsum is simply dummy",
        img: "https://i.pinimg.com/564x/66/72/02/66720279ae45939c7866b5797a0b8611.jpg",
        secondary: "Contrary to popular belief, Lorem Ipsum is not simply random text.",
    },
    {
        id: 3,
        title: "Lorem Ipsum is simply dummy",
        img: "https://i.pinimg.com/564x/66/72/02/66720279ae45939c7866b5797a0b8611.jpg",
        secondary: "Contrary to popular belief, Lorem Ipsum is not simply random text.",
    },
    {
        id: 4,
        title: "Lorem Ipsum is simply dummy",
        img: "https://i.pinimg.com/564x/66/72/02/66720279ae45939c7866b5797a0b8611.jpg",
        secondary: "Contrary to popular belief, Lorem Ipsum is not simply random text.",
    }
    ,
    {
        id: 5,
        title: "Lorem Ipsum is simply dummy",
        img: "https://i.pinimg.com/564x/66/72/02/66720279ae45939c7866b5797a0b8611.jpg",
        secondary: "Contrary to popular belief, Lorem Ipsum is not simply random text.",
    }
    ,
    {
        id: 6,
        title: "Lorem Ipsum is simply dummy",
        img: "https://i.pinimg.com/564x/66/72/02/66720279ae45939c7866b5797a0b8611.jpg",
        secondary: "Contrary to popular belief, Lorem Ipsum is not simply random text.",
    },
    {
        id: 7,
        title: "Lorem Ipsum is simply dummy",
        img: "https://i.pinimg.com/564x/66/72/02/66720279ae45939c7866b5797a0b8611.jpg",
        secondary: "Contrary to popular belief, Lorem Ipsum is not simply random text.",
    },
    {
        id: 8,
        title: "Lorem Ipsum is simply dummy",
        img: "https://i.pinimg.com/564x/66/72/02/66720279ae45939c7866b5797a0b8611.jpg",
        secondary: "Contrary to popular belief, Lorem Ipsum is not simply random text.",
    }

]

function Homepage() {
    const classes = useStyles();
    return (
        <Container maxWidth="lg">
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <Paper className={classes.root}>
                        <Typography
                            indicatorColor="primary"
                            textColor="primary"
                            aria-label="disabled tabs example"
                            className={classes.typo}
                        >
                            Recently
                        </Typography>

                        <IconButton aria-label="delete" disabled color="primary" className={classes.pullRight}>
                            <KeyboardArrowRight fontSize="large" />
                        </IconButton>
                    </Paper>
                </Grid>
                {
                    lstPostDefault.map((post, index) => {
                        return <ImgMediaCard key={index} post={post} />
                    })
                }
            </Grid>
        </Container>
    )
}

export default Homepage;