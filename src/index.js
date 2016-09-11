require('styles/normalize.css');
require('styles/skeleton.css');
require('styles/drone.common.css');
require('styles/drone.css');

import 'core-js/fn/object/assign';
import React from 'react';
import ReactDOM from 'react-dom';
import Home from './routes/Home.js';

// Render the main component into the dom
ReactDOM.render(<Home />, document.getElementById('app'));
