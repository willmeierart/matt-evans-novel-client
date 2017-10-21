import React, {Component} from 'react'

export default class Chapter extends Component {
  constructor(props) {
    super(props)
    // this.state={}
    // const binder=(Ms)=>{Ms.forEach(m=>this[m]=this[m].bind(this))}
    // binder([''])
  }
  componentDidMount(){
    console.log(this.props)
  }
  render() {
    const content = this.props.data.WPdata.currentChapter.content ? this.props.data.WPdata.currentChapter.content.rendered : <div/>
    return (
      <div className='Chapter'>
        <div dangerouslySetInnerHTML={{__html:content}}/>
      </div>
    )
  }
}
