import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Footer = () => {
	return (
		<footer className='pt-16 md:pt-24 pb-24'>
			<div className='container mx-auto px-5 lg:px-24'>
				<div className='flex flex-col lg:flex-row gap-4'>
					<div className=' w-full lg:w-2/6 pb-5 md:pb-0'>
						<div className=''>
							<Link href='/'>
								<Image
									src='/image/logo/smartchin-logo-black-2.svg'
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
										<Link href='https://twitter.com/SmartChain_tech?s=08' className='text-gray-500'>
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
						<div className='w-full md:w-1/4 space-y-3'>
							<h4 className='text-secondary text-base font-semibold tracking-wider'>Theme Pages</h4>
							<ul className='text-base text-secondary space-y-2 tracking-wide'>
								<li>
									<Link href='#'>Home Pages</Link>
								</li>
								<li>
									<Link href='#'>Pricing</Link>
								</li>
								<li>
									<Link href='#'>Contact Us</Link>
								</li>
								<li>
									<Link href='#'>Team</Link>
								</li>
								<li>
									<Link href='#'>About Us</Link>
								</li>
							</ul>
						</div>
						<div className='w-full md:w-1/4 space-y-3'>
							<h4 className='text-secondary text-base font-semibold tracking-wider'>Company Bio</h4>
							<ul className='text-base text-secondary space-y-2 tracking-wide'>
								<li>
									<Link href='#'>Blog</Link>
								</li>
								<li>
									<Link href='#'>Help Center</Link>
								</li>
								<li>
									<Link href='#'>Sales Tools Catalog</Link>
								</li>
								<li>
									<Link href='#'>Academy</Link>
								</li>
							</ul>
						</div>
						<div className='w-full md:w-1/4 space-y-3'>
							<h4 className='text-secondary text-base font-semibold tracking-wider'>Information</h4>
							<ul className='text-base text-secondary space-y-2 tracking-wide'>
								<li>
									<Link href='#'>Terms and Policy</Link>
								</li>

								<li>
									<Link href='#'>Support</Link>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
