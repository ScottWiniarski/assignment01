import React, { Component } from 'react';
import './App.css';
import Country from './components/country';
import Medal from './components/medal';

class App extends Component {
  state = {
    countries: [
      {id: 1, country: 'United States', gold: 5, silver: 3, bronze: 6},
      {id: 2, country: 'Canada', gold: 3, silver: 5, bronze: 3},
      {id: 3, country: 'England', gold: 4, silver: 6, bronze: 2},
      {id: 4, country: 'Spain', gold: 6, silver: 3, bronze: 4},
    ]
  }

  // since we can't use filter methods, we'll use the [...] spread function to copy an existing array. 
  handleAddition = (countryId) => {
    const countriesMutable = [...this.state.countries];
    const idx = countriesMutable.findIndex( c => c.id === countryId);
    countriesMutable[idx].gold += 1;
    this.setState({countriesMutable:this.state.countries});
  }

  handleSubtraction = (countryId) => {
    const minusCountries = [...this.state.countries];
    const idx = minusCountries.findIndex( c => c.id === countryId);
    minusCountries[idx].gold -= 1 && minusCountries[idx].gold > 0;
    this.setState({minusCountries:this.state.countries});
  }

  getGoldMedalTotals() {
    return this.state.countries.reduce((a,b) => a + b.gold, 0);
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          Awards: <br></br>
          Total Gold: {this.getGoldMedalTotals()} <br></br>
          Total Silver: <br></br>
          Total Bronze: 
        </header>
        { this.state.countries.map(country =>
        <Country
          key={country.id}
          country = {country}
          addGold = {this.handleAddition}
          minusGold = {this.handleSubtraction}
          />
          )}
          {/* <Medal
            key={country.id}
            country = {country}
            medalType = {gold}
          >/</Medal>       */}
      </div>
    );
  }
}

export default App;
