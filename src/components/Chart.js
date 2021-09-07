import React, { Component } from 'react';
import View from '../views/Chart';

class chart extends Component {
    render(props) {
        return (
            <View data={this.props.data} title={this.props.title} dataKey1={this.props.dataKey1}/>
        );
    }
}

export default chart;
