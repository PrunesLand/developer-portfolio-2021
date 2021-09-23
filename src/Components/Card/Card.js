import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { styles } from './styles';

export default function ProjectCard({ title, description, link, image }) {

    const classes = styles()

    return (
        <div className={classes.root}>

            <Card sx={{ maxWidth: 300 }} >
                <CardActionArea href={link} target='_blank' className={classes.container}>
                    <CardMedia
                        component="img"
                        height="145"
                        image={image}
                        alt={title}
                    />
                    <CardContent className={classes.content}>
                        <Typography gutterBottom variant="h5" className={classes.title}>
                            {title}
                        </Typography>
                        <Typography variant="body2" color="text.secondary" className={classes.description}>
                            {description}
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
        </div>
    );
}