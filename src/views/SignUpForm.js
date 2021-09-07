import React from 'react';
import { Paper, Avatar, Typography, TextField, FormLabel, RadioGroup, FormControlLabel, Radio, Button, FormControl, MenuItem, Menu } from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import useStyle from '../css/scriptCSS';

const SignUpForm = (props) => {
    const classes = useStyle();
    const history = useHistory();
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [type, setType] = React.useState(null);

    
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
      };

    const handleClose = (e) => {
        setType(e.target.innerText)
        props.setAccountType(e.target.innerText);
        setAnchorEl(null);
      };

    return (
        <div>
            <form className={classes.root}>
                <Paper elevation={10} className={classes.formStyle} >
                    <Avatar className={classes.avatarBackground} />
                    <Typography variant='h4' style={{ fontWeight: 'bold' }}>
                        Sign up
                    </Typography>
                    <FormControl >
                        <TextField
                            style={{ marginTop: 20 }}
                            className="fn"
                            name="firstName"
                            variant="outlined"
                            label="First Name"
                            placeholder="Enter First name"
                            value={props.firstName}
                            onChange={props.setFirstName}
                            required
                        />
                        <TextField style={{ marginTop: 15 }}
                        required
                            name="lastName"
                            variant="outlined"
                            label="Last Name"
                            placeholder="Enter Last name"
                            value={props.lastName}
                            onChange={props.setLastName}
                        />
                        <TextField style={{ marginTop: 15 }}
                        required
                            name="email"
                            type="email"
                            variant="outlined"
                            label="Email"
                            placeholder="123@gmail.com"

                            value={props.email}
                            onChange={props.setEmail}
                        />
                        <TextField style={{ marginTop: 15 }}
                            name="password"
                            variant="outlined"
                            label="Password"
                            placeholder="Enter password"
                            type="password"
                            value={props.password}
                            onChange={props.setPassword}
                        />
                        <input type='file' name="uploadImg" id="uploadImg" onChange={props.encodeImageFileAsURL} />



                        <FormLabel style={{ marginTop: "10%" }}>
                            Choose Gender
                        </FormLabel>
                        <RadioGroup
                            row={true}
                            name="gender"
                            value={props.gender}
                            onChange={props.setGender}
                            style={{ justifyContent: "center", marginTop:'1%' }}
                        >
                            <FormControlLabel value="male" control={<Radio />} label="Male" />
                            <FormControlLabel value="female" control={<Radio />} label="Female" />
                            <FormControlLabel value="other" control={<Radio />} label="Other" />
                        </RadioGroup>

                        <FormControl className={classes.formControl} >
                            
                        <Button aria-controls="simple-menu" aria-haspopup="true" style={{backgroundColor:'#efe4', marginBlock:'6%'}} onClick={handleClick}>{type? type:"Signup as" }</Button>
                            <Menu
                                id="simple-menu"
                                anchorEl={anchorEl}
                                keepMounted
                                open={Boolean(anchorEl)}
                                onClose={handleClose}
                            >
                                <MenuItem value="" disabled>
                                    Signup as
                                </MenuItem>
                                <MenuItem value="Admin" name="Admin" onClick={handleClose}>Admin</MenuItem>
                                <MenuItem value="User" name="User" onClick={handleClose}>User</MenuItem>
                            </Menu>
                        </FormControl>
                        {/* {console.log(props.accountType)} */}

                        <Button
                            variant="contained"
                            color='primary'
                            onMouseDown={function () { props.setId(); props.setAdminId(); }}
                            onClick={function (event) { props.submitFun(event); props.updateLocalStorageState(); }}
                        >
                            Submit
                        </Button>

                        <p>Already have an account? <span className={classes.signinMessage} onClick={() => history.push("/Signin")} >Signin</span></p>
                    </FormControl>

                </Paper>
            </form>
        </div>
    );
}

export default SignUpForm;
