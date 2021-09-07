import React from 'react'
import Navbar from './Topbar';
import ProductCard from '../components/ProductCard';
import scriptCSS from '../css/scriptCSS';

export default function Home(props) {
    const classes = scriptCSS();
      
    return (
        <div>
            <Navbar cart={props.cart}/>
            <div className={classes.mainContainer}>
                <ProductCard addCart={props.addCart}/>
            </div>
        </div>
    );
}
