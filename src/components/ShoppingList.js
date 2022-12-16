import React  from 'react';
import { plantList } from '../datas/plantList';
import PlantItem from './PlantItem';

import '../styles/ShoppingList.css';


// first, add data from array
/* const planList = [
    'monstera',
    'ficus lyrata',
    'pothos argenté',
    'yucca',
    'palmier'
]; */

// add datas from another file with name, category and id for each plant

function ShoppingList() {
    // create categeries const from planlist file
    const categories = plantList.reduce(
		(acc, plant) =>
			acc.includes(plant.category) ? acc : acc.concat(plant.category),
		[]
	)
    
    // foreach show name for each categories
    // and show name for each plant and add id in key.
	return (
		<div>
			<ul>
				{categories.map((cat) => (
					<li key={cat}>{cat}</li>
				))}
			</ul>
			<ul className='lmj-plant-list'>
				{plantList.map(({ id, cover, name, water, light }) => (
					<PlantItem
						id={id}
						cover={cover}
						name={name}
						water={water}
						light={light}
					/>
					
				))}

			</ul>
		</div>
	)
}

export default ShoppingList