import React, {Component} from 'react'
import {binder} from '../__config/Utils'

export default class MenuIcon extends Component {
  constructor(props) {
    super(props)
    this.state={open:false}
    binder(this,['toggleOpen'])
  }
  toggleOpen(){
    this.props.toggleMenu(!this.state.open)
    this.setState({open:!this.state.open})
  }
  render() {
    return (
      <div onClick={this.toggleOpen} id='menu-icon'
        className={this.state.open?'open':''}>
        <span/><span/><span/><span/>
      </div>
    )
  }
}
