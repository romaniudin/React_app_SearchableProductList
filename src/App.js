import React, { Component } from 'react';
import './App.css';
import Input from './Input'
import ProductList from './ProductList'

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      searchInput: ''
    }
  }

  updateSearchInput = (text) => {
    this.setState({
      searchInput: text
    })
  }

  render() {

    const filteredProducts = this.props.products.filter(product => {
      return this.state.searchInput === '' ? true : product.name.toLowerCase().includes(this.state.searchInput.toLowerCase())
    })

    return (
      <div className='App'>
        <div className='Container'>
          <div className='jumbotron'>
            <h1>Product List</h1>
          </div>
          <Input updateSearchInput={this.updateSearchInput}/>
          <ProductList products={filteredProducts} />
        </div>
      </div>
    );
  }
}

export default App;
