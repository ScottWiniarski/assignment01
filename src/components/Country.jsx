import { Button, Card } from '@mui/material';
import React, { Component } from 'react';
import Medal from '../components/medal';

class Country extends Component {

    

      getCountryMedalTotals(medals, country){
        let counter = 0;
        medals.forEach(medal => {
          // console.log(medal.name);
          // console.log(country.country)
          counter += country[medal.name];
          console.log(counter);
          
        })
        return counter;
          
        
      }

    render() { 
      const { medals, country, addMedal, subtractMedal} = this.props;
      // console.log(medals);

      // function getCountryMedalTotals(post){
      //   let counter = 0;
      //   for(let i = 0; i < country.Length; i++ ){
      //     for(let j = 0; j < medals.Length; j++){
      //         console.log(country[i]);
      //         console.log(medals[j]);  
      //         console.log(post);
      //         return null;
      //     }
      //   }
      // }
      return (
        <Card variant="outlined">
          <div className='Country' style={{ name:(country) }}>
          {<span style={{ fontWeight: 'bold' }}>{country.country}</span>}
          </div>
          <div>
            {this.getCountryMedalTotals(medals, country)} Testing
          </div>

          { medals.map( medal => <Medal 
          key={medal.id}
          id = {medal.id}
          countryId = {country.id}
          name = {medal.name}
          count = {country[medal.name]}
          addMedal = {addMedal}
          subtractMedal = {subtractMedal}
          ></Medal>)}

          {/* <Medal
          key={this.props.country.id}
          country = {this.props.country.country}
          medalType = {this.props.country.gold}
          ></Medal>4 */}
          {/* <div className='Country' style={{ gold:this.props.country.gold }}>
            {"Gold Medals: " + this.props.country.gold + " "}
            <Button variant='outlined' color='success' size='small' onClick={ () => this.props.addGold(this.props.country.id) }>+</Button>
            <Button variant='outlined' disabled={this.props.country.gold === 0} color='error' size='small' onClick={ () => this.props.minusGold(this.props.country.id)}>-</Button>
          </div>  */}
          </Card>
      );
    }
  }
  
  export default Country