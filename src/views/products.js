import { Button, IconButton, TextField } from '@material-ui/core';
import { Add, Delete, Edit } from '@material-ui/icons';
import React from 'react'
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import scriptCSS from '../css/scriptCSS';
import CartItems from './CartItems';

export default function products(props) {
    const classes = scriptCSS();
    var rows = [];
    var getLocalStorage = localStorage.getItem("Product Data");
    getLocalStorage == null ? rows = [] : rows = JSON.parse(getLocalStorage);

    var rows1 = [];
    var getLocalStorage1 = localStorage.getItem("Login User");
    getLocalStorage1 == null ? rows1 = [] : rows1 = JSON.parse(getLocalStorage1);


    return (
        <div>
            <div className={classes.homeWidgets} style={{ marginTop: '10%' }}>
                <div className={classes.widgetlg}>
                    {props.loggedin === "Admin" ?
                        <div>
                            <h3 style={{ display: 'flex', justifyContent: 'center', marginBottom: '5%' }}>Products Management</h3>
                            <div className={classes.productInsertion}>
                                <TextField value={props.productName} onChange={props.setProductName} InputLabelProps={{ shrink: true }} className={classes.widgetlgTextField} id="pName" label="Product Name" />
                                <TextField value={props.productQuantity} onChange={props.setProductQuantity} InputLabelProps={{ shrink: true }} className={classes.widgetlgTextField} id="pQuantity" label="Quantity" />
                                <TextField value={props.price} onChange={props.setPrice} InputLabelProps={{ shrink: true }} className={classes.widgetlgTextField} id="pPrice" label="Price" />
                                <label className={classes.file}>
                                    <input type='file' name="uploadImg" className={classes.uploadImg} id="uploadImg" onChange={props.encodeImageFileAsURL} />
                                </label>
                                <IconButton id="productBtn" onMouseDown={props.setId} onClick={function (event) { props.submitFun(event); props.updateLocalStorageState(); }}><Add style={{ backgroundColor: '#efff', borderRadius: '50%', width: '35px', height: '35px' }} /></IconButton>

                            </div>
                            <TableContainer component={Paper} style={{ marginRight: "20px", marginBottom: "40px", }} >
                                <Table className={classes.table} aria-label="simple table" style={{ width: '90%', marginInline: '5%', backgroundImage: 'linear-gradient(to right, lightgrey, rgba(255,130,90,.3))', }} >
                                    <TableHead style={{ background: 'lightgrey' }}>
                                        <TableRow>

                                            <TableCell width="1%">Id</TableCell>
                                            <TableCell width="20%" align="right" >Product Name</TableCell>
                                            <TableCell width="20%" align="right">Qunatity</TableCell>
                                            <TableCell width="20%" align="right">Price</TableCell>
                                            <TableCell width="20%" align="right">Image</TableCell>
                                            <TableCell width="1%" align="right"></TableCell>
                                            <TableCell width="1%" align="right"></TableCell>
                                        </TableRow>
                                    </TableHead>
                                    <TableBody >
                                        {rows.map((row, index) => (
                                            <TableRow key={row.id} id={row.id}>

                                                <TableCell width="1%" style={{ color: 'blue' }} component="th" scope="row" id={`id${row.id}`}>{index}</TableCell>
                                                <TableCell width="20%" style={{ color: 'blue' }} align="right" id={`fn${row.id}`}>{row.productName}</TableCell>
                                                <TableCell width="20%" style={{ color: 'blue' }} align="right" id={`fn${row.id}`}>{row.productQuantity}</TableCell>
                                                <TableCell width="20%" style={{ color: 'blue' }} align="right" id={`fn${row.id}`}>{row.price}</TableCell>
                                                <TableCell width="1%" align="right" ><img id={`img${row.id}`} src={row.imageURL} alt={`profile pic of ${row.firstName}`} style={{ width: 60 }} /></TableCell>
                                                <TableCell><IconButton onClick={() => props.deleteTask(index)}><Delete style={{ color: 'red' }} /></IconButton></TableCell>
                                                <TableCell><IconButton onClick={() => props.editTask(index)}><Edit style={{ color: 'gold' }} /></IconButton></TableCell>
                                            </TableRow>
                                        ))}
                                    </TableBody>
                                </Table>

                            </TableContainer>

                        </div>
                        :rows1.cart!=null?
                        <div>
                            <h3 style={{ display: 'flex', justifyContent: 'center', marginBottom: '5%' }}>User Cart</h3>
                            <TableContainer component={Paper} style={{ marginRight: "20px", }} >
                                <Table className={classes.table} aria-label="simple table" style={{ width: '90%', marginInline: '5%' }} >
                                    <TableHead style={{ background: 'lightgrey' }}>
                                        <TableRow>

                                            <TableCell width="1%">Id</TableCell>
                                            <TableCell width="20%" align="right" >Product Name</TableCell>
                                            <TableCell width="20%" align="right">Qunatity</TableCell>
                                            <TableCell width="20%" align="right">Price</TableCell>
                                        </TableRow>
                                    </TableHead>
                                    <TableBody >
                                        {rows1.cart.map((row, index) => (
                                            <TableRow key={row.id} id={index}>

                                                <TableCell width="1%" style={{ color: 'blue' }} component="th" scope="row" id={`id${index}`}>{index}</TableCell>
                                                <TableCell width="20%" style={{ color: 'blue' }} align="right" id={`fn${index}`}>{row.productName}</TableCell>
                                                <TableCell width="20%" style={{ color: 'blue' }} align="right" id={`fn${index}`}>{row.productQuantity}</TableCell>
                                                <TableCell width="20%" style={{ color: 'blue' }} align="right" id={`fn${index}`}>{row.price}</TableCell>
                                            </TableRow>
                                        ))}
                                    </TableBody>
                                </Table>

                            </TableContainer>
                            <Button variant="outlined" color="primary" style={{ marginTop: '5%' }} onClick={() => alert("Your items will be dispatched soon!!")}>Checkout</Button>
                        </div>
                        :""
                    }
                </div>
            </div>
            {props.loggedin === "Admin" ?
                <div className={classes.homeWidgets} style={{ marginTop: '10%' }}>
                    <div className={classes.widgetlg}>
                        <CartItems />
                    </div>
                </div> : ""
            }
        </div>
    )
}
