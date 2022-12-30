import Image from 'next/image';
import React from 'react';

const Connect = () => {
	return (
		<>
			<div className=' overflow-hidden container mx-auto px-5 lg:px-24 py-12 lg:py-24'>
				<div className='flex flex-col justify-center items-center gap-6 relative'>
					<div className='w-full text-center' data-aos='zoom-in' data-aos-duration='800' data-aos-once='true'>
						<h1 className='text-3xl lg:text-4xl font-bold mb-5 text-secondary'>
							Connect with us for Smart Solutions
						</h1>
						<p className='text-dark-400 font-normal text-base tracking-wide leading-7'>
							Smart Chain is a leading tech-driven company that’s known for designing software platforms
							for all businesses, irrespective of their size. Backed by advanced tech solutions, our goal
							is to empower companies by offering new technologies that would help resolve potential
							issues and errors during the evolution of technology. We are adept at providing solutions
							related to Blockchain Consulting Services, Enterprise Blockchain Solutions, Web & Mobile App
							Development, Robo Advisory, Bots (software apps), AL/MT/IoT, Smart City, to name a few.
						</p>
					</div>
				</div>
			</div>
		</>
	);
};

export default Connect;
