import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import dds from '../../public/image/shop/1-cms-basic4x.png';
const details = () => {
	const [active, setActive] = useState(0);
	return (
		<>
			<div className=''>
				<div className='container mx-auto px-24 pt-44 pb-24'>
					<div className='flex gap-6 pb-16'>
						<div className='w-1/2 pr-8'>
							<div className='row'>
								<div className='border'>
									<Image
										src={dds}
										// src='/image/shop/4x/1-cms-basic4x.png'
										alt='1-cms-basic4x'
										width={555}
										height={444}
									/>
								</div>
							</div>
						</div>
						<div className='w-1/2'>
							<div className=''>
								<div className='pb-5'>
									<ul className='flex gap-3 text-yellow-400 text-lg'>
										<li>
											<i className='fas fa-star'></i>
										</li>
										<li>
											<i className='fas fa-star'></i>
										</li>
										<li>
											<i className='fas fa-star'></i>
										</li>
										<li>
											<i className='fas fa-star'></i>
										</li>
										<li>
											<i className='fas fa-star-half-alt'></i>
										</li>
									</ul>
								</div>
								<div className='mt-2 mb-4'>
									<h2 className='uppercase text-3xl '>uber-like riding application</h2>
								</div>
								<div className='mb-3'>
									<span className='text-sm font-bold text-green-500'>Special Price </span>
								</div>
								<div className='mb-3 flex gap-3 items-end'>
									<p className='text-4xl text-secondary font-semibold'>$550</p>
									<span className='text-2xl font-normal text-dark-400 line-through'>$700</span>
								</div>
								<div className=''>
									<p className='text-base text-dark-400 '>
										Leverage agile frameworks to provide a robust synopsis for high level overviews.
										Iterative approaches to corporate strategy foster collaborative thinking to
										further the overall.
									</p>
								</div>
								<div className='mt-4 '>
									<ul className='flex flex-col gap-4 text-dark-400'>
										<li>
											<p>No of pages upto 5.</p>
										</li>
										<li>
											<p>Additional Pages $ 100.</p>
										</li>

										<li>
											<p>Responsive Design</p>
										</li>
										<li>
											<p>Custom Layout Design.</p>
										</li>
										<li>
											<p>SEO Semantic HTML Code.</p>
										</li>
										<li>
											<p>SEO Semantic HTML Code.</p>
										</li>
										<li>
											<p>Integrated Contact Forms w/Captcha</p>
										</li>
										<li>
											<p>Social Media Buttons</p>
										</li>
										<li>
											<p>Google location maps</p>
										</li>
										<li>
											<p>Website Training</p>
										</li>
									</ul>
								</div>

								<div className='flex gap-3 pt-6'>
									<Link href='#'>
										<button className='px-8 py-2.5 rounded-lg bg-primary text-white'>
											Buy Now
										</button>
									</Link>
									<Link href='#'>
										<button className='px-8 py-2.5 rounded-lg border border-primary text-primary'>
											Add to Cart
										</button>
									</Link>
								</div>
							</div>
						</div>
					</div>
					<div className=''>
						<div className='mb-6 mt-4'>
							<nav>
								<ul className='flex space-x-12 items-center border-b'>
									<li
										onClick={() => setActive(0)}
										className={`${
											active === 0
												? ' after:bg-primary text-secondary '
												: ' after:bg-transparent  text-dark-400 '
										} cursor-pointer py-4 text-base font-semibold relative after:absolute after:bottom-0 after:left-0 after:contents[""] after:w-full after:h-[2px] `}
									>
										Description
									</li>
									<li
										onClick={() => setActive(1)}
										className={`${
											active === 1
												? ' after:bg-primary text-secondary'
												: ' after:bg-transparent text-dark-400'
										} cursor-pointer py-4 text-base font-semibold text-secondary relative after:absolute after:bottom-0 after:left-0 after:contents[""] after:w-full after:h-[2px] `}
									>
										Specification
									</li>
									<li
										onClick={() => setActive(2)}
										className={`${
											active === 2
												? ' after:bg-primary text-secondary '
												: ' after:bg-transparent text-dark-400'
										} cursor-pointer py-4 text-base font-semibold text-secondary relative after:absolute after:bottom-0 after:left-0 after:contents[""] after:w-full after:h-[2px] `}
									>
										Reviews
									</li>
								</ul>
							</nav>
						</div>
						<div>
							{active === 0 ? (
								<div className='text-base font-normal text-secondary space-y-4'>
									<p className='text-base font-normal text-secondary tracking-wider'>
										Leverage agile frameworks to provide a robust synopsis for high level overviews.
										Iterative approaches to corporate strategy foster collaborative thinking to
										further the overall value proposition. Organically grow the holistic world view
										of disruptive innovation via workplace diversity and empowerment.Leverage agile
										frameworks to provide a robust synopsis for high level overviews.{' '}
									</p>
									<p className='text-base font-normal text-secondary tracking-wider'>
										I terative approaches to corporate strategy foster collaborative thinking to
										further the overall value proposition. Organically grow the holistic world view
										of disruptive innovation via workplace diversity and empowerment.
									</p>
									<p className='text-base font-normal text-secondary tracking-wider'>
										{' '}
										Capitalize on low hanging fruit to identify a ballpark value added activity to
										beta test. Override the digital divide with additional clickthroughs from
										DevOps. Nanotechnology immersion along the information highway will close the
										loop on focusing solely on the bottom line.Capitalize on low hanging fruit to
										identify a ballpark value added activity to beta test. Override the digital
										divide with additional clickthroughs from DevOps. Nanotechnology immersion along
										the information highway will close the loop on focusing solely on the bottom
										line.
									</p>
								</div>
							) : (
								''
							)}
							{active === 1 ? (
								<div className='space-y-4'>
									<p className='text-base font-normal text-secondary tracking-wider'>
										Capitalize on low hanging fruit to identify a ballpark value added activity to
										beta test. Override the digital divide with additional clickthroughs from
										DevOps. Nanotechnology immersion along the information highway will close the
										loop on focusing solely on the bottom line.Capitalize on low hanging fruit to
										identify a ballpark value added activity to beta test. Override the digital
										divide with additional clickthroughs from DevOps. Nanotechnology immersion along
										the information highway will close the loop on focusing solely on the bottom
										line.
									</p>
								</div>
							) : (
								''
							)}
							{active === 2 ? (
								<div className='space-y-4'>
									<p className='text-base font-normal text-secondary tracking-wider'>
										terative approaches to corporate strategy foster collaborative thinking to
										further the overall value proposition. Organically grow the holistic world view
										of disruptive innovation via workplace diversity and empowerment.
									</p>
								</div>
							) : (
								''
							)}
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default details;
