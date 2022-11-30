import React from 'react';

const Request = () => {
	return (
		<>
			<div className='container mx-auto px-5 lg:px-24 py-24'>
				<div className=' border-white px-8 py-8 lg:py-16 bg-secondary rounded-3xl relative after:contents[""] after:absolute after:top-6 after:left-6 after:w-full after:h-full after:bg-transparent lg:after:bg-primary/20 after:rounded-3xl after:-z-10'>
					<div className='flex flex-col lg:flex-row gap-8 lg:gap-5 '>
						<div
							className='w-full lg:w-1/2 h-full space-y-3 lg:px-7'
							data-aos='fade-right'
							data-aos-duration='800'
							data-aos-once='true'
						>
							<h1 className='text-4xl text-white'>Request for Proposal</h1>
							<p className='text-white/60 font-light'>
								We’ll get back to you within a day to schedule a quick strategy call, We can also
								communicate over email if that’s easier for you.
							</p>
						</div>
						<div
							className='w-full lg:w-1/2'
							data-aos='fade-left'
							data-aos-duration='800'
							data-aos-once='true'
						>
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
								<button className='bg-primary py-3 max-w-xs w-full rounded-lg text-white text-sm'>
									SUBMIT
								</button>
							</form>
						</div>
					</div>
				</div>
			</div>
			<div className='container mx-auto px-5 lg:px-24 '>
				<div
					className='bg-secondary p-7 w-full rounded-3xl flex flex-col lg:flex-row gap-4'
					data-aos='zoom-in'
					data-aos-duration='800'
					data-aos-once='true'
				>
					<div className='w-full lg:w-1/3'>
						<h1 className='text-white text-lg lg:text-2xl'>SUBSCRIBE FOR NEWSLETTER</h1>
						<p className='text-white/50 text-sm'>
							Get Smartchain latest updates and news directly to your inbox, for free.
						</p>
					</div>
					<div className='flex flex-wrap lg:flex-nowrap items-center gap-4 w-full lg:w-2/3'>
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
						<button className='bg-primary py-3 max-w-xs w-full rounded-lg text-white text-sm'>
							Subscribe
						</button>
					</div>
				</div>
			</div>
		</>
	);
};

export default Request;
