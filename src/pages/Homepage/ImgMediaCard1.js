import { Grid } from '@material-ui/core';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import IconButton from '@material-ui/core/IconButton';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import SkipNextIcon from '@material-ui/icons/SkipNext';
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
import React from 'react';
import { useHistory } from 'react-router-dom';
import CardActions from '@material-ui/core/CardActions';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import MoreVertIcon from '@material-ui/icons/MoreVert';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
    },
    details: {
        display: 'flex',
        flexDirection: 'column',
    },
    content: {
        flex: '1 0 auto',
    },
    cover: {
        width: 151,
    },
    controls: {
        display: 'flex',
        alignItems: 'center',
        paddingLeft: theme.spacing(1),
        paddingBottom: theme.spacing(1),
    },
    playIcon: {
        height: 38,
        width: 38,
    },
    cardIcon: {
        fontSize: "medium"
    },
}));

export default function ImgMediaCard(props) {

    const classes = useStyles();
    const theme = useTheme();
    const history = useHistory();

    var { title, img, secondary, favourite } = props.post;

    function goTo() {
        history.push("/post/" + props.post.id)
    }

    return (
        <Grid item xs={12}>
            <Card className={classes.root}>

                <CardMedia
                    className={classes.cover}
                    image={img}
                    title={title}
                />

                <div className={classes.details}>
                    <CardContent className={classes.content}>
                        <Typography component="h5" variant="h5">
                            {title}
                        </Typography>
                        <Typography variant="subtitle1" color="textSecondary">
                            {secondary}
                        </Typography>
                    </CardContent>
                    <div className={classes.controls}>

                        <CardActions disableSpacing>
                            <IconButton aria-label="add to favorites">
                                <FavoriteIcon className={classes.cardIcon} />
                            </IconButton>
                            <IconButton aria-label="share">
                                <ShareIcon className={classes.cardIcon} />
                            </IconButton>
                            <IconButton aria-label="settings" className={classes.pullRight}>
                                <MoreVertIcon className={classes.cardIcon} />
                            </IconButton>
                        </CardActions>

                        {/* <IconButton aria-label="previous">
                            {theme.direction === 'rtl' ? <SkipNextIcon /> : <SkipPreviousIcon />}
                        </IconButton>
                        <IconButton aria-label="play/pause">
                            <PlayArrowIcon className={classes.playIcon} />
                        </IconButton>
                        <IconButton aria-label="next">
                            {theme.direction === 'rtl' ? <SkipPreviousIcon /> : <SkipNextIcon />}
                        </IconButton> */}
                    </div>
                </div>

            </Card>
        </Grid>
    );
}
