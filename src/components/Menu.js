import React, {Component} from 'react'
// import {binder} from '../__config/Utils'

export default class Menu extends Component {
  constructor(props) {
    super(props)
    this.state={
      open:true
    }
    // const binder=(Ms)=>{Ms.forEach(m=>this[m]=this[m].bind(this))}
    // binder([''])
  }
  render() {
    return (
      <div className={`menu ${this.state.open?'open':''}`}>
        <div></div>
      </div>
    )
  }
}
