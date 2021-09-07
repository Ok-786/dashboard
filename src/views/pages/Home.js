import React, { useState, useEffect } from 'react';
import Featuredinfo from '../../components/Featuredinfo';
import scriptCSS from '../../css/scriptCSS';
import Chart from '../../components/Chart';
import { userData } from '../../data/theData';
import Widgetsm from '../../components/Widgetsm';
import Widgetlg from '../../components/Widgetlg';
import Products from '../../components/products';
import Userprofile from '../../components/Userprofile';

export default function Home(props) {
    const [count, setCount] = useState(0);
    const [amount, setAmount] = useState(0);
    const classes = scriptCSS();

    const changeCount = (count1) => {
        setCount(count1)
    }
    const changeAmount = (amount1) => {
        setAmount(amount1)
    }

    useEffect(() => {
        var total = 0;
        var data = JSON.parse(localStorage.getItem("Product Data"));
        if (data != null) {
            var arr = [];
            arr = data;
            arr.forEach(element => {
                total = total + Number(element.price);
            })
            changeCount(data.length)
        } else { changeCount(0) }

        changeAmount(total)

        // changeAmount(total)
        // setCount(JSON.parse(localStorage.getItem("Product Data")).length)
    }, []);

    return (
        <div className={classes.home1}>
            {
                props.loggedin === "User" ?
                    <Userprofile /> :
                    <div>
                        <Featuredinfo count={count} amount={amount} />
                        <Chart dataKey1="Active User" data={userData} title="User Analytics" />
                        <div className={classes.homeWidgets}>
                            <Widgetsm updateLocalStorageState={props.updateLocalStorageState} setId={props.setId} editBtn={props.editBtn} setChecked={props.setChecked} deleteBtn={props.deleteBtn} />
                            <Widgetlg />
                        </div>
                    </div>
            }

            <Products changeCount={changeCount} changeAmount={changeAmount} loggedin={props.loggedin}/>


        </div>
    )
}
