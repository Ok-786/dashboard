import { IconButton } from '@material-ui/core';
import {ShoppingCart } from '@material-ui/icons';
import React from 'react';
import { useHistory } from 'react-router';
import scriptCSS from '../css/scriptCSS';

export default function ProductCard(props) {
    var loggedin= JSON.parse(localStorage.getItem("Login User"));
    var storage = JSON.parse(localStorage.getItem("Product Data"));
    var classes = scriptCSS();
    const history=useHistory();
    
    if (storage !== null) {
        return(
        <div className={classes.mainContent}>
            {storage.map((element,index) => (
                <div className={classes.card}  key={element.id}>
                    <div className={classes.cardImg}>
                        <img id={`img${element.id}`} src={element.imageURL} alt={`profile pic of ${element.name}`} style={{ width: 100 }} />
                    </div>
                    <div className={classes.cardHeader}>
                        <h2 style={{fontSize:'24px', margin:'8px 0', justifyContent:'center', textAlign:'center', paddingBottom:'5px', textTransform:'uppercase'}}>{element.productName}</h2>
                        <p style={{fontSize:'16px' ,opacity:'.5', margin:'8px 0', textAlign:'center'}}>{element.description}asdsadsdasds</p>
                        <IconButton style={{justifyContent:'center',marginInline:'30%', display:'flex', alignItems:'center', textAlign:'center', backgroundColor:'white', }}id={element.id} onClick={() => loggedin!==null?props.addCart(index):history.push("/Signin")}>+<ShoppingCart style={{boxShadow: '3px 3px 10px 6px rgba(0,0,0,0.15)', borderRadius:'50%' ,}}/></IconButton>
                        <p style={{fontSize:'30px' ,backgroundColor:'lightgrey' ,borderRadius:'10px', margin:'8px 0', textAlign:'center',color:'white', marginTop:'20px', opacity:'.7', width:'25vh'}} className={classes.price}>{element.price} $</p>
                    </div>
                </div>
            ))}
        </div>
        )
    }
    else {
        return (
            <div>
                signup as an admin to add products
            </div>)
    }
}
