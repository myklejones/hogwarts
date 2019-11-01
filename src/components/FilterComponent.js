import React,{Component} from 'react';

export default class FilterComponent extends Component {
 
    render() { 
        console.log(this)
        return ( 
<div style={{height:"10vh"}}>
<button onClick={this.props.toggleFilter}> greased </button>
<select onChange={this.props.handleSort}>
<option value="">All</option>
<option value="name">Sort by Name</option>
<option valu="weight">Sort by weight</option>
</select>
</div>
            
         );
    }
};
 
