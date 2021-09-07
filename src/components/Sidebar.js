import React, { Component } from 'react';
import View from '../views/Sidebar';

class Sidebar extends Component {
    render() {
        return (
            <View loggedin={this.props.loggedin}/>
        );
    }
}

export default Sidebar;
