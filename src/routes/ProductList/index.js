import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Grid from '@material-ui/core/Grid';
import { compose, lifecycle } from 'recompose';

import {
  fetchProducts,
} from 'Redux/Actions/ProductActions';

import ProductListItem from './components/ProductListItem';

const ProductList = ({
  records,
  fetching,
}) => (
  <Grid container>
    {
      records.map(
        record => (
          <Grid item xs={6} sm={4} key={record.id}>
            <ProductListItem item={record}/>
          </Grid>  
        )
      )
    }
  </Grid>
);

ProductList.propTypes = {
  records: PropTypes.array.isRequired,
  fetching: PropTypes.bool.isRequired,
};

const mapStateToProps = ({
  product: {
    records,
    fetching,
  },
}) => ({
  records,
  fetching,
});

const mapDispatchToProps = {
  fetchProducts,
};

const enhancer = compose(
  connect(mapStateToProps, mapDispatchToProps),
  lifecycle({
    componentDidMount() {
      this.props.fetchProducts()
    }
  })
);

export default enhancer(ProductList);
