import React, { Fragment } from 'react';
import { Route } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';

import Header from 'components/Header'

import styles from './styles'

const CoreLayout = ({
  classes,
  component: Component,
  ...props
}) => (
  <Fragment>
    <Header />
    <main className={classes.main}>
      <Route component={Component} {...props} />
    </main>  
  </Fragment>
)

export default withStyles(styles)(CoreLayout);