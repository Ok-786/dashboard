import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@material-ui/core';
import React from 'react'
import scriptCSS from '../css/scriptCSS';

export default function CartItems(props) {
    const classes = scriptCSS();
    var elements = [];
    var getLocalStorage = localStorage.getItem("User Data");
    getLocalStorage == null ? elements = [] : elements = JSON.parse(getLocalStorage);


    return (
        <div>
            <h3 style={{ display: 'flex', justifyContent: 'center', marginBottom: '5%' }}>User Orders</h3>
            {elements.map((rows, index) => (
                <div>
                    <div style={{backgroundColor:'#afffff17',boxShadow: '2px 4px 13px 7px rgba(0,0,0,0.75)', display:'flex', width:'98%', justifyContent:'center', padding:'1%', marginTop:'10%'}}>
                    <img src={rows.imageURL} alt={`profile pic of ${rows.firstName}`} className={classes.topAvatar} />
                    <h1 style={{marginLeft:'1%', fontSize:'18px'}}>{rows.firstName+" "+rows.lastName}</h1>
                    </div>
                    <TableContainer component={Paper} style={{ marginRight: "20px", backgroundImage: 'linear-gradient(to right, lightgrey, rgba(255,130,90,.3))', marginBottom: "40px",}} >
                        <Table className={classes.table} aria-label="simple table" style={{ width: '95%', marginInline: '5%' }} >
                            <TableHead style={{ background: 'lightgrey' }}>
                                <TableRow>

                                    <TableCell width="1%">Id</TableCell>
                                    <TableCell width="20%" align="right" >Product Name</TableCell>
                                    <TableCell width="20%" align="right">Qunatity</TableCell>
                                    <TableCell width="20%" align="right">Price</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody >
                                {rows.cart.map((row, index) => (
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
                </div>
            ))}
        </div>
    )
}
