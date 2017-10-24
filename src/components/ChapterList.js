import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import {binder} from '../__config/Utils'

export default class ChapterList extends Component {
  constructor(props) {
    super(props)
    // this.state={}
    binder(this,['renderChapterLinks'])
  }
  // selectChapter(id){
  //   this.props.onSelectChapter(id)
  // }
  renderChapterLinks(){
    let pages = this.props.data.WPdata.allPages
    pages = pages.sort((a,b)=>{return a.id - b.id})

    return pages.map(chapterData=>{
      const {id} = chapterData
      return (

        <li key={id} onClick={()=>window.scrollTo(0, 0)}>
          <Link to={`/ch/${chapterData.slug}`} className='ch-title'>
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
