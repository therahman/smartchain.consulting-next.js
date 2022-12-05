import Link from 'next/link';
import React, { useState } from 'react';

const Navbar = () => {
	const [menuOpen, setMenuOpen] = useState(true);
	return (
		<>
			<ul className='site-menu-main'>
				<li className='nav-item '>
					<Link href='/'>
						<a className='nav-link-item drop-trigger'>Home</a>
					</Link>
				</li>
				<li className='nav-item nav-item-has-children has-megamenu' onClick={() => setMenuOpen(!menuOpen)}>
					<a className='nav-link-item drop-trigger'>
						Services <i className='fas fa-angle-down'></i>
					</a>
					<div
						className={`${
							menuOpen
								? 'sub-menu megamenu megadropdown-center d-lg-flex slideRight'
								: 'sub-menu megamenu megadropdown-center d-lg-flex active slideLeft'
						}`}
						id='submenu-100'
					>
						<ul className='grid grid-cols-1 lg:grid-cols-4 gap-4 gap-y-4 lg:gap-y-8 pt-5 lg:pt-0'>
							<li className='w-full'>
								<div className=''>
									<h3 className='text-sm tracking-widest text-dark-400 lg:mb-3 uppercase'>
										NFT Development
									</h3>
									<div className='pl-3 space-y-2'>
										<Link href='#'>
											<a className='text-base hover:text-primary text-secondary tracking-wider'>
												2D and 3D Character Creation
											</a>
										</Link>
										<Link href='#'>
											<a className='text-base hover:text-primary text-secondary tracking-wider'>
												NFT Card Designs
											</a>
										</Link>
										<Link href='#'>
											<a className='text-base hover:text-primary text-secondary tracking-wider'>
												Images with traits
											</a>
										</Link>
										<Link href='#'>
											<a className='text-base hover:text-primary text-secondary tracking-wider'>
												Marketplace
											</a>
										</Link>
									</div>
								</div>
							</li>
							<li className='w-full'>
								<div className=''>
									<h3 className='text-sm tracking-widest text-dark-400 lg:mb-3 uppercase'>
										Web App Development
									</h3>
									<div className='pl-3 space-y-2'>
										<Link href='#'>
											<a className='text-base hover:text-primary text-secondary tracking-wider'>
												ERP
											</a>
										</Link>
										<Link href='#'>
											<a className='text-base hover:text-primary text-secondary tracking-wider'>
												CRM
											</a>
										</Link>
										<Link href='#'>
											<a className='text-base hover:text-primary text-secondary tracking-wider'>
												Supply Chain
											</a>
										</Link>
										<Link href='#'>
											<a className='text-base hover:text-primary text-secondary tracking-wider'>
												Logistics
											</a>
										</Link>
										<Link href='#'>
											<a className='text-base hover:text-primary text-secondary tracking-wider'>
												eCommerce
											</a>
										</Link>
									</div>
								</div>
							</li>
							<li className='w-full'>
								<div className=''>
									<h3 className='text-sm tracking-widest text-dark-400 lg:mb-3 uppercase'>
										Custom Software
									</h3>
								</div>
							</li>
							<li className='w-full'>
								<div className=''>
									<h3 className='text-sm tracking-widest text-dark-400 lg:mb-3 uppercase'>
										Website Development
									</h3>
									<div className='pl-3 space-y-2'>
										<Link href='#'>
											<a className='text-base hover:text-primary text-secondary tracking-wider'>
												Wordpress Website
											</a>
										</Link>
										<Link href='#'>
											<a className='text-base hover:text-primary text-secondary tracking-wider'>
												eCommerce
											</a>
										</Link>
										<Link href='#'>
											<a className='text-base hover:text-primary text-secondary tracking-wider'>
												Business Website
											</a>
										</Link>
										<Link href='#'>
											<a className='text-base hover:text-primary text-secondary tracking-wider'>
												Multi use Website
											</a>
										</Link>
									</div>
								</div>
							</li>
							<li className='w-full'>
								<div className=''>
									<h3 className='text-sm tracking-widest text-dark-400 lg:mb-3 uppercase'>
										Digital Marketing
									</h3>
									<div className='pl-3 space-y-2'>
										<Link href='#'>
											<a className='text-base hover:text-primary text-secondary tracking-wider'>
												Social Media Management
											</a>
										</Link>
										<Link href='#'>
											<a className='text-base hover:text-primary text-secondary tracking-wider'>
												SEO Services
											</a>
										</Link>
									</div>
								</div>
							</li>
						</ul>
					</div>
				</li>
				<li className='nav-item'>
					<Link href='blogs'>
						<a className='nav-link-item'>Blogs</a>
					</Link>
				</li>
				<li className='nav-item'>
					<Link href='about-us'>
						<a className='nav-link-item'>About Us</a>
					</Link>
				</li>
			</ul>
		</>
	);
};

export default Navbar;
