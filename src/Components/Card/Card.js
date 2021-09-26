import * as React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import { Typography } from '@material-ui/core';
import CardActionArea from '@material-ui/core/CardActionArea';
import { styles } from './styles';

export default function ProjectCard({ title, description, link, image }) {

    const classes = styles()

    return (
        <div className={classes.root}>

            <Card sx={{ maxWidth: 300 }} >
                <CardActionArea href={link} target='_blank' className={classes.container}>
                    <CardMedia
                        component="img"
                        height="160"
                        image={image}
                        alt={title}
                    />
                    <CardContent className={classes.content}>
                        <Typography gutterBottom variant="h5" component="h2" className={classes.title}>
                            {title}
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p" className={classes.description}>
                            {description}
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
        </div>
    );
}