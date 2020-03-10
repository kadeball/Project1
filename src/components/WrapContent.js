import React from "react";
import Box from "../components/Box";
import "./styles/funk.css";
import data from "../Data";
import {Link} from "react-router-dom";



function WrapContent(props ) {

    let styles = {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-evenly',
        marginBottom: '-2em',
        minHeight: '100vh'
    }



    function createBoxes() {


        let filteredData = data.filter( item =>
            props.category === 'all' || props.category === item.category
        );

        let funkos = filteredData.map( item => {

            return<Box
            name={item.name}
                category={item.category}
                value={item.value}
                img={item.img}
                      />


        });

        return funkos;
    }


    return(
        <div style={styles}>
            { createBoxes() }
        </div>
    )
}



export default WrapContent;