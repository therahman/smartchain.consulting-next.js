import React from 'react';
import Form from '../../../components/Form/Form';

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
							<Form.Request />
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
					<Form.Subscribe />
				</div>
			</div>
		</>
	);
};

export default Request;
