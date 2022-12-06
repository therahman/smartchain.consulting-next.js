import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Footer = () => {
	return (
		<footer className='pt-16 md:pt-24 pb-8'>
			<div className='container mx-auto px-5 lg:px-24'>
				<div className='flex flex-col lg:flex-row gap-4'>
					<div className=' w-full lg:w-2/6 pb-5 md:pb-0'>
						<div className=''>
							<Link href='/'>
								<Image
									src='//image/logo/smartchin-logo-black-2.svg'
									width={120}
									height={44}
									alt='smartchin-logo-black-2'
								/>
							</Link>
							<div className='pt-8 lg:pt-36'>
								<h4 className='text-gray-500'>Follow us on :</h4>
								<ul className='flex gap-5'>
									<li>
										<Link href='#' className='text-gray-500'>
											<i className='fab fa-facebook-f'></i>
										</Link>
									</li>
									<li>
										<Link href='#' className='text-gray-500'>
											<i className='fab fa-twitter'></i>
										</Link>
									</li>
									<li>
										<Link href='#' className='text-gray-500'>
											<i className='fab fa-instagram'></i>
										</Link>
									</li>
									<li>
										<Link href='#' className='text-gray-500'>
											<i className='fab fa-youtube'></i>
										</Link>
									</li>
								</ul>
							</div>
						</div>
					</div>
					<div className='w-full lg:w-4/6 flex flex-col md:flex-row gap-4'>
						<div className='w-full md:w-2/6	 space-y-3'>
							<h4 className='text-secondary text-base font-semibold tracking-wider'>Company</h4>
							<ul className='text-base text-secondary space-y-2 tracking-wide'>
								<li>
									<Link href='#'>
										<a>About Us</a>
									</Link>
								</li>
								<li>
									<Link href='#'>
										<a>Contact Us</a>
									</Link>
								</li>
								<li>
									<Link href='#'>
										<a>Products</a>
									</Link>
								</li>
								<li>
									<Link href='#'>
										<a>Services</a>
									</Link>
								</li>
							</ul>
						</div>
						<div className='w-full md:w-2/6	 space-y-3'>
							<h4 className='text-secondary text-base font-semibold tracking-wider'>Information</h4>
							<ul className='text-base text-secondary space-y-2 tracking-wide'>
								<li>
									<Link href='/privacy-policy'>
										<a>Terms & Conditions</a>
									</Link>
								</li>
								<li>
									<Link href='/refund-and-cancellation-policy'>
										<a>Refund & Return Policy</a>
									</Link>
								</li>
								<li>
									<Link href='/software-license-agreement'>
										<a>Software License Agreement</a>
									</Link>
								</li>

								<li>
									<Link href='/refund-and-cancellation-policy'>
										<a>Cancellation Policy</a>
									</Link>
								</li>
							</ul>
						</div>
						<div className='w-full md:w-2/6	 space-y-3'>
							<h4 className='text-secondary text-base font-semibold tracking-wider'>Payments</h4>
							<ul className='text-base grid grid-cols-3 gap-2 text-secondary tracking-wide'>
								<li className=' w-full h-full flex items-center justify-center  p-1 rounded-md'>
									<Image src='//image/logo/pci.png' width={100} height={38} />
								</li>
								<li className=' w-full flex items-center justify-center p-1 rounded-md'>
									<Image src='//image/logo/visa.png' width={100} height={38} />
								</li>
								<li className=' w-full flex items-center justify-center p-1 rounded-md'>
									<Image src='//image/logo/mastercard.png' width={100} height={55} />
								</li>
								<li></li>
							</ul>
						</div>
					</div>
				</div>
				<div className='mt-5 pt-5 border-t flex items-center justify-center'>
					<div className='space-y-1'>
						<p className='text-sm text-center'>Copyright © Smart Chain Online 2022</p>
						<p className='text-sm text-center'>
							Abu Dhabi, UAE{' '}
							<a href='' className='font-semibold'>
								info@smartchain.me
							</a>
						</p>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
