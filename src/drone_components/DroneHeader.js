import React from 'react'

export default class DroneHeader extends React.Component
{
	constructor()
	{
		super()
	}

	render()
	{
		return (
			<header class="drone__header drone--center">
				<h1 class="drone__header__title">Random user generator</h1>
				<p>A free, open-source API for generating random user data. Like Lorem Ipsum, but for people.</p>
			</header>						
		);
	}
}