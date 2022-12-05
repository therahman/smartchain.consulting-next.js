import Image from 'next/image';
import React from 'react';
import ff from '../public/image/blog/blog-img-1.png';
const AboutUs = () => {
	return (
		<>
			<div className='pt-32 lg:pt-56 pb-32'>
				<div className='container mx-auto lg:px-24 px-5'>
					<div className='flex justify-center'>
						<div
							className='max-w-3xl w-full'
							data-aos='fade-up'
							data-aos-duration='800'
							data-aos-once='true'
						>
							<div className='text-center space-y-4'>
								<h2 className='text-5xl lg:text-6xl font-bold leading-[52px] lg:leading-[72px] '>
									We help business to grow their customer base
								</h2>
								<p>
									Leverage agile frameworks to provide a robust synopsis for high level overviews.
									Iterative approaches to corporate strategy foster collaborative thinking.
								</p>
								<button className='bg-primary px-8 py-3 text-white rounded-lg'>Contact Us</button>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className=''>
				<div className='container mx-auto lg:px-24 px-5'>
					<div className='flex gap-8'>
						<div className='w-1/2' data-aos='fade-right' data-aos-duration='800' data-aos-once='true'>
							<div className=''>
								<Image src='/image/blog/blog-img-1.png' alt='image' width={666} height={555} />
							</div>
						</div>
						<div className='w-1/2' data-aos='fade-left' data-aos-duration='800' data-aos-once='true'>
							<div className='about-content-1-right'>
								<Image
									className='w-100'
									src='/image/blog/blog-img-1.png'
									alt='image'
									width={666}
									height={555}
								/>
							</div>
						</div>
					</div>
					<div className='flex'>
						<div className='w-1/2' data-aos='fade-right' data-aos-duration='800' data-aos-once='true'>
							<div className=''>
								<h2 className='text-5xl font-bold '>Empower business to achieve success.</h2>
							</div>
						</div>
						<div className='w-1/2' data-aos='fade-left' data-aos-duration='800' data-aos-once='true'>
							<div className='space-y-3'>
								<p>
									Leverage agile frameworks to provide a robust synopsis for high level overviews.
									Iterative approaches to corporate strategy foster collaborative thinking.
								</p>
								<p>
									{' '}
									Bring to the table win-win survival strategies to ensure proactive domination. At
									the end of the day, going forward, a new normal that has evolved from generation
								</p>
								<p>
									Heading towards a streamlined cloud solution. User generated content in real-time
									will have multiple touchpoints for offshoring.
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className='about-content-2 bg-catskillwhite'>
				<div className='container mx-auto px-24'>
					<div className='flex'>
						<div className='w-5/12' data-aos='fade-right' data-aos-duration='800' data-aos-once='true'>
							<div className='about-content-2-img-1'>
								<Image
									className='w-100'
									src='image/blog/blog-img-1.png'
									alt='image'
									width={666}
									height={555}
								/>
							</div>
							<div className='about-content-2-img-2 text-end'>
								<Image
									className='w-100'
									src='/image/blog/blog-img-1.png'
									alt='image'
									width={666}
									height={555}
								/>
							</div>
						</div>
						<div className='w-7/12' data-aos='fade-left' data-aos-duration='800' data-aos-once='true'>
							<div className='about-content-2-content'>
								<div className='section__heading'>
									<h2>High skilled employee from worldwide.</h2>
									<p>
										Leverage agile frameworks to provide a robust synopsis for high level overviews.
										Iterative approaches to corporate strategy foster collaborative thinking.
									</p>
									<p>
										{' '}
										Bring to the table win-win survival strategies to ensure proactive domination.
										At the end of the day, going forward, a new normal.
									</p>
								</div>
							</div>
							<div className='about-content-2-right-img '>
								<Image
									className='w-100'
									src='/image/blog/blog-img-1.png'
									alt='image'
									width={666}
									height={555}
								/>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default AboutUs;
