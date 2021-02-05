import { Avatar, Card, CardContent, CardMedia, Divider, Grid, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Sidebar from "./../../components/Sidebar";
import React from 'react';
import { lstPost } from './../../data'

const useStyles = makeStyles((theme) => ({
    category: {
        color: 'orangered',
        cursor: 'pointer',
        font: '14px'
    },
    smallAvatar: {
        width: theme.spacing(3),
        height: theme.spacing(3),
    },
    secondary: {
        display: 'flex'
    },
    time: {
        marginLeft: 'auto',
        color: 'grey'
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
                        <div className={classes.secondary}>
                            <Avatar alt="Remy Sharp" className={classes.smallAvatar}></Avatar>
                            <Typography variant="body2" className={classes.time}>12/12/2021</Typography>
                        </div>
                    </CardContent>
                </Card>
            </Grid>
            <Grid item xs={12}>
                <Card elevation={1}>
                    <CardContent>
                        <Typography>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In cursus et augue at dignissim. Vivamus euismod congue porttitor. Ut consectetur sem nec tincidunt lacinia. Vestibulum nec nibh ornare, rhoncus neque eu, dictum nibh. Aenean in sapien auctor, placerat lorem et, molestie odio. Quisque placerat magna ac molestie sodales. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nullam vitae quam elementum justo maximus efficitur. Nunc malesuada vehicula venenatis. Pellentesque eget ex et eros porta luctus. Morbi id nibh ex. Vestibulum in purus placerat, feugiat ligula ac, viverra lacus. Phasellus bibendum sit amet dui quis maximus.

                            Curabitur nec lobortis odio. Pellentesque mattis luctus ligula. Nullam eget mauris sem. Donec consectetur turpis quis metus malesuada sodales. Curabitur luctus sagittis purus, id vehicula diam feugiat id. Sed porttitor nibh non eros aliquam, in dapibus eros feugiat. Phasellus consequat erat metus, at fringilla odio commodo in. Nunc faucibus at erat nec viverra. Curabitur dignissim rutrum velit vel porta. Aliquam congue, purus at posuere congue, diam dolor vulputate elit, vitae porta ligula tortor et quam. Nulla facilisi.

                            Quisque rhoncus volutpat massa vel pretium. Proin malesuada dolor sed consectetur fringilla. Nulla facilisi. Nunc varius neque vulputate nisi tincidunt, quis congue odio maximus. Morbi lorem felis, pharetra pretium nunc et, porta egestas neque. Donec neque lorem, malesuada ac pellentesque non, ornare ac tellus. Vivamus volutpat massa nisi, in congue dui bibendum vitae. Nulla at lorem urna. Cras bibendum, leo at iaculis venenatis, turpis risus pretium ex, et convallis arcu lectus gravida augue. Sed volutpat tellus sit amet rhoncus ornare. Fusce nec est ipsum. Etiam sagittis tortor ut lectus tempor congue. Fusce vel volutpat est.

                            Nulla scelerisque ultrices ipsum, sit amet eleifend mauris tincidunt eget. Etiam sed justo imperdiet, ullamcorper sapien in, vulputate felis. Vivamus arcu justo, lacinia sit amet ipsum a, cursus commodo metus. Pellentesque consequat purus eu metus tincidunt, id faucibus eros fermentum. Sed nec dapibus quam. Aenean dapibus sit amet tellus eu laoreet. Proin ornare, lorem a fermentum egestas, lorem eros dictum enim, et malesuada nisl velit eu diam. Aenean non efficitur ipsum, quis convallis dui. Cras et lacinia lacus, ut congue nulla. Proin in pharetra erat. In in sapien et erat suscipit faucibus. Suspendisse potenti.

                            Vivamus porttitor finibus iaculis. Mauris et risus hendrerit, venenatis ex ut, fringilla nunc. Suspendisse commodo sodales tellus, id mattis nisl pulvinar nec. Ut erat odio, egestas eu ultricies nec, malesuada in nulla. Curabitur vel rutrum sem. Sed luctus convallis libero malesuada tincidunt. Praesent a consequat lectus. Proin ex mi, tincidunt nec sem ut, aliquet mollis orci.

                            Integer porta pretium ante. Donec semper sit amet justo id interdum. Cras ultricies arcu metus, et ornare leo laoreet a. Aliquam ut ligula eu nisi pellentesque tincidunt. Sed mattis arcu nec risus vehicula, quis convallis leo consectetur. Aenean bibendum, tellus id vehicula varius, dolor diam commodo augue, vestibulum pellentesque sem leo et diam. Praesent nec odio ut sem mollis sagittis. Donec a mollis augue, sit amet gravida dolor. Mauris id lectus efficitur, venenatis odio id, pulvinar odio.

                            Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Proin facilisis lorem a velit suscipit, sed molestie diam fermentum. Etiam dui urna, ullamcorper eu fringilla ac, mollis sed tellus. Integer a leo suscipit mi commodo vehicula non a purus. Vivamus malesuada tempus lacus et blandit. Nunc ornare aliquam egestas. Cras eget quam turpis. Duis aliquet convallis dui, sed accumsan nisl luctus non. Etiam mattis tristique nibh, non pharetra nibh malesuada quis. Nunc mi velit, varius ac elit id, condimentum tempus tortor. Duis sed quam nec urna rhoncus euismod. Suspendisse feugiat varius purus, at rutrum nibh consectetur sit amet. In dictum tincidunt arcu. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nunc sollicitudin finibus massa ac pulvinar. Maecenas interdum molestie lorem ultricies ornare.

                            Integer dictum odio eu leo sagittis porttitor. Vivamus placerat leo vel nisi tempus dapibus. Ut quis justo erat. Donec eget tortor et est dictum dapibus quis in ipsum. Fusce posuere urna ex, nec iaculis metus semper vel. Duis pharetra pellentesque gravida. Aenean id magna sed nisi auctor egestas. Phasellus sodales nisi venenatis, vehicula tellus eu, aliquet nisl. Curabitur gravida auctor eros non gravida. Nam malesuada erat id mauris faucibus, at iaculis arcu sagittis.
                        </Typography>
                    </CardContent>
                </Card>
            </Grid>
        </Grid>
    )
}