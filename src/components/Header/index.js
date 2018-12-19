import React from 'react';
import PropTypes from 'prop-types';
import { compose } from 'recompose';
import Badge from '@material-ui/core/Badge';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import PersonIcon from '@material-ui/icons/Person';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import { withStyles } from '@material-ui/core/styles';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import KeyboardBackspaceIcon from '@material-ui/icons/KeyboardBackspace';

import styles from './styles';

const Header = ({
  title,
  classes,
}) => (
  <div className={classes.root}>
    <AppBar position="fixed">
      <Toolbar>
        <IconButton
          className={classes.menuButton}
          color="inherit"
          aria-label="Menu"
        >
          <KeyboardBackspaceIcon />
        </IconButton>
        <div className={classes.grow} />
        <IconButton color="inherit">
          <Badge badgeContent={17} color="secondary">
            <ShoppingCartIcon />
          </Badge>
        </IconButton>
        <IconButton color="inherit">
          <PersonIcon />
        </IconButton>
      </Toolbar>
    </AppBar>
  </div>
);

Header.propTypes = {
  title: PropTypes.string.isRequired,
  classes: PropTypes.object.isRequired,
};

const enhancer = compose(
  withStyles(styles)
);

export default enhancer(Header);
