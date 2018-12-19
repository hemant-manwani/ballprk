import React from 'react';
import PropTypes from 'prop-types';
import { compose } from 'recompose';
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';

import styles from './styles'

import {
  addItemToCart,
} from 'Redux/Actions/CartActions';

const ProductListItem = ({
  item,
  classes,
  addItemToCart
}) => (
  <div className={classes.root}>
    <img alt={item.name} src={item.image} className={classes.image}/>
    <div className={classes.item}>
      <div className={classes.details}>
        <Typography className={classes.price}>
          {`${item.currency} ${item.price}`}
        </Typography>
        <Typography className={classes.name}>
          {item.name}
        </Typography>
      </div>
      <Button
        size='small'
        color='primary'
        variant='contained'
        onClick={() => addItemToCart({ item })}
        classes={
          {
            root: classes.buyBtn
          }
        }
      >
        Buy
      </Button>
    </div>
  </div>
);

ProductListItem.propTypes = {
  item: PropTypes.object.isRequired,
  classes: PropTypes.object.isRequired
};

const mapDispatchToProps = {
  addItemToCart,
};

const enhancer = compose(
  withStyles(styles),
  connect(null, mapDispatchToProps),
);

export default enhancer(ProductListItem);
