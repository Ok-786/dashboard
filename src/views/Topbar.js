import React from 'react';
import makeStyles from '../css/scriptCSS';
import { Settings, ShoppingCart } from '@material-ui/icons';
import { Button, IconButton } from '@material-ui/core';
import { useHistory } from 'react-router-dom';

const Topbar = (props) => {
    const history=useHistory();
    const classes = makeStyles();
    const data=JSON.parse(localStorage.getItem("Login User"));
    
    if(data!==null && data.accountType!=="Admin") {
        const userName=data.firstName+" "+data.lastName;
        return (
            <div className={classes.topbar}>
                <div className={classes.topbarWrapper}>
                    <div className={classes.topLeft}>
                        <span className={classes.logo}>{userName}</span>
                    </div>
                    <div className={classes.topRight}>
                        <div className={classes.topbarIconContainer}>
                            <ShoppingCart/>
                            <span className={classes.topIconBadge}>{data.cart!==[]?data.cart.length:''}</span>
                        </div>
                        <div className={classes.topbarIconContainer}>
                            <Settings/>
                        </div>
                        <IconButton onClick={() => history.push("/Dashboard")}><img src={data.imageURL} alt={`profile pic of ${data.firstName}`} className={classes.topAvatar} /></IconButton>
                    </div>
                </div>
            </div>
        )
    }else if(data!==null && data.accountType==="Admin"){
        const userName=data.firstName+" "+data.lastName;
        return (
            <div className={classes.topbar}>
                <div className={classes.topbarWrapper}>
                    <div className={classes.topLeft}>
                        <span className={classes.logo}>{userName}</span>
                    </div>
                    <div className={classes.topRight}>
                        <div className={classes.topbarIconContainer}>
                            <Settings/>
                        </div>
                        <IconButton onClick={() => history.push("/Dashboard")}><img src={data.imageURL} alt={`profile pic of ${data.firstName}`} className={classes.topAvatar} /></IconButton>
                    </div>
                </div>
            </div>
        )
    }
    else {
        return(
            <div className={classes.topbar}>
                <div className={classes.topbarWrapper}>
                    <div className={classes.topLeft}>
                        <span className={classes.logo}>We Provide</span>
                    </div>
                    <div className={classes.topRight}>
                        <div className={classes.topbarIconContainer}>
                            <ShoppingCart/>
                        </div>
                        <Button variant="outlined" color="primary" style={{ marginRight: '30%', marginLeft:'5%' }} onClick={() => history.push("/Signin")}>Signin</Button>
                    </div>
                </div>
            </div>
        )
    }
}

export default Topbar;