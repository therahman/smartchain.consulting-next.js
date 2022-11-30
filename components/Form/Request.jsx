import React from 'react';

const Request = () => {
	return (
		<form action='' className='space-y-4'>
			<div className='flex md:flex-row flex-col gap-3'>
				<div className='flex flex-col gap-1 w-full'>
					<label htmlFor='' className='text-white/50 text-sm '>
						First Name
					</label>
					<input
						type='text'
						placeholder='First Name'
						className='outline-none text-sm py-2.5 px-3 rounded-lg bg-transparent text-white border-2 border-white/25 focus:border-white'
					/>
				</div>
				<div className='flex flex-col gap-1 w-full'>
					<label htmlFor='' className='text-white/50 text-sm '>
						Last Name
					</label>
					<input
						type='text'
						placeholder='Last Name'
						className='outline-none text-sm py-2.5 px-3 rounded-lg bg-transparent text-white border-2 border-white/25 focus:border-white'
					/>
				</div>
			</div>
			<div className='flex flex-col gap-2'>
				<label htmlFor='' className='text-white/50 text-sm '>
					Write your message below
				</label>
				<textarea
					className='outline-none text-sm px-3 py-2.5 rounded-lg bg-transparent border-2 border-white/25 focus:border-white'
					placeholder='Write your message below'
				></textarea>
			</div>
			<div className='flex flex-col gap-1'>
				<label htmlFor='' className='text-white/50 text-sm '>
					Email address*
				</label>
				<input
					type='email'
					placeholder='First name'
					className='outline-none text-sm py-2.5 px-3 rounded-lg bg-transparent text-white border-2 border-white/25 focus:border-white'
				/>
			</div>
			<div className='flex flex-col gap-1'>
				<label htmlFor='' className='text-white/50 text-sm '>
					Enter you phone number
				</label>
				<input
					type='number'
					placeholder='First name'
					className='outline-none text-sm py-2.5 px-3 rounded-lg bg-transparent text-white border-2 border-white/25 focus:border-white'
				/>
			</div>
			<button className='bg-primary py-3 max-w-xs w-full rounded-lg text-white text-sm'>SUBMIT</button>
		</form>
	);
};

export default Request;
