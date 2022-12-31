import Image from 'next/image';
import React from 'react';

const Partnership = () => {
	return (
		<div className=' overflow-hidden container mx-auto px-5 lg:px-24 lg:py-24 py-12'>
			<div className='flex md:items-center md:justify-center md:flex-row flex-col gap-5'>
				<div className='text-left space-y-5 md:w-1/2'>
					<h1 className='text-4xl text-secondary font-bold'>Smart Strategic Partnership</h1>
					<p>
						In order to uphold the highest standards for software development, Smart Chain Technology builds
						strategic alliances with platforms for digital infrastructure. We work in collaboration with
						leading technology providers to expand our technical know-how, workforce, and development
						skills, enhancing your specific business requirements with cutting-edge technologies.
					</p>
				</div>
				<div className=' md:w-1/2 flex items-center justify-center'>
					<Image src='/image/landing/partnership.png' width={500} height={500} />
				</div>
			</div>
		</div>
	);
};

export default Partnership;
