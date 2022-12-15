import React  from 'react';

const planList = [
    'monstera',
    'ficus lyrata',
    'pothos argenté',
    'yucca',
    'palmier'
];

function ShoppingList() {
    return (
        <ul>
            {planList.map((plant, index) => (
                <li key={`${plant}-${index}`}>{plant}</li>
            ) )}
        </ul>
    )
}

export default ShoppingList