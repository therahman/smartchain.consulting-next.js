import Image from 'next/image';
import React from 'react';

const items = [
	{
		title: 'Mobile App Development',
		text: 'Our society is primarily based on mobile devices. Modern businesses frequently demand some kind of mobile app. With a focus on mobile-first design, Smart Chain Technology team can create and publish cutting-edge hybrid or native apps across all app stores.',
		image: '/image/landing/1-mobile-dev.png',
	},
	{
		title: 'NFT Development',
		text: 'Global company Smart Chain Technology supports companies in reimagining their industries for the digital era. Products and services from Smart Chain Technology are founded on innovation, a strong culture of taking risks, and a tireless commitment to the needs of the customer. As well as team scalability options, we provide high-quality NFT development services.',
		image: '/image/landing/2-NFT-dev.png',
	},
	{
		title: 'Web App Development',
		text: 'Simple websites to intricate, scalable platforms have all been developed by Smart Chain Technology. Smart Chain can put together the ideal combination of web technologies based on the particular requirements and objectives of its clients to make sure that their products are successful.',
		image: '/image/landing/3-web-app-dev.png',
	},
	{
		title: 'Custom Software',
		text: `No matter the sector, Smart Chain collaborates closely with clients globally to deliver full-spectrum, unique software solutions that wow. Smart Chain offers the next generation in custom software development services. We've built full product suites and MVPs, therefore we can build one for you as well.`,
		image: '/image/landing/4-custom-software.png',
	},
	{
		title: 'Website Development',
		text: `We create award-winning websites using excellent technology and exceptional taste. These are what determine whether or not your customer responds to what you're presenting. As a creative digital agency, Smart Chain Technology plans out a startling website development that attracts customers and motivates them to take action.`,
		image: '/image/landing/5-web-dev.png',
	},
	{
		title: 'Digital Marketing',
		text: `The future depends on technology, and technology depends on marketing. Therefore, now is the ideal time to start your digital adventure and take the first steps toward cutting-edge marketing trends.`,
		image: '/image/landing/6-digital-marketing.png',
	},
];

const Services = () => {
	return (
		<div className='overflow-hidden container mx-auto px-5 lg:px-24 py-12 lg:py-24'>
			<div className='pb-11'>
				<h1 className='text-3xl lg:text-4xl text-secondary text-center font-bold '>Our Services</h1>
			</div>
			<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-3'>
				{items.map((item, index) => (
					<div
						className='flex flex-col gap-3 rounded-xl py-5 px-6 hover:shadow-3xl transition duration-300 ease-in-out'
						data-aos='fade-up'
						data-aos-duration='800'
						data-aos-once='true'
						key={index}
					>
						<div className='w-20 h-20 rounded-xl overflow-hidden'>
							<Image src={item.image} width={500} height={500} />
						</div>
						<div className='pb-6 mt-3'>
							<h1 className='text-lg text-secondary font-semibold'>{item.title}</h1>
							<p>{item.text}</p>
						</div>
					</div>
				))}
			</div>
			<div className='mt-8 space-x-3 flex items-center justify-center'>
				<button className='px-6 py-3 bg-primary rounded-lg uppercase text-white'>MORE SERVICES</button>
				<button className='px-6 py-3 border border-primary rounded-lg text-primary font-medium'>
					CONTACT US
				</button>
			</div>
		</div>
	);
};

export default Services;
