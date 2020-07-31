import React from 'react';
import classes from './Order.module.css';

const order = (props) => {
    
    const ingredients = [];
    for (let ingredientsName in props.ingredients) {
        ingredients.push({
            name: ingredientsName,
            amount: props.ingredients[ingredientsName]
        });
    }

    const ingredientOutput = ingredients.map(ig => {
    return <span 
    className={
     classes.ing
    }
    key={ig.name}> {ig.name} ({ig.amount})</span>
    });

    return(
        <div className={classes.Order}>
            <p>Ingredients: {ingredientOutput}</p>
            <p>Price: <strong>USD {Number.parseFloat(props.price.toFixed(2))}</strong> </p>
        </div>
    );
    
    
};
export default order;