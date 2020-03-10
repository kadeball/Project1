import React, {useState, useEffect} from "react";
import data from "../Data";
import {Link} from 'react-router-dom';
import "./styles/funk.css"


const Clickfunko = ({match}) => {
    useEffect(() => {
        deetz();
    });

    const [funko, setFunko] = useState([]);

    const deetz = () => {
        const info = data.filter(i => i.name === match.params.name);
        const funkos = info[0];
        setFunko(funkos);
    };


    return (
        <Link to={"/"}><button>Home</button>
            <div className="clickImg">
    <p>{funko.name}</p>
    <p>{funko.category}</p>
    <p>{funko.value}</p>
    <img src={funko.img} alt={funko.name}/>
            </div>
        </Link>
    )
};

export default Clickfunko;