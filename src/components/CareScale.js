import React  from 'react';
import Sun  from "../assets/sun.svg";
import Water from "../assets/water.svg";

// Permet de mettre dans l'alerte les mots correspondant aux valeurs de soleil et d'arrosage
const quantityLabel = {
	1: 'peu',
	2: 'modérément',
	3: 'beaucoup'
}

function CareScale( { scaleValue, careType } ) {
    const range = [1, 2, 3]
    const scaleType =
        careType === 'light' ? (
            <img src={Sun} alt='sun-icon' />
    ) : (
        <img src={Water} alt='water-icon' />
    )

	// onClick fait une alerte sur le clic des icones arrosage ou soleil avec un mot différent suivant la valeur
	return (
		<div
			onClick={() =>
				alert(
					`Cette plante requiert ${quantityLabel[scaleValue]} ${
						careType === 'light' ? 'de lumière' : "d'arrosage"
					}`
				)
			}
		>
			{range.map((rangeElem) =>
				scaleValue >= rangeElem ? (
					<span key={rangeElem.toString()}>{scaleType}</span>
				) : null
			)}
		</div>
	)
}

export default CareScale;