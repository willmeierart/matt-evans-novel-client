import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import {binder} from '../__config/Utils'

export default class LastNext extends Component {
  constructor(props) {
    super(props)
    // this.state={}
    // const binder=(Ms)=>{Ms.forEach(m=>this[m]=this[m].bind(this))}
    // binder(this,['selectChapter'])
  }
  // selectChapter(id){
  //   this.props.onSelectChapter(id)
  //   window.scrollTo(0, 0)
  // }
  render() {
    const {WPdata} = this.props.data
    const {allPages} = WPdata
    const {id} = WPdata.currentChapter
    const place = allPages.indexOf(allPages.find((ch)=>ch.id===id))
    const lastCh = place <= 0 ? null : allPages[place-1]
    const nextCh = place === -1 || place === allPages.length-1 ? null : allPages[place+1]

    return (
      <div className='lastnext'>
        <div>{lastCh !== null &&
          <span onClick={()=>window.scrollTo(0, 0)}>
            <Link to={`/ch/${lastCh.slug}`} className='last'>&#60;&nbsp;{lastCh.title.rendered}</Link>
          </span>
        }</div>
        <div>{nextCh !== null &&
          <span onClick={()=>window.scrollTo(0, 0)}>
            <Link to={`/ch/${nextCh.slug}`} className='next'>{nextCh.title.rendered}&nbsp;&#62;</Link>
          </span>
        }</div>
      </div>
    )
  }
}
