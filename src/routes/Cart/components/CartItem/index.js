import React from 'react';
import PropTypes from 'prop-types';
import { compose} from 'recompose';
import { connect } from 'react-redux';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import CloseIcon from '@material-ui/icons/Close';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';

import styles from './styles'

import {
  addItemToCart,
  removeItemFromCart
} from 'Redux/Actions/CartActions';

const CartItem = ({
  item,
  classes,
  addItemToCart,
  removeItemFromCart
}) => (
  <Paper className={classes.root}>
    <CloseIcon
      className={classes.removeItem}
      onClick={() => removeItemFromCart({ item, remove: true })}
    />
    <Grid container>
      <Grid item xs={6} className={classes.imageContainer}>
        <img alt={item.name} src={item.image} className={classes.image}/>
      </Grid>  
      <Grid item xs={6} className={classes.cartDetails}>
        <Typography
          className={classes.name}
        >
          {item.name}
        </Typography>

        <Typography
          className={classes.price}
        >
          {`${item.currency} ${item.price}`}
        </Typography>

        <div className={classes.buttons}>
          <Button
            color='secondary'
            variant='contained'
            disabled={item.qty < 2}
            className={classes.actionBtn}
            onClick={() => removeItemFromCart({ item })}
          >
            -
          </Button>

          <Typography className={classes.qty}>
            {item.qty}
          </Typography>  
          
          <Button
            color='secondary'
            variant='contained'
            className={classes.actionBtn}
            onClick={() => addItemToCart({ item })}
          >
            +
          </Button>
        </div>  
      </Grid>
    </Grid>  
  </Paper>
);

CartItem.propTypes = {
  item: PropTypes.object.isRequired,
  classes: PropTypes.object.isRequired
};

const mapDispatchToProps = {
  addItemToCart,
  removeItemFromCart,
};

const enhancer = compose(
  withStyles(styles),
  connect(null, mapDispatchToProps),
);

export default enhancer(CartItem);
