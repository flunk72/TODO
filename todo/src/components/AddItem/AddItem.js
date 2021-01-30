import React, { Component } from 'react';
import './AddItem.css'

export class AddItem extends Component {
  render() {
    return (
      <div className="item-add-form">
        <button className="btn btn-outline-secondary" onClick={() => this.props.onItemAdded("hello")}>Add Item</button>
      </div>
    )
  }
}