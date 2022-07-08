import React from 'react';
import GlobalStyle from './globalStyles';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

//Pages
import Home from './pages/Home';
import Footer from './components/Footer/Footer';
import AllProject from './pages/AllProject';

function App() {
	return (
		<Router>
			<GlobalStyle />
			<Routes>
				<Route path="/" exact element={<Home/>} />
				<Route path="/allproject/:id" exact element={<AllProject/>} />
			</Routes>
			<Footer />
		</Router>
	);
}

export default App;
