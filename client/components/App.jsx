import React from 'react'
import {connect} from 'react-redux'

import Header from './Header'
import Footer from './Footer'
import Home from './Home'
import RecipeList from './RecipeList'
import MyFavourites from './MyFavourites'


class App extends React.Component {
  render() {
    return (
      <>
        <div className='App'>
          <Header />
          <nav>
            <button onClick={this.props.viewHome}>View Home</button>
            <button onClick={this.props.viewRecipes}>View Recipes</button> 
            <button onClick={this.props.viewFavourites}>View Favourites</button> 
          </nav>
          <main>
              {this.props.currentPage == 'home' ? <Home/> : ''}  
              {this.props.currentPage == 'recipes' ? <RecipeList/> : ''}  
              {this.props.currentPage == 'favourites' ? <MyFavourites /> : ''}              
          </main>
          <Footer />
        </div>
      </>
    )
  }
}

function mapStateToProps(state) {
  //console.log(state.currentPage)
  return {
    currentPage: state.currentPage
  }
}

function mapDispatchToProps(dispatch) {
  return {
    viewHome: () => dispatch({ type: 'CHANGE_PAGE', page: 'home' }),
    viewRecipes: () => dispatch({ type: 'CHANGE_PAGE', page: 'recipes' }),
    viewFavourites: () => dispatch({ type: 'CHANGE_PAGE', page: 'favourites' }),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
