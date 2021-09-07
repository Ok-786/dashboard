import React, { Component } from 'react';
import View from '../views/Featuredinfo.js';

class Featuredinfo extends Component {
    render(props) {
        return (
            <View amount={this.props.amount} count={this.props.count}/>
        );
    }
}

export default Featuredinfo;
