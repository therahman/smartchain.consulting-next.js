import React from 'react';

const Industries = () => {
	return (
		<div className='bg-primary/10'>
			<div className='container mx-auto px-5 lg:px-24 py-12 lg:py-24'>
				<div className='pb-8 text-center'>
					<h1 className='text-secondary text-3xl lg:text-4xl font-bold'>Industries We Serve</h1>
				</div>
				<ul className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
					<li className='text-center flex items-center justify-center flex-col gap-2'>
						<div className='w-16 h-16 bg-gray-500 rounded-full'></div>
						<p className='text-sm'>Healthcare</p>
					</li>
					<li className='text-center flex items-center justify-center flex-col gap-2'>
						<div className='w-16 h-16 bg-gray-500 rounded-full'></div>
						<p className='text-sm'>Fintech</p>
					</li>
					<li className='text-center flex items-center justify-center flex-col gap-2'>
						<div className='w-16 h-16 bg-gray-500 rounded-full'></div>
						<p className='text-sm'>EdTech</p>
					</li>
					<li className='text-center flex items-center justify-center flex-col gap-2'>
						<div className='w-16 h-16 bg-gray-500 rounded-full'></div>
						<p className='text-sm'>logistics</p>
					</li>
					<li className='text-center flex items-center justify-center flex-col gap-2'>
						<div className='w-16 h-16 bg-gray-500 rounded-full'></div>
						<p className='text-sm'>ecommerce</p>
					</li>
					<li className='text-center flex items-center justify-center flex-col gap-2'>
						<div className='w-16 h-16 bg-gray-500 rounded-full'></div>
						<p className='text-sm'>Art</p>
					</li>
					<li className='text-center flex items-center justify-center flex-col gap-2'>
						<div className='w-16 h-16 bg-gray-500 rounded-full'></div>
						<p className='text-sm'>Banking & Finance</p>
					</li>
					<li className='text-center flex items-center justify-center flex-col gap-2'>
						<div className='w-16 h-16 bg-gray-500 rounded-full'></div>
						<p className='text-sm'>Manufacturing</p>
					</li>
					<li className='text-center flex items-center justify-center flex-col gap-2'>
						<div className='w-16 h-16 bg-gray-500 rounded-full'></div>
						<p className='text-sm'>Hospitality</p>
					</li>
					<li className='text-center flex items-center justify-center flex-col gap-2'>
						<div className='w-16 h-16 bg-gray-500 rounded-full'></div>
						<p className='text-sm'>ON Demand</p>
					</li>
				</ul>
			</div>
		</div>
	);
};

export default Industries;
