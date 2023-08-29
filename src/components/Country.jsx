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
          //console.log(counter);
          
        })
        return counter;
          
        
      }

    render() { 
      const { medals, country, addMedal, subtractMedal} = this.props;
      
      return (
        <Card variant="outlined">
          <div className='Country' style={{ name:(country) }}>
          {<span style={{ fontWeight: 'bold' }}>{country.country}</span>}
          {": " + this.getCountryMedalTotals(medals, country) + " Total Medal(s)"}
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
          </Card>
      );
    }
  }
  
  export default Country