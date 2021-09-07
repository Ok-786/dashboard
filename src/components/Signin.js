import React, { Component } from 'react';
import View from '../views/Signin';
import { withRouter } from 'react-router-dom';



class Signin extends Component {
    state = {
        email: '',
        password: '',
        user: '',
        emailError: false,
        emailText:'',
        passwordError: false,
        passwordText: ''
    }

    setEmail = (e) => {
        this.setState({
            email: e.target.value
        })
    }
    setPassword = (e) => {
        this.setState({
            password: e.target.value
        })
    }
    setUser = (userIn) => {
        this.setState({
            user: userIn
        })
    }

    handleClick = e => {
        this.props.history.push("/Dashboard");
    };
    
    submitBtn = (e) => {
        var eError=false;
        var pError=false;
        var userIndex=null;
        var adminIndex=null;
        var storage1 = localStorage.getItem('User Data');
        var storage2 = localStorage.getItem('Admin Data');
        var userD;
        var userData = [];
        userData = JSON.parse(storage1);

        var adminData = [];
        adminData = JSON.parse(storage2);

        if(userData != null){
            var chk=null;
            userData.forEach((element, index )=> {
                if(element.email === this.state.email){
                    userD=element;
                    chk=index;
                }else {userIndex=null;}
            })
            userIndex=chk;
        }

        if(adminData != null){
            var chk1=null;
            adminData.forEach((element, index) => {
                if(element.email === this.state.email){
                    userD=element;
                    chk1=index;
                }else {adminIndex=null}
            })
            adminIndex=chk1;
        }

        console.log("asas"+adminIndex)
        if(adminIndex==null && userIndex==null){
            
                    
            eError=true
        }
        else{
            eError=false
        }
        if(adminIndex!=null){
            var user = adminData[adminIndex];
            if(user.password === this.state.password) {
                localStorage.setItem("Login User",JSON.stringify(userD));
                this.handleClick();
            }else{
                pError=true;
            }
        }else if(userIndex!=null){
            var user1 = userData[userIndex];
            if(user1.password === this.state.password) {
                localStorage.setItem("Login User",JSON.stringify(userD));
                this.handleClick();
            }else{
                pError=true;
            }
        }

        if(!pError && !eError){
            this.setState({
                
                password:'',
                email:'',
                emailError:false,
                emailText:"",
                passwordError:false,
                passwordText:""
            })
        }else if(eError) {
            this.setState({
                emailError:true,
                emailText:"Enter valid email",
                passwordError:false,
                passwordText:""
            })
        }
        else if(pError) {
            this.setState({
                passwordError:true,
                passwordText:"Your password is incorrect",
                emailError:false,
                emailText:""
            })
        }
    }

    render() {

        return (
            <View email={this.state.email} password={this.state.password} setEmail={this.setEmail} setPassword={this.setPassword} setUser={this.setUser} submitBtn={this.submitBtn} emailError={this.state.emailError} emailText={this.state.emailText} passwordError={this.state.passwordError} passwordText={this.state.passwordText}/>
        );
    }
}

export default withRouter(Signin);
