import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import Header from './components/header'
import Main from './pages/main.js'
import Details from './pages/details.js'

ReactDOM.render(
	<React.Fragment>
		<Header />
		<Details />
	</React.Fragment>,
	document.getElementById('root')
)