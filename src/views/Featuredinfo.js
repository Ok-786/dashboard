import { List, ListItem, ListItemText } from '@material-ui/core';
import { AttachMoney, CardGiftcard, SupervisorAccount } from '@material-ui/icons';
import React from 'react';
import scriptCSS from '../css/scriptCSS';

export default function Featuredinfo(props) {
    const classes = scriptCSS();
    var data;
    var count;

    function renderedList(index, text) {
        if (index === 0) {
            data=JSON.parse(localStorage.getItem("User Data"));
            if(data!=null){count=data.length}
            else {count=0}

            return (
                <div className={classes.featuredItem}>
                    <ListItemText primary={text} className={classes.featuredTitle} />
                    <div className={classes.featuredMoneyContainer}>
                        <span className={classes.featuredMoney}>
                            {count}
                        </span>
                        <span className={classes.featuredMoneyRate}>
                        {(count>0)?(
                                <SupervisorAccount className={classes.featuredIconPositive}/>
                            ): (
                                <SupervisorAccount className={classes.featuredIconNegative}/>
                            )}
                        </span>
                    </div>
                    <span className={classes.featuredSub}>
                        registered users
                    </span>
                </div>
            )
        } else if (index === 1) {
            return (
                <div className={classes.featuredItem}>
                    <ListItemText primary={text} className={classes.featuredTitle} />
                    <div className={classes.featuredMoneyContainer}>
                        <span className={classes.featuredMoney}>
                            {props.count}
                        </span>
                        <span className={classes.featuredMoneyRate}>
                            {(props.count>0)?(
                                <CardGiftcard className={classes.featuredIconPositive}/>
                            ): (
                                <CardGiftcard className={classes.featuredIconNegative}/>
                            )}
                        </span>
                    </div>
                    <span className={classes.featuredSub}>
                        products are registered
                    </span>
                </div>
            )
        } else if (index === 2) {
            return (
                <div className={classes.featuredItem}>
                    <ListItemText primary={text} className={classes.featuredTitle} />
                    <div className={classes.featuredMoneyContainer}>
                        <span className={classes.featuredMoney}>
                            {props.amount}
                        </span>
                        <span className={classes.featuredMoneyRate}>
                            {(props.amount>0)?(
                                <AttachMoney className={classes.featuredIconPositive}/>
                            ): (
                                <AttachMoney className={classes.featuredIconNegative}/>
                            )}
                        </span>
                    </div>
                    <span className={classes.featuredSub}>
                        compared to last month
                    </span>
                </div>
            )
        }
    }

    return (
        <div >
            <List className={classes.featured}>
                {['Users', 'Products', 'Sales'].map((text, index) => (
                    <ListItem button key={text}>
                        {renderedList(index, text)}
                    </ListItem>
                ))}
            </List>
        </div>
    )
}
