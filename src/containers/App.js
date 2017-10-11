import React, { Component } from 'react'
import {connect} from 'react-redux'
import {BrowserRouter as Router, Route, Redirect, Switch} from 'react-router-dom'
import '../styles/main.css'
import {fetchWPpages, fetchWPposts} from '../_actions'
import {binder} from '../__config/Utils'
import Home from '../components/Home'

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
    // binder(this,[''])
  }
  componentDidMount(){
    const fetchBoth=(()=>{
      this.props.onFetchWPpages()
      this.props.onFetchWPposts()
    })()
    console.log(this.props)
  }
  render() {
    return (
      <div className="App">
        <Router>
          <div>
            <Switch>
              <Route exact path="/" render={()=>{return(
                  <Home {...this.props}/>
                )}}/>
              <Route render={() => { return <Redirect to="/" /> }} />
            </Switch>
          </div>
        </Router>
      </div>
    )
  }
}

const mapStateToProps=(state)=>{return {data:state}}
const mapDispatchToProps=(dispatch)=>{return{
  onFetchWPpages:()=>{dispatch(fetchWPpages())},
  onFetchWPposts:()=>{dispatch(fetchWPposts())}
}}

export default connect(mapStateToProps, mapDispatchToProps)(App)
// export default App
