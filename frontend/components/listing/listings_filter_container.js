import { connect } from 'react-redux';
import ListingsFilter from './listings_filter'
import { fetchAllListings } from '../../actions/listing_actions'
import {
  receiveSingleFilter,
  removeSingleFilter,
  clearAllFilters,
  receivePricingFilter,
  removePricingFilter
  } from '../../actions/filter_actions';


const mapStateToProps = state => ({
  filters: state.ui.filters,
})

const mapDispatchToProps = dispatch => ({
  fetchAllListings: () => dispatch(fetchAllListings()),
  receiveSingleFilter: filter => dispatch(receiveSingleFilter(filter)),
  removeSingleFilter: filter => dispatch(removeSingleFilter(filter)),
  receivePricingFilter: amount => dispatch(receivePricingFilter(amount)),
  removePricingFilter: amount => dispatch(removePricingFilter(amount)),
  clearAllFilters: () => dispatch(clearAllFilters()),

})

export default connect(mapStateToProps, mapDispatchToProps)(ListingsFilter)
