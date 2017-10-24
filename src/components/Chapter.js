import React, {Component} from 'react'
import {withRouter} from 'react-router-dom'
import LastNext from './LastNext'

class Chapter extends Component {
  constructor(props) {
    super(props)
    // this.state={}
    // const binder=(Ms)=>{Ms.forEach(m=>this[m]=this[m].bind(this))}
    // binder([''])
  }
  componentWillMount(){
    // if(this.props.data.WPdata.currentChapter=={}){
      console.log('okay');
      const {pathname} = this.props.history.location
      const {allPages} = this.props.data.WPdata
      const chSlug = pathname.split("/")[2]
      const chIndex = allPages.indexOf(allPages.find((ch)=>ch.slug===chSlug))
      const chID = allPages[chIndex].id
      this.props.onSelectChapter(chID)
    // }
  }
  componentDidMount(){
    // console.log(this.props.history.location.pathname)
  }
  render() {
    const title = this.props.data.WPdata.currentChapter.title ? this.props.data.WPdata.currentChapter.title.rendered : ''
    const content = this.props.data.WPdata.currentChapter.content ? this.props.data.WPdata.currentChapter.content.rendered : <div/>
    return (
      <div className='chapter'>
        <LastNext {...this.props}/>
        <hr/>
        <h1 className='ch-title'>{title}</h1>
        <div dangerouslySetInnerHTML={{__html:content}}/>
        <hr/>
        <LastNext {...this.props}/>
      </div>
    )
  }
}
export default withRouter(Chapter)
