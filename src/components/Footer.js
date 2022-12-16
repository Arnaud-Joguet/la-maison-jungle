import React  from 'react';
import { useState } from 'react'
import '../styles/Footer.css'

function Footer() {
    // Permet d'avoir l'état du state avant changment
	const [inputValue, setInputValue] = useState('')

    // Permet de setter la valeur de l'input avec la saise de l'user
    function handleInput(e) {
        setInputValue(e.target.value)
    }

    // Vérifie si l'input contient bien un @ pour pouvoir ensuite la setter, sinon on met une alerte
    function handleBlur() {
        if (!inputValue.includes('@')) {
            alert("Veuillez renseigner une adresse mail valide")
        }
    }
    
    // Le onChange set la valeur de l'input avec la méthode au dessus, le onBlur permet d'enregistrer les modifs quand l'user clic en dehors du champs de texte
	return (
		<footer className='lmj-footer'>
			<div className='lmj-footer-elem'>
				Pour les passionné·e·s de plantes 🌿🌱🌵
			</div>
			<div className='lmj-footer-elem'>Laissez-nous votre mail :</div>
            <input
                placeholder="Entrez votre mail"
                onChange={handleInput}
                value={inputValue}
                onBlur={handleBlur}
            />
		</footer>
	)
}

export default Footer
