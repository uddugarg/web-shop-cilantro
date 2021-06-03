import { Button, Card, CardActions, CardContent, CardMedia, Typography } from '@material-ui/core'
import React from 'react'

import useStyles from './styles';

const CartItems = ({ item, onUpdateCartQty, onRemoveFromCart }) => {

    const classes = useStyles();

    return (
        <Card className={classes.cartItems}>
            <CardMedia className={classes.media} image={item.media.source} alt={item.name} />
            <CardContent className={classes.cardContent}>
                <Typography variant='h6'>{item.name}</Typography>
                <Typography variant='h6'>{item.line_total.formatted_with_symbol}</Typography>
            </CardContent>
            <CardActions className={classes.cardActions}>
                <div className={classes.buttons}>
                    <Button type='button' size='small' onClick={() => onUpdateCartQty(item.id, item.quantity - 1)}>-</Button>
                    <Typography variant='p'>{item.quantity}</Typography>
                    <Button type='button' size='small' onClick={() => onUpdateCartQty(item.id, item.quantity + 1)}>+</Button>
                </div>
                <Button type='button' variant='contained' color='secondary' onClick={() => onRemoveFromCart(item.id)}>Remove</Button>
            </CardActions>
        </Card>
    )
}

export default CartItems
