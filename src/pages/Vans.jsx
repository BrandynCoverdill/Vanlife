import {Link} from 'react-router-dom';
import '../styles/vans.css';

export default function Vans() {
	return (
		<section className='vans'>
			<h1>Explore our van options</h1>
			<div className='filter-container'>
				<button type='button' className='simple-filter-btn'>
					Simple
				</button>
				<button type='button' className='luxury-filter-btn'>
					Luxury
				</button>
				<button type='button' className='rugged-filter-btn'>
					Rugged
				</button>
				<button type='button' className='clear-filter-btn'>
					Clear filters
				</button>
			</div>
			<div className='van-list-container'>
				{/* Map over the data to show a list of vans */}
			</div>
		</section>
	);
}
