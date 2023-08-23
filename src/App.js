import React, { Component } from 'react';
import './App.css';
import Country from './components/country';

class App extends Component {
  state = {
    countries: [
      {id: 1, country: 'United States', gold: 5},
      {id: 2, country: 'Canada', gold: 3},
      {id: 3, country: 'England', gold: 4},
      {id: 4, country: 'Spain', gold: 6},
    ]
  }

  // since we can't use filter methods, we'll use the [...] spread function to copy
  // an existing array. Using a for loop to search through the array to find the desired countryId,
  // which itself is pushed from the Country component. 
  handleAddition = (countryId) => {
    console.log(countryId);
    for(let i = 0; i<this.state.countries.length; i++){
      if(this.state.countries[i].id === countryId){
        let countries = [...this.state.countries];
        countries[i].gold++;
        this.setState({countries:countries});
        break;
      }
    }
  }

  handleSubtraction = (countryId) => {
    console.log(countryId);
    for(let i = 0; i < this.state.countries.length; i++){
      if(this.state.countries[i].id === countryId){
        let countries = [...this.state.countries];
        countries[i].gold--
        if(countries[i].gold <= 0){
          countries[i].gold = 0;
          this.setState({countries:countries});
          break;
        }
        else{
          this.setState({countries:countries});
        }
      }
    }
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          Awards
        </header>
        { this.state.countries.map(country =>
        <Country
          key={country.id}
          country = {country}
          addGold = {this.handleAddition}
          minusGold = {this.handleSubtraction}
          />)}      
      </div>
    );
  }
}

export default App;
