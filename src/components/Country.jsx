import { Button, Card } from '@mui/material';
import React, { Component } from 'react';
//import Medal from './components/medal';

class Country extends Component {
  
    render() { 
      const {addGold, minusGold, country} = this.props;

      return (
        <Card variant="outlined">
          <div className='Country' style={{ name:(this.props.country) }}>
          {<span style={{ fontWeight: 'bold' }}>{this.props.country.country}</span>}
          </div>
          {/* <Medal
          key={this.props.country.id}
          country = {this.props.country}

          ></Medal> */}
          <div className='Country' style={{ gold:this.props.country.gold }}>
            {"Gold Medals: " + this.props.country.gold + " "}
            <Button variant='outlined' color='success' size='small' onClick={ () => this.props.addGold(this.props.country.id) }>+</Button>
            <Button variant='outlined' disabled={this.props.country.gold === 0} color='error' size='small' onClick={ () => this.props.minusGold(this.props.country.id)}>-</Button>
          </div> 
          </Card>
      );
    }
  }
  
  export default Country