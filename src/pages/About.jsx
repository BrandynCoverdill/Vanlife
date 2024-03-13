import {Link} from 'react-router-dom';
import '../styles/about.css';

export default function About() {
	return (
		<section className='about'>
			<div className='dark-wrapper'>
				<div className='background-image'></div>
			</div>
			<div className='text-content'>
				<h1>Don't squeeze in a sedan when you could relax in a van.</h1>
				<p>
					Our mission is to enliven your road trip with the perfect travel van
					rental. Our vans are recertified before each trip to ensure your
					travel plans can go off without a hitch.
				</p>
				<p>(Hitch costs extra 😉)</p>
				<p>
					Our team is full of vanlife enthusiasts who know firsthand the magic
					of touring the world on 4 wheels.
				</p>
				<div className='card'>
					<p>Your destination is waiting.</p>
					<p>Your van is ready.</p>
					<Link to='/vans'>
						<button type='button'>Explore our vans</button>
					</Link>
				</div>
			</div>
		</section>
	);
}
