import React from 'react';
import Featurebox from './Featurebox';
import fimage1 from '../assets/images/1 - Copy (2).jpg'
import fimage2 from '../assets/images/1 - Copy (2).jpg'
import fimage3 from '../assets/images/1 - Copy (2).jpg'
import fimage4 from '../assets/images/1 - Copy (2).jpg'
import fimage5 from '../assets/images/1 - Copy (2).jpg'
import fimage6 from '../assets/images/1 - Copy (2).jpg'
import fimage7 from '../assets/images/1 - Copy (2).jpg'
import fimage8 from '../assets/images/1 - Copy (2).jpg'
// import fimage9 from '../assets/images/1 - Copy (2).jpg'
import "../App.css";

const Home = () => {
return (
	<div id='features'>
	<div className='a-container'>
		<Featurebox  image={fimage1} title="weight" />
		<Featurebox  image={fimage2} title="Gym" />
		<Featurebox  image={fimage3} title="Dinner" />
		<Featurebox  image={fimage4} title="Lunch" />
		<Featurebox  image={fimage5} title="Lunch" />
		<Featurebox  image={fimage6} title="Lunch" />
		<Featurebox  image={fimage7} title="Dinner" />
		<Featurebox  image={fimage8} title="Lunch" />
		{/* <Featurebox  image={fimage9} title="Lunch" /> */}
</div>
</div>
)
}


export default Home;
