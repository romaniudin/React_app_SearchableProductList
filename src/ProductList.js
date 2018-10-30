import React, { Component } from 'react'
import Product from './Product'

class ProductList extends Component {
  render() {

    const productList = this.props.products.map((product, i) => {
      return <Product name={product.name} price={product.price} key={i}/>
    })

    return (
      <div >
      <table className='table col-lg-6'>
          <thead className='thead-dark'>
            <tr>
            <th>Name</th>
            <th>Price</th>
            </tr>
          </thead>
          <tbody>
          {productList}
        </tbody>
      </table>
    </div>
    )
  }
}

export default ProductList