import React from 'react'
import DroneNavbarLink from './DroneNavbarLink.js';

export default class DroneNavbarTitle extends React.Component
{
	constructor()
	{
		super();
	}

	render()
	{
		return (
			<li class="drone__navbar__title">
				<DroneNavbarLink text={this.props.title} />
			</li>
		);
	}
}