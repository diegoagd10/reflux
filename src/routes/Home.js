import React from 'react'
import Reflux from 'reflux'
import ReactMixin from 'react-mixin'
import PeopleStore from '../stores/PeopleStore.js'
import PeopleFrame from '../components/PeopleFrame.js'
import PeopleActions from '../actions/PeopleActions.js'
import DroneHeader from '../drone_components/DroneHeader.js'
import DroneNavbar from '../drone_components/DroneNavbar.js'

@ReactMixin.decorate(Reflux.connect(PeopleStore, 'people'))
export default class Home extends React.Component
{
	constructor()
	{
		super();
	}

	componentDidMount()
	{
		PeopleActions.fetchPeople();
	}

	render()
	{
		let component = this.state.people ? <PeopleFrame people={this.state.people} /> : <h1>Loading</h1>

		return(
			<div>
				<DroneHeader />
				<DroneNavbar />
				<main class="container drone--center">{component}</main>
			</div>
		);
	}
}