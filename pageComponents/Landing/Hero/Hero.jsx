import Image from 'next/image';
import React from 'react';

const Hero = () => {
	return (
		<>
			<div className='bg-[#101C3D] overflow-hidden hero-area-6 hero--area-curve__2'>
				<div className='container mx-auto px-5 '>
					<div className='dot-image'></div>
					<div className='flex flex-col lg:flex-row'>
						<div
							className='w-full lg:w-1/2 lg:pl-16 xl:pr-16 order-2 lg:order-1'
							data-aos='fade-right'
							data-aos-duration='800'
							data-aos-once='true'
						>
							<div className='pt-24 lg:pt-72 lg:pb-96 '>
								<h2 className='text-white text-3xl lg:text-5xl font-bold mb-4'>
									Creating Impactful Websites
								</h2>
								<p className=' text-white/40 text-base font-normal '>
									Smart Chain is a leading tech-driven company that harnesses advanced technologies to
									build startups and businesses.
								</p>
								<div className='hero-area__btn pb-12 lg:pb-24 pt-5'>
									<button className='h-12 px-5 rounded-md text-white bg-primary flex items-center justify-center gap-1 hover:gap-3 transition-all duration-300 ease-in-out'>
										GET IN TOUCH <i className='fas fa-angle-right'></i>
									</button>
								</div>
							</div>
						</div>
						<div
							className='w-full lg:w-1/2 border order-1 lg:order-2'
							data-aos='fade-left'
							data-aos-duration='800'
							data-aos-once='true'
						>
							<div className='relative w-full border'>
								<div className='lg:absolute w-full left-0 lg:top-44 rotate-12'>
									<Image
										src='/image/landing-6/dashboard-img.svg'
										alt='image'
										width={2222}
										height={1933}
									/>
								</div>
								{/* <div className='absolute top-[333px] left-[23%]'>
									<Image src='/image/landing-6/card-img.svg' alt='image' width={222} height={333} />
								</div>
								<div className='absolute top-[588px] left-[7%]'>
									<Image src='/image/landing-6/widget-img.svg' alt='image' width={222} height={333} />
								</div> */}
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Hero;
