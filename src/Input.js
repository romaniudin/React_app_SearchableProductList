import React, { Component } from 'react'

class Input extends Component {
  constructor() {
    super()

    this.state = {
      searchInput: ''
    }
  }

  getSearchInput = e => {
    this.setState({
      searchInput: e.target.value
    })
  }

  submit = e => {
    e.preventDefault()
    this.props.updateSearchInput(this.state.searchInput)
  }

  render() {
    return (
      <div >
      <form className='input-group mb-3' onSubmit={this.submit}>
        <input type="text" className="form-control" placeholder="Search..." onChange={this.getSearchInput} value={this.state.searchInput}/>
        <button type="submit" className="btn btn-primary" onClick={this.submit}>Submit</button>
        <br/>
        
      </form>
      <input type="checkbox"/> Only show products in stock
      </div>
    )
  }
}

export default Input