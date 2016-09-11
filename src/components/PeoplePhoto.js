import React from 'react'

export default class PeoplePhoto extends React.Component
{
	constructor()
	{
		super();
	}

	render()
	{
		return (
			<div class="drone--top--offset--small">
				<img class="drone--border--circular drone--border--solid--dark--gray" src={this.props.photo} alt="people photo" />
			</div>
		);
	}
}