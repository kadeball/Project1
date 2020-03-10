import React from 'react';
import {Link} from 'react-router-dom';



function Box(props){


    let styles = {
        borderStyle: 'solid 2px',
        borderColor: 'rebeccapurple',
        backgroundColor: "cornflowerblue",
        boxSizing: 'border-box',
        boxShadow: "10px 10px mediumpurple",
        minWidth: '300px',
        width: '22vw',
        minHeight: '300px',
        height: '22vw',
        display: 'inline-block',
        margin: '10px',
    };

    return (
        <div style={styles}>
            <Link to={`/${props.name}`}>
            <p>Name: {props.name}</p>
            <p>Category: {props.category}</p>
            <p>Value: {props.value}</p>
            <img src={props.img} alt={props.name}/>
            </Link>

        </div>
    )
}

export default Box;
