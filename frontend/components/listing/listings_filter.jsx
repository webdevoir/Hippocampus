import React from 'react';
import { Link, withRouter } from 'react-router-dom';
//Will need to pass edit and delete review methods to Review Index Item

class ListingsFilter extends React.Component {
  constructor(props) {
    super(props)
    this.toggle = this.toggle.bind(this);
    this.handlePricingFilter = this.handlePricingFilter.bind(this);
    this.handlePrivatePublicFilter = this.handlePrivatePublicFilter.bind(this);
  }

  toggle(category) {
    const {
      filters,
      removeSingleFilter,
      receiveSingleFilter
    } = this.props;

    return e => {
      if (filters[category]) {
        removeSingleFilter(category);
      } else {
        receiveSingleFilter(category);
      }
    }
  }

  handlePricingFilter(amount) {
    const {
      receivePricingFilter,
      removePricingFilter,
      filters
    } = this.props;

    return e => {
      if (filters['pricing'] === amount) {
        removePricingFilter(amount);
      } else {
        receivePricingFilter(amount);
      }
    }
  }

  handlePrivatePublicFilter(category) {
    const {
      filters,
      removeSingleFilter,
      receiveSingleFilter
    } = this.props;

    return e => {
      //user clicked private filter
      if (category === 'private') {
        //if filter toggle already on, remove filter.
        if (filters['private']) {
          removeSingleFilter('private');
        //otherwise, turn off public filter and turn on private
        } else {
          removeSingleFilter('public');
          receiveSingleFilter('private');
        }

      //user clicked public filter
      } else if (category === 'public') {
        //if filter toggle already on, remove filter.
        if (filters['public']) {
          removeSingleFilter('public');
        //otherwise, turn off private filter and turn on public
        } else {
          removeSingleFilter('private');
          receiveSingleFilter('public');
        }
      }
    }
  }

  render() {
    const { filters } = this.props;

    return (
      <div className="explore-filters">
        <h2> Listing Type </h2>
        <ul className='explore-filters-list'>
          <li className='filters-list-item'>
            <input id='public-filter'
            className='checkbox-filter'
            name='listing-filter'
            type='radio'
            onClick={this.handlePrivatePublicFilter('public')}
            checked={filters['public']}
            />
            <label htmlFor='public-filter' className='checkbox-label'>Public</label>
          </li>
          <li className='filters-list-item'>
            <input id='private-filter'
            className='checkbox-filter'
            name='listing-filter'
            type='radio'
            onClick={this.handlePrivatePublicFilter('private')}
            checked={filters['private']}
            />
          <label htmlFor='private-filter' className='checkbox-label'>Private</label>
          </li>
        </ul>
        <h2> Accomodations </h2>
        <ul className='explore-filters-list'>
          <li className='filters-list-item'>
            <input id='pet-friendly-filter'
              className='checkbox-filter'
              type='checkbox'
              onClick={this.toggle('pets')}
              checked={filters['pets']}
              />
            <label htmlFor='pet-friendly-filter' className='checkbox-label'>Pet Friendly</label>
          </li>
          <li className='filters-list-item'>
            <input id='group-filter'
            className='checkbox-filter'
            type='checkbox'
            onClick={this.toggle('group')}
            checked={filters['group']}
            />
            <label htmlFor='group-filter' className='checkbox-label'>Group (15+)</label>
          </li>
          <li className='filters-list-item'>
            <input id='camping-filter'
            className='checkbox-filter'
            type='checkbox'
            onClick={this.toggle('camping')}
            checked={filters['camping']}
            />
            <label htmlFor='camping-filter' className='checkbox-label'>Camping</label>
          </li>
          <li className='filters-list-item'>
            <input id='glamping-filter'
            className='checkbox-filter'
            type='checkbox'
            onClick={this.toggle('glamping')}
            checked={filters['glamping']}
            />
            <label htmlFor='glamping-filter' className='checkbox-label'>Glamping</label>
          </li>

        </ul>
        <h2> Pricing </h2>
        <ul className='explore-filters-list'>
          <li className='filters-list-item'>
            <input id='less-than-25-filter'
            className='checkbox-filter'
            name="pricing-filter"
            type='radio'
            onClick={ this.handlePricingFilter(25) }
            checked={ filters['pricing'] === 25 }
            />
            <label htmlFor='less-than-25-filter' className='checkbox-label'>Under $25</label>
          </li>
          <li className='filters-list-item'>
            <input id='less-than-50-filter'
            className='checkbox-filter'
            type='radio'
            name="pricing-filter"
            onClick={ this.handlePricingFilter(50) }
            checked={ filters['pricing'] === 50 }
            />
            <label htmlFor='less-than-50-filter' className='checkbox-label'>Under $50</label>
          </li>
          <li className='filters-list-item'>
            <input id='less-than-100-filter'
            className='checkbox-filter'
            type='radio'
            name="pricing-filter"
            onClick={ this.handlePricingFilter(100) }
            checked={ filters['pricing'] === 100 }
            />
            <label htmlFor='less-than-100-filter' className='checkbox-label'>Under $100</label>
          </li>
        </ul>
        <h2> Activities </h2>
        <ul className='explore-filters-list'>
          <li className='filters-list-item'>
            <input id='biking-filter'
            className='checkbox-filter'
            type='checkbox'
            onClick={this.toggle('biking')}
            checked={filters['biking']}
            />
            <label htmlFor='biking-filter' className='checkbox-label'>Biking</label>
          </li>
          <li className='filters-list-item'>
            <input id='hiking-filter'
            className='checkbox-filter' type='checkbox'
            onClick={this.toggle('hiking')}
            checked={filters['hiking']}
            />
            <label htmlFor='hiking-filter' className='checkbox-label'>Hiking</label>
          </li>
          <li className='filters-list-item'>
            <input id='water-sports-filter'
            className='checkbox-filter' type='checkbox'
            onClick={this.toggle('water')}
            checked={filters['water']}
            />
            <label htmlFor='water-sports-filter' className='checkbox-label'>Water Sports</label>
          </li>
        </ul>
        <h2> Terrain </h2>
        <ul className='explore-filters-list'>
          <li className='filters-list-item'>
            <input id='forest-filter'
            className='checkbox-filter' type='checkbox'
            onClick={this.toggle('forest')}
            checked={filters['forest']}
            />
            <label htmlFor='forest-filter' className='checkbox-label'>Forest</label>
          </li>
          <li className='filters-list-item'>
            <input id='waterfall-filter'
            className='checkbox-filter' type='checkbox'
            onClick={this.toggle('waterfall')}
            checked={filters['waterfall']}/>
            <label htmlFor='waterfall-filter' className='checkbox-label'>Waterfall</label>
          </li>
          <li className='filters-list-item'>
            <input id='lake-filter'
            className='checkbox-filter' type='checkbox'
            onClick={this.toggle('lake')}
            checked={filters['lake']}/>
            <label htmlFor='lake-filter' className='checkbox-label'>Lake</label>
          </li>
        </ul>
        <button onClick={() => this.props.clearAllFilters()}>Clear Filters</button>
      </div>
    )
  }
}

export default withRouter(ListingsFilter);
