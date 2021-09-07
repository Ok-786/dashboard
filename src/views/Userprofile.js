import { Button, IconButton, } from '@material-ui/core';
import { Edit } from '@material-ui/icons';
import React from 'react'
import scriptCSS from '../css/scriptCSS';

export default function Userprofile(props) {
    const classes = scriptCSS();
    const data1 = JSON.parse(localStorage.getItem("Login User")).id;
    const data= JSON.parse(localStorage.getItem("User Data"))[data1];

    return (
        <div style={{marginTop:'1px',
        boxShadow: '1px 0px 12px 0px rgba(0,0,0,0.15)',
        padding:'20px',}}>
            <h3 style={{textAlign:'center'}}>User Profile</h3>
            <div className={classes.userProfile}>
                <div className={classes.profileLeft}>
                    <img src={data.imageURL} alt={`profile pic of ${data.firstName}`} className={classes.profilePic} />
                </div>
                <div className={classes.profileRight}>
                    <h5>Name:<span style={{marginLeft:'4px', color:'red'}}>{props.firstName+" "+props.lastName}</span></h5>
                    
                    <h5>Email:<span style={{marginLeft:'4px', color:'red'}}>{props.email}</span></h5>
                    <h5>Gender:<span style={{marginLeft:'4px', color:'red'}}>{props.gender}</span></h5>
                    <h5>Password:<span style={{marginLeft:'4px', color:'red'}}>{props.password}</span></h5>
                    <IconButton style={{marginLeft:'95%', color:'white',borderRadius:'10%,5%', backgroundColor:'#ef9b0f'}} onClick={props.openForm}><Edit/></IconButton>
                </div>

                <div className={classes.formPopup} id="myForm">
                    <form className={classes.formContainer}>
                        <h1 style={{textAlign:'center'}}>Edit Profile</h1>

                        <label ><b>First Name</b></label>
                        <input type="text" placeholder="Enter First Name" className={classes.formContainerT} name="text1" required onChange={props.setFirstName} value={props.firstName}/>

                        <label ><b>Last Name</b></label>
                        <input type="text" placeholder="Enter Last Name" className={classes.formContainerT} name="text2" required onChange={props.setLastName} value={props.lastName}/>

                        <label ><b>Gender</b></label>
                        <input type="text" placeholder="Enter Gender" className={classes.formContainerT} name="text3" required onChange={props.setGender} value={props.gender}/>

                        <label ><b>Email</b></label>
                        <input type="text" className={classes.formContainerT} placeholder="Enter Email" name="email" required onChange={props.setEmail} value={props.email}/>

                        <label ><b>Password</b></label>
                        <input type="password" placeholder="Enter Password" className={classes.formContainerT} name="psw" required onChange={props.setPassword} value={props.password}/>


                        <Button type="button" variant="outlined" color="primary" onClick={props.closeForm} className={classes.formContainerBtn}>Confirm</Button>
                    </form>
                </div>
            </div>
            
            
        </div>
    )
}
