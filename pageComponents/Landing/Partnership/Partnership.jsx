import React from 'react';

const Partnership = () => {
	return (
		<div className='container mx-auto px-5 lg:px-24 lg:py-24 py-12'>
			<div>
				<div className='text-center space-y-5'>
					<h1 className='text-4xl text-secondary font-bold'>Smart Strategic Partnership</h1>
					<p>
						In order to maintain the highest standards in software development, Smart Chain Technology
						builds strategic alliances with platforms for digital infrastructure. In order to boost our
						technical knowledge, personnel, and development capacities and to meet your specific business
						objectives with the most cutting-edge technologies, we collaborate with top-tier technology
						drivers.
					</p>
					<p>
						In order to uphold the highest standards for software development, Smart Chain Technology builds
						strategic alliances with platforms for digital infrastructure. We work in collaboration with
						leading technology providers to expand our technical know-how, workforce, and development
						skills, enhancing your specific business requirements with cutting-edge technologies.
					</p>
				</div>
				<div
					className='grid grid-cols-2 lg:grid-cols-4 gap-6 mt-12'
					data-aos='fade-right'
					data-aos-duration='800'
					data-aos-once='true'
				>
					<div className='border w-full h-16 bg-dark-400 rounded-lg flex items-center justify-center'></div>
					<div className='border w-full h-16 bg-dark-400 rounded-lg flex items-center justify-center'></div>
					<div className='border w-full h-16 bg-dark-400 rounded-lg flex items-center justify-center'></div>
					<div className='border w-full h-16 bg-dark-400 rounded-lg flex items-center justify-center'></div>
				</div>
			</div>
		</div>
	);
};

export default Partnership;
