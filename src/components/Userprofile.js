import React, { Component } from 'react';
import View from '../views/Userprofile';

var data = JSON.parse(localStorage.getItem("Login User"));

class Userprofile extends Component {
    state={
        firstName:'',
        lastName:'',
        email:'',
        gender:'',
        password:''
    }

    componentDidMount() {
        data = JSON.parse(localStorage.getItem("Login User"));
        this.setState({
            firstName:data.firstName,
            lastName:data.lastName,
            email:data.email,
            gender:data.gender,
            password:data.password
        })
    }

    setFirstName = (e) => {
        this.setState({
            firstName:e.target.value
        })
    }
    setLastName = (e) => {
        this.setState({ lastName: e.target.value })
    };
    setEmail = (e) => {
        this.setState({ email: e.target.value })
    };
    setGender = (e) => {
        this.setState({ gender: e.target.value })
    }
    setPassword = (e) => {
        this.setState({ password: e.target.value })
    }
    
    
    openForm() {
        document.getElementById("myForm").style.display = "block";
    }
    closeForm=()=> {
        document.getElementById("myForm").style.display = "none";
        var value ={
            firstName:this.state.firstName,
            lastName:this.state.lastName,
            email:this.state.email,
            gender:this.state.gender,
            password:this.state.password,
            accountType:"User",
            imageURL:data.imageURL,
            id:data.id
        }
        var storage = JSON.parse(localStorage.getItem("User Data"));
        storage.splice(data.id,1,value);

        localStorage.setItem("User Data", JSON.stringify(storage));
        localStorage.setItem("Login User", JSON.stringify(value));
    }
    render() {
        return (
            <View firstName={this.state.firstName} setFirstName={this.setFirstName} openForm={this.openForm} closeForm={this.closeForm} password={this.state.password}  lastName={this.state.lastName} email={this.state.email} gender={this.state.gender}  setLastName={this.setLastName} setEmail={this.setEmail} setGender={this.setGender} setPassword={this.setPassword}/>
        );
    }
}

export default Userprofile;
