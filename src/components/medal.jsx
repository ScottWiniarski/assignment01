import { Component } from "react";

class Medal extends Component {

    render() {

        const { country, medalType} = this.props;

        return(
            <div className="Country" style={ {medalType:this.props.country} }>
                {this.props.country.country}
            </div>
        )
    }
}

export default Medal