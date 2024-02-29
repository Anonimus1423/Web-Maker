import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Home/Home'
import Creating from './Creating/Creating'

export default function Router() {
	return (
		<BrowserRouter>
			<Routes>
				<Route element={<Home />} path='/' />
				<Route element={<Creating />} path='/creating' />
			</Routes>
		</BrowserRouter>
	)
}
