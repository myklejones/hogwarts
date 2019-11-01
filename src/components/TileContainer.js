import React,  {Component} from 'react'
import HogTile from './HogTile'
import FilterComponent from './FilterComponent'



export default class TileContainer extends Component{
//  state = {
//    greased: false
//  }

// greesed = () => {
//     // this.props.hogs.filter(hog => hog.greased)
//     this.setState({
//         greased: true
//     })
// }


allhogs = (hogs) => {   
    // if(this.state.greased === false){
    //     return(
    //         hogs.map(h=>  <HogTile hog={h}  /> )
    //     )
    // }else{
    //     return(
    //       hogs.filter(h => h.greased === true).map(h=>  <HogTile hog={h}  /> )
    //     )
    // }
}
// changed = (change) => { 
//     if(change.target.value === "Greased"){      
//         this.setState({
//         })
//     }
// }

    render(){
        console.log(this)
        
        return(
            <div className="ui grid container" >
                {this.props.hogs.map(h=>{
                    return <HogTile hog={h} />
                } )}
                {/* <select onChange={this.changed}>
                    <option value="name">Name</option>
                    <option value="greased">Greased</option>
                    <option value="weight">Weight</option>
                </select> */}
        
              {/* <button onClick={this.greesed}  >{"Greesed"}</button> */}
              {/* {this.allhogs(this.props.hogs)} */}
             
            </div>
        )
    }
}