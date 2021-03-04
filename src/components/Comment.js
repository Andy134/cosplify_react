import { Card, CardContent, Grid, Typography } from "@material-ui/core";

export default function Comment() {
    return (
        <Grid container spacing={2}>
            <Grid item xs={12}>
                <Card elevation={1}>
                    <CardContent>
                        <Typography
                            // indicatorColor="primary"
                            // textColor="primary"
                            aria-label="disabled tabs example"
                            variant="h6"
                        >
                            Comment(s)
                        </Typography>
                    </CardContent>
                </Card>
            </Grid>
        </Grid>
    )
}