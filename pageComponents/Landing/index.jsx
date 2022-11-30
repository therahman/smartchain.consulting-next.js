import React from 'react';
import Connect from './Connect/Connect';
import Hero from './Hero/Hero';
import Industries from './Industries/Industries';
import Partnership from './Partnership/Partnership';
import Request from './Request/Request';
import Services from './Services/Services';
import WhySmartchain from './WhySmartchain/WhySmartchain';

const Landing = () => {
	return (
		<>
			<Hero />
			<Connect />
			<WhySmartchain />
			<Services />
			<Industries />
			<Partnership />
			<Request />
		</>
	);
};

export default Landing;
