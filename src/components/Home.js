import React, {Component} from 'react'
import ChapterList from './ChapterList'

export default class Home extends Component {
  constructor(props) {
    super(props)
    // this.state={}
  }
  render() {
    return (
      <div className='home'>
        <ChapterList {...this.props}/>
      </div>
    )
  }
}
