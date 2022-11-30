import Image from 'next/image';
import React from 'react';

const WhySmartchain = () => {
	return (
		<div className='container mx-auto px-5 lg:px-24 py-12 lg:py-24'>
			<div className='flex flex-col lg:flex-row justify-center lg:gap-0 gap-10'>
				<div
					className='w-full lg:w-1/2 lg:pr-12'
					data-aos='fade-right'
					data-aos-duration='800'
					data-aos-once='true'
				>
					<div className='relative'>
						<div className='absolute -top-4 -left-5 shadow-2xl rounded-3xl'>
							<Image src='/image/landing-6/widget-img-2.svg' alt='image' width={200} height={200} />
						</div>
						<div className='absolute -right-5 -bottom-4 shadow-2xl rounded-3xl'>
							<Image src='/image/landing-6/widget-img-3.svg' alt='image' width={300} height={200} />
						</div>
						<div className='shadow-2xl rounded-3xl ml-10'>
							<Image src='/image/landing-6/widget-img-4.svg' alt='image' width={450} height={450} />
						</div>
					</div>
				</div>
				<div
					className='w-full lg:w-1/2 lg:pl-8'
					data-aos='fade-left'
					data-aos-duration='800'
					data-aos-once='true'
				>
					<h1 className='text-3xl lg:text-4xl font-bold mb-5 text-secondary'>Why Smart Chain</h1>
					<p className='text-dark-400 font-normal text-base tracking-wide leading-7'>
						We distinguish ourselves from the competitors with a highly adaptive strategy. We do not support
						one-size-fits-all approaches. So, we question our initial hypotheses and search for the
						appropriate inquiries. Take advantage of a true software partnership by utilizing our knowledge.
					</p>
				</div>
			</div>
		</div>
	);
};

export default WhySmartchain;
