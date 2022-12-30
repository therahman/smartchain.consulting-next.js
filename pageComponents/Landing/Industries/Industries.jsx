import Image from 'next/image';
import React from 'react';

const items = [
	{
		title: 'Healthcare',
		text: 'Better medical workflow, everyday therapy, and optimal diagnosis. Adopting the most recent developments in patient involvement and efficient healthcare administration technologies will pave the way for high-quality healthcare.',
		image: '/image/landing/1-healthcare.png',
	},
	{
		title: 'Fintech',
		text: 'We have been developing specialized, cutting-edge financial software for Fintech firms and creative startups for over a couple of years.',
		image: '/image/landing/2-fintech.png',
	},
	{
		title: 'EdTech',
		text: 'Custom educational software, including web and mobile applications, is one of our areas of expertise at Smart Chain Technology.By the year 2027, the size of the global market for educational technology is anticipated to be USD 318.8 billion.',
		image: '/image/landing/3-edtech.png',
	},
	{
		title: 'Logistics',
		text: ' ​​High-quality tracking, monitoring, and management tools for logistics enable you to transact with businesses throughout the world. Get transport app development for your company that is scalable, dynamic, and linked.',
		image: '/image/landing/4-logistics.png',
	},
	{
		title: 'ecommerce',
		text: `eCommerce technology makes internet businesses more efficient, accessible, and significantly increases brand exposure.`,
		image: '/image/landing/5-ecommerce.png',
	},
	{
		title: 'Art',
		text: 'Launch iconic goods where science and art meet.',
		image: '/image/landing/6-art.png',
	},
	{
		title: 'Banking & Finance',
		text: 'For companies aiming for greater operational efficiency, agility, and continual cost leadership, smart chain technology offers dependable banking & financial software development solutions & services.',
		image: '/image/landing/7-banking-and-finance.png',
	},
	{
		title: 'Manufacturing',
		text: 'We specialize in developing software for manufacturing businesses, assisting them in increasing performance and production as well as lowering total costs.',
		image: '/image/landing/8-manufacturer.png',
	},
	{
		title: 'Hospitality',
		text: 'In order to automate business operations in firms in the hospitality sector, Smart Chain Technology, a top custom software development company, offers custom software development and maintenance services.',
		image: '/image/landing/9-hospitality.png',
	},
	{
		title: 'ON Demand',
		text: 'The technology for developing apps on demand is a potent platform that aids service providers in easily meeting the needs of their clients. Being a pioneer in the on-demand app industry, we have connected a lot of businesses to their customers and helped them expand their markets.',
		image: '/image/landing/9-on-demand.png',
	},
];

const Industries = () => {
	return (
		<div className='bg-primary/10'>
			<div className='overflow-hidden container mx-auto px-5 lg:px-24 py-12 lg:py-24'>
				<div className='pb-12 text-center'>
					<h1 className='text-secondary text-3xl lg:text-4xl font-bold'>Industries We Serve</h1>
				</div>
				<ul className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
					{items.map((item, index) => (
						<li
							className='text-center flex items-center flex-col gap-2'
							data-aos='fade-up'
							data-aos-duration='800'
							data-aos-once='true'
							key={index}
						>
							<div className='w-20 h-20 rounded-xl overflow-hidden'>
								<Image src={item.image} width={500} height={500} />
							</div>
							<div>
								<h1 className='text-lg font-semibold'>{item.title}</h1>
								<p>{item.text}</p>
							</div>
						</li>
					))}
				</ul>
			</div>
		</div>
	);
};

export default Industries;
