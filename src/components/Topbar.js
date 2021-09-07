import React, { Component } from 'react';
import View from '../views/Topbar';

class Topbar extends Component {
    render() {
        return (
            <View loggedin={this.props.loggedin} cart={this.props.cart}/>
        );
    }
}

export default Topbar;
