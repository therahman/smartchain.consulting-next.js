import React from 'react';

const Subscribe = () => {
	return (
		<form className='flex flex-wrap lg:flex-nowrap items-center gap-4 w-full lg:w-2/3'>
			<div className='flex flex-col gap-1 w-full'>
				<input
					type='text'
					placeholder='First Name'
					className='outline-none text-sm py-2.5 px-3 rounded-lg bg-transparent text-white border-2 border-white/25 focus:border-white'
				/>
			</div>
			<div className='flex flex-col gap-1 w-full'>
				<input
					type='text'
					placeholder='First Name'
					className='outline-none text-sm py-2.5 px-3 rounded-lg bg-transparent text-white border-2 border-white/25 focus:border-white'
				/>
			</div>
			<button className='bg-primary py-3 max-w-xs w-full rounded-lg text-white text-sm'>Subscribe</button>
		</form>
	);
};

export default Subscribe;
