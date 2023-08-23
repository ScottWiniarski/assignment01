import { Button, Card } from '@mui/material';
// import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import React, { Component } from 'react';

class Country extends Component {
    state = { 
      name: 'America',
      gold: 0,
     }
      // helper method
    renderName(name) {
      return (name === undefined || name === null ? 'Unknown' : name);
    }
    renderGold(gold){
      return (gold === undefined || gold === null? 0 : gold);
    }

    increaseGold = () => {
      // convert the function to an arrow function
      // arrow functions inherit 'this' keyword
      //console.log(this.state.gold);
      console.log("Increasing Gold");
      // the setState method is inherited from the base Component class
      // when a component's state is altered, it is re-rendered asynchronously by react
      this.setState({ gold: this.state.gold + 1 })
    }
    decreaseGold = () => {
      console.log("Decreasing Gold");
      this.state.gold > 0 && this.setState({gold: this.state.gold - 1});
    }
    render() { 
      return (
        <Card variant="outlined">
        
          <div className='Country' style={{name:this.renderName(this.state.name) }}>
          {<span style={{ fontWeight: 'bold' }}>{this.state.name}</span>}
            
          </div>
          <div className='Country' style={{ gold:this.renderGold(this.state.gold) }}>
            {"Gold Medals: " + this.state.gold + " "}
            {/* <button onClick={this.increaseGold}> + </button> */}
            <Button variant='outlined' color='success' size='small' onClick={this.increaseGold}>+</Button>
            {/* <Button variant='outlined' color='success' size='small'>{this.AddOutlinedIcon}</Button> */}
            <Button variant='outlined' color='error' size='small' onClick={this.decreaseGold}>-</Button>
            {/* <button onClick={this.decreaseGold}> - </button> */}
          </div>
         
          </Card>
      );
    }
  }
  
  export default Country