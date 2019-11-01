import React, { Component } from 'react';
import '../App.css';
import Nav from './Nav'
import hogs from '../porkers_data';
import TileContainer from './TileContainer'
import FilterComponent from'./FilterComponent'

class App extends Component {
state = {
  filterStatus: false,
  sortMethod: ""
}

toggleFilter = () => {
 
  this.setState({
    filterStatus: !this.state.filterStatus
  })
}

  filterHogs = (hogs) => {
    if(this.state.filterStatus){
      
      return hogs.filter(hog => hog.greased) 
    }else{
      return hogs
    }
  }

  handleSort = (evt) => {
this.setState({
  sortMethod: evt.target.value
})
    
  }
 sortHogs = (hogs) => {
   if(this.state.sortMethod === "name"){
    return [...hogs].sort((a,b) => a.name.localeCompare(b.name))
   }else{
     return hogs
   }
 }



  render() {
   
    return (
      <div  className="App">
          < Nav />
          <FilterComponent handleSort={this.handleSort} toggleFilter={this.toggleFilter}/>
          <TileContainer hogs={this.sortHogs(this.filterHogs(hogs))} />
      </div>
    )
  }
}

export default App;
