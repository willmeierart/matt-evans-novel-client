import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import MenuIcon from './MenuIcon'

export default class Header extends Component {
  constructor(props) {
    super(props)
    // this.state={}
    // const binder=(Ms)=>{Ms.forEach(m=>this[m]=this[m].bind(this))}
    // binder([''])
  }
  render() {
    const splitName=(name)=>{
      return name.split('').map((letter,i)=>{
        return ( <span key={i}>{letter}</span> )
      })

    }
    return (
      <div className='header'>
        <div className="menu-icon-wrapper">
          <MenuIcon toggleMenu={this.props.onToggleMenu}/>
        </div>
        <Link to="/" className='title'>{splitName('AFTER')}</Link>
      </div>
    )
  }
}
