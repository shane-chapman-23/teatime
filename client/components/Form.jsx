import React from 'react'

class Form extends React.Component {
  
  state = {
    recipe_name: "",
    recipe_description: "",
    image: "",
    prep_time: "",
    cook_time: "",
    food_category: "",
    ingredients: [],
    quantity: [],
    measurements: []
  }

  handleChange = (event) => {
    this.setState({
      recipe_name: event.target.recipe_name,
      recipe_description: event.target.recipe_description,
      image: event.target.image,
      prep_time: event.target.prep_time,
      cook_time: event.target.cook_time,
      food_category: event.target.food_category,
      ingredients: event.target.ingredients,
      quantity: event.target.quantity,
      measurements: event.target.measurements
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    alert('Submitted: ' + this.state);
  }

  render() {
    return(
      <div>
        <form onSubmit={this.handleSubmit}>
          <input type="text" value={this.state.recipe_name} onChange={this.handleChange} placeholder="Recipe name"></input>
          <br></br><input type="text" value={this.state.recipe_description} onChange={this.handleChange} placeholder="Recipe description"></input>
          <br></br><input type="text" value={this.state.image} onChange={this.handleChange} placeholder="Image url"></input>
          <br></br><input type="text" value={this.state.prep_time} onChange={this.handleChange} placeholder="Prep time"></input>
          <br></br><input type="text" value={this.state.cook_time} onChange={this.handleChange} placeholder="Cook time"></input>
          <br></br><input type="text" value={this.state.food_category} onChange={this.handleChange} placeholder="Food category"></input>
          <br></br><input type="text" value={this.state.ingredients} onChange={this.handleChange} placeholder="Ingredients"></input>
          <br></br><input type="text" value={this.state.quantity} onChange={this.handleChange} placeholder="Quantity"></input>
          <br></br><input type="text" value={this.state.measurements} onChange={this.handleChange} placeholder="Measurements"></input>
          <br></br><input type="submit" value="submit" />
        </form>
      </div>
    )
  }
}

export default Form