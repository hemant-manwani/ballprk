import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Grid from '@material-ui/core/Grid';
import { compose, lifecycle } from 'recompose';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';

import {
  fetchCart,
  addItemToCart,
  removeItemFromCart
} from 'Redux/Actions/CartActions';

import CartItem from './components/CartItem';

import styles from './styles'

const Cart = ({
  items,
  classes,
}) => (
  <Grid container
    className={classes.container}
  >
  <Grid item xs={12}>
    <Typography variant='h5'>
      Cart
    </Typography>
  </Grid>  
    {
      Object.keys(items).map(
        itemId => items[itemId].qty
          ? (
            <Grid
              className={classes.cartItem}
              item xs={12} md={6} key={itemId}
            >
              <CartItem item={items[itemId]}/>
            </Grid>  
          ) : null
      )
    }
  </Grid>
);

Cart.propTypes = {
  fetched: PropTypes.bool.isRequired,
  items: PropTypes.object.isRequired,
  classes: PropTypes.object.isRequired,
};

const mapStateToProps = ({
  cart: {
    items,
    fetched,
  },
}) => ({
  items,
  fetched
});

const mapDispatchToProps = {
  fetchCart,
  addItemToCart,
  removeItemFromCart
};

const enhancer = compose(
  withStyles(styles),
  connect(mapStateToProps, mapDispatchToProps),
  lifecycle({
    componentDidMount() {
      !this.props.fetched && this.props.fetchCart()
    }
  })
);

export default enhancer(Cart);
