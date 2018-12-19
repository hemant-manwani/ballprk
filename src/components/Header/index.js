import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Badge from '@material-ui/core/Badge';
import AppBar from '@material-ui/core/AppBar';
import { compose, lifecycle } from 'recompose';
import Toolbar from '@material-ui/core/Toolbar';
import PersonIcon from '@material-ui/icons/Person';
import IconButton from '@material-ui/core/IconButton';
import { withStyles } from '@material-ui/core/styles';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import KeyboardBackspaceIcon from '@material-ui/icons/KeyboardBackspace';

import { fetchCart } from 'Redux/Actions/CartActions'

import styles from './styles';

const Header = ({
  title,
  classes,
  totalItems
}) => (
  <div className={classes.root}>
    <AppBar position="fixed">
      <Toolbar>
        <Link to='/products' className={classes.navLink}>
          <IconButton
            className={classes.menuButton}
            color="inherit"
            aria-label="Menu"
          >
            <KeyboardBackspaceIcon />
          </IconButton>
        </Link>
          
        <div className={classes.grow} />

        <Link to='/cart' className={classes.navLink}>
          <IconButton color="inherit">
            <Badge badgeContent={totalItems} color="secondary">
              <ShoppingCartIcon />
            </Badge>
          </IconButton>
        </Link>

        <IconButton color="inherit">
          <PersonIcon />
        </IconButton>

      </Toolbar>
    </AppBar>
  </div>
);

const mapStateToProps = ({
  cart: {
    items
  }
}) => {
  const totalItems = Object.keys(items).reduce(
    (acc, productId) => acc + items[productId].qty, 0
  )
  return {
    totalItems
  }
}

const mapDispatchToProps = {
  fetchCart
}

Header.propTypes = {
  title: PropTypes.string.isRequired,
  classes: PropTypes.object.isRequired,
};

const enhancer = compose(
  withStyles(styles),
  connect(mapStateToProps, mapDispatchToProps),
  lifecycle({
    componentDidMount() {
      this.props.fetchCart()
    }
  })
);

export default enhancer(Header);
