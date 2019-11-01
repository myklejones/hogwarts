import React, {Component} from 'react'

export default class HogTile extends Component{

    state = {
        
        clicked: false
    }

handleClick = () => {
   this.setState({
       clicked: !this.state.clicked
   })
}

componentDidUpdate(){
    console.log("C.update")
}

    render(){
         console.log(this.hog)
        
        
        return(
           <div onClick={this.handleClick} className="ui eight wide column">
               
               <p>{this.props.hog.name} </p>
              <img src={this.props.hog.image} alt= {this.props.name} />
              {this.state.clicked ? 
                    <div>
                  <p>specialty: {this.props.hog.specialty}</p> 
                  <p>weight: {this.props.hog.weight}</p>
                  </div> : null }
           </div>
           
        )
    }
}