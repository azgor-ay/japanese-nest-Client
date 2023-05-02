import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Recipes from '../../components/Recipes';

const DetailsChef = () => {
    const data = useLoaderData()
    console.log(data);
    return (
        <div>
            <h1>Details</h1>
            <Recipes></Recipes>
        </div>
    );
};

export default DetailsChef;