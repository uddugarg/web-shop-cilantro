import { AppBar, Badge, IconButton, Toolbar, Typography } from "@material-ui/core"
import { ShoppingCart } from "@material-ui/icons"
import { Link } from "react-router-dom";

import logo from '../../assets/logo.webp'

import useStyles from './styles';

const Header = () => {

    const classes = useStyles();

    return (
        <>
            <AppBar position='fixed' className={classes.appBar} color='inherit'>
                <Toolbar className={classes.toolbar}>
                    <Typography variant='h6' className={classes.title} color='inherit'>
                        <img src={logo} alt='commercejs' height='25px' class={classes.image} />
                    </Typography>
                    <Typography className={classes.menu}>
                        <Link to='/'>Home</Link>
                    </Typography>
                    <Typography className={classes.menu}>
                        <Link to='/products'>Shop</Link>
                    </Typography>
                    <Typography className={classes.menu}>
                        <Link to='/recipe'>Recipe</Link>
                    </Typography>
                    <div className={classes.grow} />
                    <div className={classes.button}>
                        <IconButton aria-label='Show Cart Items' color='inherit'>
                            <Badge badgeContent={2} color='secondary'>
                                <ShoppingCart />
                            </Badge>
                        </IconButton>
                    </div>
                </Toolbar>
            </AppBar>
        </>
    )
}

export default Header
