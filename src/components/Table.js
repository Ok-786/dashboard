import React from 'react';
import View from '../views/Table1';

class Table extends React.Component {
    
    
    toggleBtn() {
        var elm = document.getElementById("checkBox");
        document.querySelectorAll('input[type=checkbox]').forEach(e1 => {
            if (elm.checked === true) {
                e1.setAttribute('checked', 'checked');
                elm.removeAttribute('checked');
            }
            else {
                e1.removeAttribute('checked');
                elm.setAttribute('checked', 'checked');
            }
        });
    }
    
    render(props) {
        
        
        return (
            <View images={this.props.images} toggle={this.toggleBtn} editBtn={this.props.editBtn} setChecked={this.props.setChecked} deleteBtn={this.props.deleteBtn} />
        );
    }
}

export default Table;