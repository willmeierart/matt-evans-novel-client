import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import {binder} from '../__config/Utils'

export default class ChapterList extends Component {
  constructor(props) {
    super(props)
    // this.state={}
    binder(this,['renderChapterLinks','selectChapter'])
  }
  selectChapter(id){
    this.props.onSelectChapter(id)
  }
  renderChapterLinks(){
    let pages = this.props.data.WPdata.allPages
    pages = pages.sort((a,b)=>{return a.id - b.id})

    return pages.map(chapterData=>{
      const content = chapterData.content.rendered
      const {id} = chapterData
      return (

        <li key={id} onClick={()=>this.selectChapter(id)}>
          <Link to={`/ch/${chapterData.slug}`} content={content} className='ch-title'>
            {chapterData.title.rendered}
          </Link>
        </li>
      )
    })
  }
  render() {
    this.renderChapterLinks()
    const {WPdata}=this.props.data
    return (
      <div className='ch-list'>
        {WPdata.allPages[0] &&
          <ul>
            {this.renderChapterLinks()}
          </ul>
        }
      </div>
    )
  }
}
