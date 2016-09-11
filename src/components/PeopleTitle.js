import React from 'react'

export default class PeopleTitle extends React.Component
{
	constructor()
	{
		super();
	}

	render()
	{
		return (
			<div>
				<span class="drone__font--dark--gray drone__font--small">Hi, My name is</span>
				<h1 class="drone__people__title_text">{this.props.name.first}</h1>
			</div>
		);
	}
}