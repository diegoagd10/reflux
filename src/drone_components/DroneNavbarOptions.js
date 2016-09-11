import React from 'react'
import DroneNavbarTitle from './DroneNavbarTitle.js';
import DroneNavbarOption from './DroneNavbarOption.js';

export default class DroneNavbarOptions extends React.Component
{
	constructor()
	{
		super();
	}

	render()
	{
		return (
			<ul class="drone__navbar__options">
				<DroneNavbarTitle title="Reflux" />
				<DroneNavbarOption text="Home" />
				<DroneNavbarOption text="Contact" />
				<DroneNavbarOption text="About" />
			</ul>
		);
	}
}