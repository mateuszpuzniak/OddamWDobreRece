import React from 'react'
import { createRoot } from 'react-dom/client'
import "./scss/style.scss"
// import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Layout from './components/Layout'
import Login from './components/Login'
import Register from "./components/Register"




function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path='/' element={<Layout />} />
				<Route path="/logowanie" element={<Login />} />
                <Route path="/rejestracja" element={<Register />} />
			</Routes>
		</BrowserRouter>
	)
}
const container = document.getElementById('root')
const root = createRoot(container)
root.render(<App />)