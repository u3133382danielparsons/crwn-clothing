import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import { selectIsCollectionFetching } from '../../redux/shop/shop.selectors.js';
import CollectionsOverview from './collections-overview.component.jsx';
import WithSpinner from '../with-spinner/with-spinner.component.jsx';

const mapStateToProps = createStructuredSelector({
    isLoading: selectIsCollectionFetching
});

const CollectionsOverviewContainer = compose(
    connect(mapStateToProps),
    WithSpinner
)(CollectionsOverview);

export default CollectionsOverviewContainer;
