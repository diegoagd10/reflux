import React from 'react'
import DroneNavbarLink from './DroneNavbarLink.js';

export default class DroneNavbarOption extends React.Component
{
	constructor()
	{
		super();
	}

	render()
	{
		return (
			<li class="drone__navbar__option">
				<DroneNavbarLink text={this.props.text} />
			</li>
		);
	}
}