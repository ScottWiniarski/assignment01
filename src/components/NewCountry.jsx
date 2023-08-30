import React, { Component } from 'react';

class NewCountry extends Component{
    state = {
        showForm: false,
        country: "",
    }
    toggleForm = () => this.setState({showForm : !this.state.showForm});
    handleChange = (e) => this.setState({ [e.target.name]: e.target.value });
    //saveCountry = () => console.log(`country: ${this.state.country}`); 
    saveCountry = () => {
        const {country} = this.state;
        this.props.onAdd(country);
        this.toggleForm();
    }

    render() { 
        const {showForm, country} = this.state;
        return (
          <div className = 'New-Country'>
            {
                (this.state.showForm) ?
                <form>
              <input 
                type="text"
                id="country"
                name = 'country'
                value={country}
                onChange={this.handleChange}
                placeholder="New Country"
                autoFocus
                autoComplete="off" />
              <button
                disabled={country.trim().length === 0}
                onClick={this.saveCountry}
                type="button">
                    Save
              </button>
              <button onClick={this.toggleForm} type="button">Cancel</button>
            </form>
            :
            <span onClick={this.toggleForm} className='Toggle-form'>Add New Country</span>
            }    
          </div>
        );
      }
}

export default NewCountry;