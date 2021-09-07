import React from 'react';
import scriptCSS from '../css/scriptCSS';
import { LineChart, Line, XAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

export default function Chart(props) {
    const classes = scriptCSS();


    
    return (
        <div className={classes.chart}>
            <h3 className={classes.chartTitle}>{props.title}</h3>
            <ResponsiveContainer width="100%" aspect={4/1} height="10px" >
                <LineChart
                    data={props.data}
                    style={{
                    display: 'table-cell',
                    position:'absolute',
                    width:'50%',
                    marginTop:'50px'
                }}
                > 
                    <CartesianGrid strokeDasharray="5 5" />
                    <XAxis dataKey="name" stroke="orange"/>
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" dataKey={props.dataKey1} stroke="red"  />
                </LineChart>
            </ResponsiveContainer>
        </div>
    )
}
