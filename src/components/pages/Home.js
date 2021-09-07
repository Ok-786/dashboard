import React, { Component } from 'react';
import View from '../../views/pages/Home';

class Home extends Component {
    
    render(props) {
        return (
            <View updateLocalStorageState={this.props.updateLocalStorageState} setId={this.props.setId} editBtn={this.props.editBtn} setChecked={this.props.setChecked} deleteBtn={this.props.deleteBtn} loggedin={this.props.loggedin}/>
        );
    }
}

export default Home;
