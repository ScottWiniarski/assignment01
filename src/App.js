import React, { Component } from 'react';
import './App.css';
import Country from './components/Country';

class App extends Component {
  state = {
    countries: [
      {id: 1, country: 'United States', gold: 5, silver: 3, bronze: 6},
      {id: 2, country: 'Canada', gold: 3, silver: 5, bronze: 3},
      {id: 3, country: 'England', gold: 4, silver: 6, bronze: 2},
      {id: 4, country: 'Spain', gold: 6, silver: 3, bronze: 4},
    ],

    medals: [
      {id: 1, name: 'gold'},
      {id: 2, name: 'silver'},
      {id: 3, name: 'bronze'},
    ]
  }

  postTotals = () => {
    let counter = 0;
    console.log(this.state.medals);

    //return this.state.countries.reduce((a,b) => a + b.gold, 0);
    
    //console.log(this.state.countries);
    this.state.medals.forEach(medal => {
      //console.log(medal.name);
      //console.log(this.state.countries.reduce((a,b) => a + b[medal.name], 0));
      counter += this.state.countries.reduce((a,b) => a + b[medal.name], 0);
      //console.log(this.state.countries[medal.name]);
      //console.log(counter);
    })
    return counter;
  }

  // since we can't use filter methods, we'll use the [...] spread function to copy an existing array. 
  handleAddition = (countryId, medalName) => {
    const countriesMutable = [...this.state.countries];
    const idx = countriesMutable.findIndex( c => c.id === countryId);
    // const desiredCountry = countriesMutable[idx];
    // desiredCountry[medalName] += 1;
    countriesMutable[idx][medalName] += 1;
  
    // this.setState({desiredCountry:countriesMutable});
    this.setState({countriesMutable:this.state.countries});
  }

  handleSubtraction = (countryId, medalName) => {
    const minusCountries = [...this.state.countries];
    const idx = minusCountries.findIndex( c => c.id === countryId);

    const diminishCountry = minusCountries[idx];
    diminishCountry[medalName] -= 1 && diminishCountry[medalName] > 0;
    
    this.setState({diminishCountry:minusCountries});
    this.setState({minusCountries:this.state.countries});
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          Awards:
        </header>
        <div>
          Grand Totals for All Countries: - {this.postTotals()} - Medal(s)
        </div>
        { this.state.countries.map(country =>
        <Country
          key={country.id}
          country = {country}
          medals = {this.state.medals}
          addMedal = {this.handleAddition}
          subtractMedal = {this.handleSubtraction}
          // addGold = {this.handleAddition}
          // minusGold = {this.handleSubtraction}
          />
          )}
      </div>
    );
  }
}

export default App;
