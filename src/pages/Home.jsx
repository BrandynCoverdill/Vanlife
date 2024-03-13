import {Link} from 'react-router-dom';
import '../styles/home.css';

export default function Home() {
	return (
		<div className='dark-wrapper'>
			<div className='home'>
				<div className='container'>
					<h1>You got the travel plans, we got the travel vans.</h1>
					<p>
						Add adventure to your life by joining the #vanlife movement. Rent
						the perfect van to make your perfect road trip.
					</p>
					<div className='home-button-container'>
						<Link to='/vans'>
							<button type='button'>Find your van</button>
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
}
