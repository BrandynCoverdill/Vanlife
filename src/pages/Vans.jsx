import {Link} from 'react-router-dom';
import '../styles/vans.css';
import '.././server.js';
import {useEffect, useState} from 'react';

export default function Vans() {
	const [vans, setVans] = useState(null);

	useEffect(() => {
		async function fetchData() {
			const data = await fetch('/api/vans');
			const json = await data.json();
			setVans(json.vans);
		}
		try {
			fetchData();
		} catch (error) {
			console.error('Error: ' + error);
		}
	}, []);

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
				{vans === null ? (
					<p>Loading Vans...</p>
				) : (
					vans.map((van) => {
						return (
							<div className='van-card' key={van.id}>
								<div className='van-image'>
									<Link to={'/van:' + van.id}>
										<img src={van.imageUrl} alt={van.name} />
									</Link>
								</div>
							</div>
						);
					})
				)}
			</div>
		</section>
	);
}
