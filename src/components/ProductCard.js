import React, { Component } from 'react';
import View from '../views/ProductCard';

class productCard extends Component {
    
    render(props) {
        return (
            <View addCart={this.props.addCart}/>
        );
    }
}

export default productCard;
