import { Card, CardActions, CardContent, CardMedia, IconButton, Typography, List, Slide, ListItem } from '@material-ui/core';
import { AddShoppingCart } from '@material-ui/icons';

import useStyles from './styles';

const Product = ({ product }) => {

    const classes = useStyles();

    return (
        <Card className={classes.root}>
            <CardMedia className={classes.media} image={product.media.source} title={product.name} />
            <CardContent>
                <div className={classes.cardContent}>
                    <Typography variant='h5' gutterBottom className={classes.title}>
                        {product.name}
                    </Typography>
                    <Typography variant='h5'>
                        {product.price.formatted_with_symbol}
                    </Typography>
                </div>
                <List dense={false} className={classes.description}>
                    <Slide direction='down' in mountOnEnter unmountOnExit>
                        <ListItem>
                            <Typography dangerouslySetInnerHTML={{ __html: product.description }} variant='body2' color='textSecondary' />
                        </ListItem>
                    </Slide>
                </List>
            </CardContent>
            <CardActions disableSpacing className={classes.cardActions}>
                <IconButton aria-label='Add to Cart'>
                    <AddShoppingCart />
                </IconButton>
            </CardActions>
        </Card>
    )
}

export default Product
