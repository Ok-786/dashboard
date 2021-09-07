import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { Button } from '@material-ui/core';
import scriptCSS from '../css/scriptCSS';

export default function Widgetsm(props) {
    const classes = scriptCSS();
    var rows = [];
    var getLocalStorage = localStorage.getItem("User Data");
    getLocalStorage == null ? rows = [] : rows = JSON.parse(getLocalStorage);

    return (
        <div className={classes.widgetsm}>
            <h4 style={{textAlign:'center'}}>New Users</h4>

            <TableContainer component={Paper} style={{marginRight: "20px", marginBottom: "40px",backgroundImage: 'linear-gradient(to right, lightgrey, rgba(255,130,90,.3))',}} >
                <Table className={classes.table} aria-label="simple table" >
                    <TableHead style={{ background: 'lightgrey' }}>
                        <TableRow>
                            <TableCell width="1%">
                                <input type="checkbox" className={classes.checkBox} id="checkBox" onClick={props.toggle} />
                            </TableCell>
                            <TableCell width="1%">Id</TableCell>
                            <TableCell width="1%" align="right" >Name</TableCell>
                            <TableCell width="1%" align="right">Profile Pic</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody >
                        {rows.map((row,index) => (
                            <TableRow key={row.id} id={row.id}>
                                <TableCell width="1%" component="td" scope="row"><input type="checkbox" id={row.id} className={classes.checkBox} value={row.id} onClick={props.setChecked} /></TableCell>
                                <TableCell width="1%" style={{ color: 'blue' }} component="th" scope="row" id={`id${row.id}`}>{index}</TableCell>
                                <TableCell width="1%" style={{ color: 'blue' }} align="right" id={`fn${row.id}`}>{row.firstName+" "+row.lastName}</TableCell>
                                <TableCell width="1%" align="right" ><img id={`img${row.id}`} src={row.imageURL} alt={`profile pic of ${row.firstName}`} style={{ width: 60 }} /></TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>

            </TableContainer>
            <Button className={classes.delButton} onClick={function(event) {props.deleteBtn(); props.updateLocalStorageState()} }>Delete</Button>
        </div>
    )
}
