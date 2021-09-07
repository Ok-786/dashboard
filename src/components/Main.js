import React, { Component } from 'react';
import View from '../views/Main';

var storage= JSON.parse(localStorage.getItem("Login User"));
var userStorage= JSON.parse(localStorage.getItem("User Data"));
class Main extends Component {
    state = {
        cart:0
    }
    componentDidMount() {    
        if(storage!==null) {
            storage= JSON.parse(localStorage.getItem("Login User"));
            this.setState({cart:storage.cart.length})

        }
    }

    addCart=(e)=> {
        storage= JSON.parse(localStorage.getItem("Login User"));
        userStorage= JSON.parse(localStorage.getItem("User Data"));
        if(storage!==null) {
            var products=localStorage.getItem("Product Data");
            if(products!==null) {
                products=JSON.parse(products);
                products.forEach((element,index) => {
                    if(index === e)
                    {   
                        storage.cart.push(element);
                    }
                });
            }
        }
        if(userStorage!=null) {
            userStorage.forEach((element,index) => {

                console.log("red")
                if(storage.id===element.id)
                {
                    element.cart=storage.cart;
                }
            });
            console.log(userStorage)
            localStorage.setItem("Login User", JSON.stringify(storage))
            localStorage.setItem("User Data", JSON.stringify(userStorage))
            this.setState({cart:storage.cart.length})
        }

    }

    render() {
        return (
            <View addCart={this.addCart} cart={this.state.cart}/>
        );
    }
}

export default Main;
