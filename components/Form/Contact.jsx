import React from 'react';

const Contact = () => {
	return (
		<form action='#' className='contact-us-form'>
			<div className='flex flex-wrap'>
				<div className=' w-full lg:w-1/2'>
					<div className='flex flex-col gap-1'>
						<label>Your name</label>
						<input
							type='text'
							name='name'
							id='name'
							className='border px-4 py-2.5 text-base w-full rounded-lg outline-none'
							placeholder='Enter your first & last name'
						/>
					</div>
					<div className='flex flex-col gap-1'>
						<label>Phone</label>
						<input
							type='number'
							name='phone'
							id='phone'
							className='border px-4 py-2.5 text-base w-full rounded-lg outline-none'
							placeholder='Enter your phone number'
						/>
					</div>
				</div>
				<div className=' w-full lg:w-1/2'>
					<div className='flex flex-col gap-1'>
						<label>Your email</label>
						<input
							type='email'
							name='email'
							id='email'
							className='border px-4 py-2.5 text-base w-full rounded-lg outline-none'
							placeholder='Enter your email address'
						/>
					</div>
					<div className='flex flex-col gap-1'>
						<label>Subject</label>
						<input
							type='text'
							name='subject'
							id='subject'
							className='border px-4 py-2.5 text-base w-full rounded-lg outline-none'
							placeholder='Enter a subject line'
						/>
					</div>
				</div>
				<div className='w-full'>
					<div className='flex flex-col gap-1'>
						<label>Message</label>
						<textarea
							className='border px-4 py-2.5 text-base w-full rounded-lg outline-none'
							placeholder='Write your message'
						></textarea>
					</div>
				</div>
				<div className='w-full'>
					<button className='btn focus-reset'>Send</button>
				</div>
			</div>
		</form>
	);
};

export default Contact;
