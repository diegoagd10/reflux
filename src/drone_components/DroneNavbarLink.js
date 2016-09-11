import React from 'react'

export default class DroneNavbarLink extends React.Component
{
	constructor()
	{
		super();
	}

	render()
	{
		return (
			<a class="drone__navbar__option__link" href="#">{this.props.text}</a>
		);
	}
} 