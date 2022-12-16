import React from 'react';
import '../styles/Banner.css';
import logo from '../assets/logo.png';
import Recommandations from "./recommandations";

function Banner() {
	const title = 'La maison jungle';
	return <div className='lmj-banner' >
			<div className='lmj-banner-row'>
				<img src={logo} alt="la maison jungle" className='lmj-logo' />
				<h1 className='lmj-title'>{title}</h1>
			</div>
			{/*<Recommandations />*/}
		</div> 
}

export default Banner;
