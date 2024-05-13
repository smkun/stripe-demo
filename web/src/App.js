import { useState } from 'react';
import './App.css';
import widget1 from './assets/widget1.png';
import StripeContainer from './components/StripeContainer';

function App() {
	const [showItem, setShowItem] = useState(false);
	return (
		<div className='App'>
			<h1>Wonderous Widgets</h1>
			{showItem ? (
				<StripeContainer />
			) : (
				<>
          <h3>Gamer Lux 5000</h3>
					<h3>$100.00</h3>
					<img src={widget1} alt='Gamer Lux 5000' className="center"/>
					<button onClick={() => setShowItem(true)}>Purchase</button>
				</>
			)}
		</div>
	);
}

export default App;
