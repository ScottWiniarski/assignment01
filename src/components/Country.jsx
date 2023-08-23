import { Button, Card } from '@mui/material';
// import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import React, { Component } from 'react';

class Country extends Component {
  
    render() { 
      const {addGold, minusGold, country} = this.props;

      return (
        <Card variant="outlined">
        
          <div className='Country' style={{ name:(this.props.country) }}>
          {<span style={{ fontWeight: 'bold' }}>{this.props.country.country}</span>}
            
          </div>
          <div className='Country' style={{ gold:this.props.country.gold }}>
            {"Gold Medals: " + this.props.country.gold + " "}
            <Button variant='outlined' color='success' size='small' onClick={ () => this.props.addGold(this.props.country.id) }>+</Button>
            {/* <Button variant='outlined' color='success' size='small'>{this.AddOutlinedIcon}</Button> */}
            <Button  variant='outlined' color='error' size='small' onClick={this.decreaseGold}>-</Button>
            {/* <button onClick={this.decreaseGold}> - </button> */}
          </div>
         
          </Card>
      );
    }
  }
  
  export default Country