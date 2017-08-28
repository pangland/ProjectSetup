import React from 'react';
import { Link } from 'react-router-dom';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: ""
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.state.input = e.currentTarget.value;
    this.props.searchRestaurants(e.currentTarget.value);
    // this.props.filterRestaurants(e.currentTarget.value);
    // this.props.filterRestaurants(e.currentTarget.value);
  }

  render() {
    let listFirstTen;
    if (typeof this.props.restaurants !== 'undefined') {
      listFirstTen = this.props.restaurants.map((restaurant) => {
        return (
          <li className='search-list-item'>
            <Link to={`/restaurant/${restaurant.id}`}>
              {restaurant.name}
            </Link>
          </li>
        );
      });
    } else {
      listFirstTen = <li></li>;
    }

    return (
      <span className='search-restaurant'>
        <input className='search-restaurant-input'
          onChange={this.handleChange}
          value={this.state.lalala}
          placeholder='search does not work yet'/>
        {listFirstTen}
      </span>
    );
  }
}

export default SearchBar;