import { IconButton } from '@material-ui/core';
import { Delete } from '@material-ui/icons';
import React from 'react'
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { Button } from '@material-ui/core';
import scriptCSS from '../css/scriptCSS';

import { useHistory } from 'react-router-dom';

export default function Widgetlg(props) {
    const classes = scriptCSS();
    var rows = [];
    var getLocalStorage = localStorage.getItem("Admin Data");
    getLocalStorage == null ? rows = [] : rows = JSON.parse(getLocalStorage);
    var history = useHistory();

    return (
        <div className={classes.widgetlg}>
            <h4 style={{textAlign:'center'}}>New Admins</h4>
            <TableContainer component={Paper} style={{marginRight: "20px", backgroundImage: 'linear-gradient(to right, lightgrey, rgba(255,130,90,.3))', marginBottom: "40px",}} >
                <Table className={classes.table} aria-label="simple table" style={{width:'90%', margin:'5%'}} >
                    <TableHead style={{ background: 'lightgrey' }}>
                        <TableRow>
                            
                            <TableCell width="10%">Id</TableCell>
                            <TableCell width="10%" align="right" >Name</TableCell>
                            <TableCell width="10%" align="right">Emali</TableCell>
                            <TableCell width="10%" align="right">Picture</TableCell>
                            <TableCell width="1%" align="right"></TableCell>
                            {/* <TableCell width="1%" align="right"></TableCell> */}
                        </TableRow>
                    </TableHead>
                    <TableBody >
                        {rows.map((row,index) => (
                            <TableRow key={row.id} id={row.id}>
                                
                                <TableCell width="10%" style={{ color: 'blue' }} component="th" scope="row" id={`id${row.id}`}>{index}</TableCell>
                                <TableCell width="10%" style={{ color: 'blue' }} align="right" id={`fn${row.id}`}>{row.firstName + " " + row.lastName}</TableCell>
                                <TableCell width="10%" style={{ color: 'blue' }} align="right" id={`fn${row.id}`}>{row.email}</TableCell>
                                <TableCell width="1%" align="right" ><img id={`img${row.id}`} src={row.imageURL} alt={`profile pic of ${row.firstName}`} style={{ width: 60 }} /></TableCell>
                                <TableCell><IconButton onClick={()=>props.deleteTask(index)} style={{color:'red'}}><Delete/></IconButton></TableCell>
                                {/* <TableCell><IconButton onClick={()=>props.editTask(index)}><Edit/></IconButton></TableCell> */}
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>

            </TableContainer>
            <Button className={classes.delButton} onClick={function (event) { props.deleteBtn(); history.push("/Signin") }} >Delete All</Button>
        </div>
    )
}
