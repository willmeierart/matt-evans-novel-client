import React, { Component } from 'react'
import {connect} from 'react-redux'
import {BrowserRouter as Router, Route, Redirect, Switch} from 'react-router-dom'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import {RouteTransition} from 'react-router-transition'
// import FlipPage from 'react-flip-page'
import '../styles/main.css'
import '../styles/animations.css'
import {fetchWPpages, fetchWPposts, selectChapter, toggleMenu} from '../_actions'
import {binder} from '../__config/Utils'
import Home from '../components/Home'
import Chapter from '../components/Chapter'
import Header from '../components/Header'
import Menu from '../components/Menu'
import Footer from '../components/Footer'

class App extends Component {
  constructor(props){
    super(props)
    const {WPdata} = this.props.data
    const freshy = []

    // async function fresh(){
    //   const pages = await fetchWPpages().payload
    //   const posts = await fetchWPposts().payload
    //   freshy.concat([pages,posts])
    //   console.log(freshy)
    //   return freshy
    // }
    // fresh().then(()=>{
    //   if(WPdata[0]!==freshy.data[0]){
    //     fetchBoth()
    //   }
    // })

    // this.state = {}
    binder(this,['prevPage','nextPage'])
  }
  componentDidMount(){
    const fetchBoth=(()=>{
      this.props.onFetchWPpages()
      this.props.onFetchWPposts()
    })()
  }
  prevPage(){ this.flipPage.gotoPreviousPage() }
  nextPage(){ this.flipPage.gotoNextPage() }
  render() {
    // const {FnState} = this.props
    return (
      <div className="App">
        <Router>
          <div>
            <Header {...this.props}/>
              <ReactCSSTransitionGroup
                  transitionName="showMenu"
                  transitionEnterTimeout={500}
                  transitionLeaveTimeout={500}>
                {this.props.data.FnState.menuOpen===true &&
                  <Menu {...this.props}/>}
              </ReactCSSTransitionGroup>
            <main>
              <Route render={({location,history,match})=>{return(
                <RouteTransition
                    pathname={location.pathname}
                    atEnter={{ opacity: 0}}
                    atLeave={{ opacity: 0}}
                    atActive={{ opacity: 1}}
                    mapStyles={styles=>({opacity:styles.opacity, transform:`translateY(${styles.translateY}px) translateZ(${styles.translateZ})`})}>
                  <Switch key={location.pathname} location={location}>
                    <Route exact path="/" render={()=>{return(
                        <Home {...this.props}/>
                      )}}/>
                    <Route match path="/ch/" render={()=>{return(
                        <Chapter prevPage={this.prevPage} nextPage={this.nextPage} {...this.props}/>
                      )}}/>
                    <Route render={() => { return <Redirect to="/" /> }} />
                  </Switch>
                </RouteTransition>
              )}}/>
            </main>
            <Footer/>
          </div>
        </Router>
      </div>
    )
  }
}

const mapStateToProps=(state)=>{return {data:state}}
const mapDispatchToProps=(dispatch)=>{return{
  onFetchWPpages:()=>{dispatch(fetchWPpages())},
  onFetchWPposts:()=>{dispatch(fetchWPposts())},
  onSelectChapter:(id)=>{dispatch(selectChapter(id))},
  onToggleMenu:(bool)=>{dispatch(toggleMenu(bool))}
}}

export default connect(mapStateToProps, mapDispatchToProps)(App)
// export default App
