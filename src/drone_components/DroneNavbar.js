import React from 'react'
import DroneNavbarOptions from './DroneNavbarOptions.js'

export default class DroneNavbar extends React.Component
{
	constructor()
	{
		super()
	}

	render()
	{
		return (
			<nav class="drone__navbar">
				<DroneNavbarOptions />
			</nav>						
		);
	}
}