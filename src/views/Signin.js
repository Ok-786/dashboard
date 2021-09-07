import React from 'react';
import { Paper, Avatar, Typography, TextField, Button, FormControl, Grid } from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import useStyle from '../css/scriptCSS';

const SignUpForm = (props) => {
    const classes = useStyle();
    const history = useHistory();
    

    return (
        <div>
            <Grid container className={classes.centerCon}>
                {/* <Paper  className={classes.paperStyle} style={{paddingBlock:'20%'}}> */}
                    <Grid item className={classes.centerCon}>
                        <form className={classes.root}>
                            <Paper elevation={10} className={classes.formStyle} style={{marginBlock:'50%', paddingTop:'15%', width:'40vh', borderRadius:'10%', boxShadow: ' -17px 5px 125px 55px rgba(0,0,0,0.37) inset',}} >
                                <Avatar className={classes.avatarBackground} />
                                <Typography variant='h4' style={{ fontWeight: 'bold' }}>
                                    Sign in
                                </Typography>
                                <FormControl >
                                    <TextField style={{ marginTop: '35', width:'100%', backgroundColor:'none' }}
                                        name="email"
                                        type="email"
                                        // variant="outlined"
                                        label="Email"
                                        placeholder="123@gmail.com"
                                        error={props.emailError}
                                        helperText={props.emailText}
                                        value={props.email}
                                        onChange={props.setEmail}
                                    />
                                    <TextField style={{ marginTop: 15 , backgroundColor:'none'}}
                                        name="password"
                                        // variant="outlined"
                                        label="Password"
                                        placeholder="Enter password"
                                        type="password"
                                        value={props.password}
                                        onChange={props.setPassword}
                                        error={props.passwordError}
                                        helperText={props.passwordText}
                                    />

                                    <Button
                                        style={{marginTop:'50px', backgroundColor:'none'}}
                                        variant="contained"
                                        color='primary'
                                        onClick={props.submitBtn}
                                    >
                                        Submit
                                    </Button>

                                    <p>Don't have an account? <span className={classes.signinMessage} onClick={() => history.push("/Signup")} >Signup</span></p>
                                </FormControl>

                            </Paper>
                        </form>
                    </Grid>
                {/* </Paper> */}
            </Grid >
        </div >
    );
}

export default SignUpForm;
