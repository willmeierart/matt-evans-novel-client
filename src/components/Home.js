import React, {Component} from 'react'

export default class Home extends Component {
  constructor(props) {
    super(props)
    // this.state={}
    // const binder=(Ms)=>{Ms.forEach(m=>this[m]=this[m].bind(this))}
    // binder([''])
  }
  render() {
    return (
      <div className='Home'>
        {this.props.data.WPdata[0] &&
        this.props.data.WPdata[0].content.rendered}
      </div>
    )
  }
}
