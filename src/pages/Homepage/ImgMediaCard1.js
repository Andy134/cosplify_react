import { Grid } from '@material-ui/core';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import IconButton from '@material-ui/core/IconButton';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import FavoriteIcon from '@material-ui/icons/Favorite';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import CardActionArea from '@material-ui/core/CardActionArea';
import ShareIcon from '@material-ui/icons/Share';
import React from 'react';
import { useHistory } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
    },
    details: {
        // display: 'flex',
        // flexDirection: 'column',
    },
    content: {
        // flex: '1 0 auto',
    },
    cover: {
        width: '45%',
    },
    cardIcon: {
        fontSize: "medium"
    },
    title: {
        lineHeight: "1.25rem",
        fontSize: "1rem",
        fontWeight: "600"
    },
    pullRight: {
        marginLeft: 'auto'
    }
}));

export default function ImgMediaCard(props) {

    const classes = useStyles();
    const history = useHistory();

    var { title, img, secondary, favourite } = props.post;

    function goTo() {
        history.push("/post/" + props.post.id)
    }

    return (
        <Grid item xs={12} className="link">
            <Card className={classes.root}>

                <CardMedia
                    className={classes.cover}
                    image={img}
                    title={title}
                />

                <div className={classes.details}>
                    <CardActionArea onClick={goTo} className={classes.content}>
                        <CardContent>
                            <Typography gutterBottom component="h6" variant="h6" className={classes.title}>
                                {title}
                            </Typography>
                            <Typography variant="body2" color="textSecondary" component="p">
                                {secondary}
                            </Typography>
                        </CardContent>
                    </CardActionArea>
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
                </div>

            </Card>
        </Grid>
    );
}
