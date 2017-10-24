import React, {Component} from 'react'
import ChapterList from './ChapterList'
// import {binder} from '../__config/Utils'

export default class Menu extends Component {
  constructor(props) {
    super(props)
    // this.state={
    //   open:true
    // }
    // const binder=(Ms)=>{Ms.forEach(m=>this[m]=this[m].bind(this))}
    // binder([''])
  }
  // componentWillReceiveProps(nextProps){
  //   const then = this.state.open
  //   console.log(nextProps);
  //   const now = nextProps.data.FnState.menuOpen
  //   if(then!==now){ this.setState({open:now}) }
  // }
  render() {
    return (
      // <div className={`menu ${this.state.open?'open':''}`}>
      <div className='menu'>
        <div>
          <ChapterList {...this.props}/>
        </div>
      </div>
    )
  }
}
