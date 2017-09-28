import React from 'react';
import { Link } from 'react-router-dom';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: "",
      searchedRestaurants: []
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
  }

  handleChange(e) {
    this.props.handleSearchBarChange(e.currentTarget.value);
    this.state.input = e.currentTarget.value;
    this.props.searchRestaurants(e.currentTarget.value);
    // this.props.filterRestaurants(e.currentTarget.value);
    // this.props.filterRestaurants(e.currentTarget.value);
  }

  handleKeyPress(e) {
    // 38: up arrow
    // 40: down arrow
    if (this.state.input === "") return null;
    if (e.keyCode === 38) {
      if (this.props.selected === -1) return null;
      this.searchedRestaurants[this.props.selected].className = this.searchedRestaurants[this.props.selected].className.replace("select", "");
      this.props.setSelected(this.props.selected - 1);
    } else if (e.keycode === 40) {
      if (this.props.selected === this.searchedRestaurants.length) return null;
      this.searchedRestaurants.className = this.searchedRestaurants.className.replace("select", "");
      this.props.setSelected(this.props.selected + 1);
    }

    if (this.props.selected >= 0 && this.props.selected < this.searchedRestaurants.length) {
      this.searchedRestaurants[this.props.selected].classList.add("select");
    }
  }

  render() {
    let listFirstTen;
    let listCuisines;
    let restaurantLabel;
    let cuisineLabel;

    if (typeof this.props.restaurantsSearched !== 'undefined') {
      listFirstTen = this.props.restaurantsSearched.map((restaurant, index) => {
        return (
          <li key={index} className='search-list-item'>
            <Link to={`/restaurant/${restaurant.id}`}>
              <p>{restaurant.name}</p>
              <span className='cuisine-span'>{restaurant.cuisine}</span>
              <span className='price-span'>{restaurant.price}</span>
            </Link>
          </li>
        );
      });
    } else {
      listFirstTen = null;
    }

    if (typeof this.props.cuisinesSearched !== 'undefined') {
      listCuisines = this.props.cuisinesSearched.map((cuisine, index) => {
        return (
          <li key={index} className='search-list-item'>
            <p>{cuisine.cuisine}</p>
          </li>
        );
      });
    }

    if (listFirstTen.length > 0) {
      restaurantLabel = (
        <li className='search-list-type'>
          <span><i className="fa fa-home"></i> RESTAURANTS</span>
        </li>
      );
    }

    if (this.props.cuisinesSearched.length > 0) {
      cuisineLabel = (
        <li className='search-list-type'>
          <span><i className="fa fa-cutlery"></i> CUISINES</span>
        </li>
      );
    }


    this.searchedRestaurants = listFirstTen;

    return (
      <span className='search-restaurant'>
        <label className='search-restaurant-input-wrapper'>
          <input className='search-restaurant-input' onChange={this.handleChange}
            value={this.state.lalala} placeholder='search does not work yet'
            onKeyDown={this.handleKeyPress} />

        </label>
        <ul className='search-restaurant-list'>
          {cuisineLabel}
          {listCuisines}
          {restaurantLabel}
          {this.searchedRestaurants}
        </ul>
      </span>
    );
  }
}

export default SearchBar;
