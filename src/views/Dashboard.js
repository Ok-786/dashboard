import React from 'react';
import Home from '../components/pages/Home';
import Sidebar from '../components/Sidebar';
import Topbar from '../components/Topbar';
import scriptCSS from '../css/scriptCSS';
import { useState, useEffect } from 'react';

const Dashboard =(props) => {
    const classes = scriptCSS();
    const [loggedin, changeLoggedin]=useState('');

    useEffect(() => {
        var data = JSON.parse(localStorage.getItem("Login User"));
            if(data!=null){
                changeLoggedin(data.accountType)
            }
      },[]);
    
    return (
        <div className={classes.topContainer}>
            <Topbar/>
            <div className={classes.container}>
                <Sidebar loggedin={loggedin}/>
                <Home updateLocalStorageState={props.updateLocalStorageState} setId={props.setId} editBtn={props.editBtn} setChecked={props.setChecked} deleteBtn={props.deleteBtn} loggedin={loggedin}/>
            </div>
        </div>
    )
}

export default Dashboard;