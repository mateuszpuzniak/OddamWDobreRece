import React from 'react'
import { createRoot } from 'react-dom/client'
import "./scss/style.scss"
// import { HashRouter } from 'react-router-dom'
import Home from './components/Home'
// import HomeHeader from './components/HomeHeader'
// import HomeNavigation from './components/HomeNavigation'
import HomeImg from './components/HomeImg'
// import App from './App'

// createRoot(document.getElementById('root')).render(
// 	<React.StrictMode>
// 		<HashRouter>
// 			<App />
// 		</HashRouter>
// 	</React.StrictMode>
// )
function App() {
	return (
		<div>
			<Home />
		</div>
	)
}
const container = document.getElementById('root')
const root = createRoot(container)
root.render(<App />)