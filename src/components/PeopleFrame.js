import React from 'react'
import PeoplePhoto from './PeoplePhoto.js'
import PeopleTitle from './PeopleTitle.js'

export default class PeopleFrame extends React.Component
{
	constructor()
	{
		super();
	}

	render()
	{
		return(
			<div class="drone__card--offset">
				<div class="drone__card">
					<div class="drone__card__header"></div>
					<PeoplePhoto photo={this.props.people.picture.large} />
					<PeopleTitle name={this.props.people.name} />
				</div>
			</div>
		);
	}
}