import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Vans from './Vans';
import Logo from '../assets/images/logo.png';

function App() {
	return (
		<BrowserRouter>
			<section className='header'>
				<Link to='/'>
					<img src={Logo} alt='VanLife Logo' className='logo' />
				</Link>
				<nav>
					<ul>
						<li>
							<Link to='/about'>About</Link>
						</li>
						<li>
							<Link to='/vans'>Vans</Link>
						</li>
					</ul>
				</nav>
			</section>
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/about' element={<About />} />
				<Route path='/vans' element={<Vans />} />
			</Routes>
			<section className='footer'>
				<p>
					<span className='copyright'>©</span> 2022 #VANLIFE
				</p>
			</section>
		</BrowserRouter>
	);
}

export default App;
