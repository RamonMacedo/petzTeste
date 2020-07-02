import React from 'react'
import ReactDOM from 'react-dom'
import {
  BrowserRouter,
  Switch,
  Route
} from "react-router-dom";
import './index.css'
import Header from './components/header'
import Main from './pages/main.js'
import Details from './pages/details.js'
import Page404 from './pages/page404.js'

ReactDOM.render(
	<React.Fragment>
		<Header />
		<BrowserRouter>
			<Switch>
				<Route path="/" exact={true} component={Main} />
            	<Route path="/detalhes" component={Details} />
            	<Route path="*" component={Page404} />
			</Switch>
		</BrowserRouter>
	</React.Fragment>,
	document.getElementById('root')
)