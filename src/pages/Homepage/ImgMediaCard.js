import { Grid } from '@material-ui/core';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import IconButton from '@material-ui/core/IconButton';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import FavoriteIcon from '@material-ui/icons/Favorite';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import ShareIcon from '@material-ui/icons/Share';
import React from 'react';
import { useHistory } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
    pullRight: {
        marginLeft: 'auto'
    },
    cardIcon: {
        fontSize: "medium"
    },
    title: {
        lineHeight: "1.25rem",
        fontSize: "1rem",
        fontWeight: "600"
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
        <Grid item md={4} xs={6} className="link">
            <Card >
                <CardActionArea onClick={goTo}>
                    <CardMedia
                        component="img"
                        alt={title}
                        height="200"
                        image={img}
                        title={title}
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h6" component="h6" className={classes.title}>
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
            </Card>
        </Grid>
    );
}
