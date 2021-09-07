import React from 'react';
import { Grid, Paper } from '@material-ui/core';
import SignUpForm from '../components/SignUpForm';
import useStyles from '../css/scriptCSS';

const RegForm =(props) => {
    const classes = useStyles();
    
    return (
        <div >
            <Grid container className={classes.centerCon}>
                <Paper elevation={10} className={classes.paperStyle}>
                    <Grid item className={classes.centerCon}>
                        <SignUpForm id={props.id} password={props.password} firstName={props.firstName} lastName={props.lastName} email={props.email} gender={props.gender}  setFirstName={props.setFirstName} setLastName={props.setLastName} setEmail={props.setEmail} setGender={props.setGender} encodeImageFileAsURL={props.encodeImageFileAsURL} submitFun={props.submitFun} setId={props.setId} setLocaleStorage={props.setLocaleStorage} updateLocalStorageState={props.updateLocalStorageState} accountType={props.accountType} setAccountType={props.setAccountType} setAdminId={props.setAdminId} setPassword={props.setPassword}/>
                    </Grid>
                </Paper>
            </Grid>
        </div>
    );
}

export default RegForm;
