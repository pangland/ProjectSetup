import React from 'react';

class RestaurantForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      image_url: "",
      description: "",
      cuisine: "",
      price: "",
      hours: "",
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const restaurant = Object.assign({}, this.state);
    this.props.processForm(restaurant).then(() => this.props.closeModal());
  }

  handleChange(field) {
    return (e) => this.setState({[field]: e.currentTarget.value});
  }

  render() {
    return (
      <section className='modal-div'>
        <h3 className='modal-header'>
          Grow your business with EasySeating!
        </h3>
        {this.props.renderErrors.bind(this)()}
        <form className='restaurant-form'>
          <input type="text" onChange={this.handleChange("name")}
            name="restaurant[name]" value={this.state.name}
            placeholder='restaurant name'/>

          <input type="text" onChange={this.handleChange("image_url")}
            name="restaurant[image_url]" value={this.state.image_url}
            placeholder='link to restaurant image'/>

          <select name="cuisine" onChange={ this.handleChange('cuisine')}
            defaultValue=''>
            <option value="" disabled hidden>Choose Cuisine</option>
            <option value="American">American</option>
            <option value="Chinese">Chinese</option>
            <option value="French">French</option>
            <option value="Italian">Italian</option>
            <option value="Japanese">Japanese</option>
            <option value="Mexican">Mexican</option>
            <option value="Pizza">Pizza</option>
          </select>

          <select name="price" onChange={ this.handleChange('price')} defaultValue=''>
            <option value="" disabled hidden>Choose Price</option>
            <option value="0"> under $15 </option>
            <option value="1">$15 to $30</option>
            <option value="2">$31 to $50</option>
            <option value="3">$50 and over</option>
          </select>

          <select name="hours" onChange={ this.handleChange('hours')}
            defaultValue=''>
            <option value="" disabled hidden>Choose hours</option>
            <option value="0"> 11:00 a.m. to 10:00 p.m. </option>
            <option value="1"> 7:30 a.m. to 9:00 p.m.</option>
          </select>

          <textarea className="description-input" ref="description"
            cols='59' value={ this.state.body } rows='10'
            placeholder="Description"
            onChange={ this.handleChange('description') }>
          </textarea>

          <button type="submit" className='form-submit'
            onClick={this.handleSubmit}>{this.props.formType}Add your restaurant!</button>
        </form>
      </section>
    );
  }
}

export default RestaurantForm;
