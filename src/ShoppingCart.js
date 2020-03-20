import React from "react";
import Summary from "./Summary";
import Total from "./Total"
import './App.css';

export default class ShoppingCart extends React.Component {
    render() {
        return (<section className="main__summary">
            <h2>Your cart</h2>
            <Summary selected={this.props.selected}/>
            <Total selected={this.props.selected} currency={this.props.currency}/>
         </section>
        )
    }


}

