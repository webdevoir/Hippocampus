import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import ListingsIndexItem from './listings_index_item';

class ListingsIndex extends React.Component {
  constructor(props) {
    super(props);
    this.geocoder = new google.maps.Geocoder();
  }
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  applyFilters() {
    const { listings, filters, geolocation, mapBounds } = this.props;

    let filteredListings = listings.filter(listing => {
      if (filters['pets'] && !listing.allowsPets) return;
      if (filters['camping'] && !listing.isCamping) return;
      if (filters['glamping'] && listing.isCamping) return;
      if (filters['group'] && listing.maxCapacity < 15) return;
      if (filters['private'] && !listing.isPrivate) return;
      if (filters['public'] && listing.isPrivate) return;
      if (filters.pricing < listing.dailyCost) return;

      return listing;
    });

    if (Object.keys(mapBounds).length > 0 && geolocation.length > 0) {
      filteredListings = filteredListings.filter(listing =>
        listing.lat > mapBounds.f.b &&
        listing.lat < mapBounds.f.f &&
        listing.lng > mapBounds.b.b &&
        listing.lng < mapBounds.b.f
      )
    }

    return filteredListings;
  }

  render() {
    const { listings, filters } = this.props;

    if (listings.length === 0) {
      return (
        <div></div>
      )
    }


    const filteredListings = this.applyFilters();

    if (filteredListings.length === 0) {
      return (
        <div className="listings-index">
          <p>
            <strong>
              0 Listings
            </strong>
          </p>
          <div className='no-results'>
            <img src="https://res.cloudinary.com/deor0br3s/image/upload/v1523404313/hippo_head.png"/>
            <h2> No listings match your current search. </h2>
          </div>
        </div>
      )
    }

    const numListings =
        filteredListings.length ===  1 ?
        filteredListings.length + " Listing" :
        filteredListings.length + " Listings";
    return (
      <div className="listings-index">
        <p>
          <strong>
            {numListings}
          </strong>
        </p>
        {
          filteredListings.map(listing =>
            <ListingsIndexItem
              key={listing.id}
              listing={listing}
            />
          )
        }
      </div>
    )
  }
}

export default withRouter(ListingsIndex);
