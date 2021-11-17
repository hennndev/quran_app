import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Sidebar from './components/UI/Sidebar'
import Homepage from './pages/Homepage'
import SurahDetail from './pages/SurahDetail'

const App = () => {
	return (
		<Router>
      		<div className="min-h-screen flex">
				<Sidebar/>
				<Switch>
					<Route path="/" exact component={Homepage}/>
					<Route path="/surah/:surahId" component={SurahDetail}/>
				</Switch>
			</div>
    	</Router>
  	)
}

export default App
