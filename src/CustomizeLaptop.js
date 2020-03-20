import React from "react";
import Items from "./Items";
import './App.css';

export default class CustomizeLaptop extends React.Component {
    render() {
        
    
          const features = Object.keys(this.props.features).map((feature, idx) => {
            
            const featureHash = feature + '-' + idx;
         
            return (
              <fieldset className="feature" key={featureHash}>
                <legend className="feature__name">
                  <h3>{feature}</h3>
                </legend>
                <Items
                feature={feature}
                idx={idx}
                features={this.props.features} 
                selected={this.props.selected}
                updateFeature={this.props.updateFeature}/>
              </fieldset>
            );
          });
 return ( <form className="main__form">
 <h2>Customize your laptop</h2>
 {features}
</form>
 )
}
}