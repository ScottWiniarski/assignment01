import { Component } from "react";
import { Button, Card } from '@mui/material';

class Medal extends Component {

    render() {

        const { name, countryId, count, addMedal, subtractMedal} = this.props;

        // function signOut(){
        //  console.log({name});
        // };

        return(
            <div className="Medal" >
                <div className='Medal'>
                    {name.charAt(0).toUpperCase() + name.slice(1)} Medals: {count} &nbsp; 
                    {/* <Button variant='outlined' color='success' size='small' onClick={ signOut } >+</Button> */}
                    <Button variant='outlined' color='success' size='small' onClick={() => addMedal(countryId, name) } >+</Button>
                    <Button variant='outlined' disabled={count <= 0} color='error' size='small' onClick={ () => subtractMedal(countryId, name)} >-</Button>
                    
          
                </div>
            </div>
        
        )
    }
}

export default Medal