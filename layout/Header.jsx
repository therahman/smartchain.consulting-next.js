import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import Navbar from './Navbar';
const Header = () => {
	const [menuOpen, setMenuOpen] = useState(true);
	useEffect(() => {
		function scrollFunction() {
			const sticky = document.querySelector('.site-header');
			if (window.scrollY > 50) {
				sticky.classList.add('scrolling');
			} else {
				sticky.classList.remove('scrolling');
			}
			if (window.scrollY > 700) {
				sticky.classList.add('reveal-header');
			} else {
				sticky.classList.remove('reveal-header');
			}
		}
		window.addEventListener('load', () => scrollFunction());
		window.addEventListener('scroll', () => scrollFunction());
	});

	return (
		<header className='bg-secondary site-header site-header--menu-left landing-6-menu dark-mode-texts site-header--absolute site-header--sticky '>
			<div className='container mx-auto px-5'>
				<nav className='navbar site-navbar'>
					{/* Brand Logo */}
					<div className='brand-logo'>
						<Link href='/'>
							<Image src='/image/logo/smartchin-logo-white-4.svg' width={120} height={44} alt='xc' />
						</Link>
					</div>
					<div className='menu-block-wrapper'>
						<div className={`${menuOpen ? 'menu-overlay' : 'menu-overlay active'}`}></div>
						<nav className={`${menuOpen ? 'menu-block' : 'menu-block active'} `} id='append-menu-header'>
							<div className='mobile-menu-head'>
								<div className='go-back'>
									<i className='fa fa-angle-left'></i>
								</div>
								<div className='current-menu-title'></div>
								<div onClick={() => setMenuOpen(!menuOpen)} className='mobile-menu-close'>
									&times;
								</div>
							</div>
							<Navbar />
							{/* <ul className='site-menu-main'>
								<li className='nav-item '>
									<Link href='/' className='nav-link-item drop-trigger'>
										Home
									</Link>
								</li>
								<li className='nav-item nav-item-has-children has-megamenu'>
									<a href='#' className='nav-link-item drop-trigger'>
										Services <i className='fas fa-angle-down'></i>
									</a>
									<div className='sub-menu megamenu megadropdown-center d-lg-flex' id='submenu-100'>
										<ul className='grid grid-cols-4 gap-4'>
											<li className='w-full'>
												<div className=''>
													<h3 className='text-sm tracking-widest text-dark-400 mb-3 uppercase'>
														NFT Development
													</h3>
													<div className='pl-3 space-y-2'>
														<Link
															href='#'
															className='text-sm hover:text-primary text-secondary tracking-wider'
														>
															2D and 3D Character Creation
														</Link>
														<Link
															href='#'
															className='text-sm hover:text-primary text-secondary tracking-wider'
														>
															NFT Card Designs
														</Link>
														<Link
															href='#'
															className='text-sm hover:text-primary text-secondary tracking-wider'
														>
															Images with traits
														</Link>
														<Link
															href='#'
															className='text-sm hover:text-primary text-secondary tracking-wider'
														>
															Marketplace
														</Link>
													</div>
												</div>
											</li>
											<li className='w-full'>
												<div className=''>
													<h3>Classic Grid Style</h3>
													<a
														href='classic-2-in-container.html'
														className='mega-drop-menu-item sub-menu--item'
													>
														Two Column Grid
													</a>
													<a
														href='classic-3-in-container.html'
														className='mega-drop-menu-item sub-menu--item'
													>
														Three Column Grid
													</a>
													<a
														href='classic-4-in-container.html'
														className='mega-drop-menu-item sub-menu--item'
													>
														Four Column Grid
													</a>
													<a
														href='classic-2-in-container-full.html'
														className='mega-drop-menu-item sub-menu--item'
													>
														Two Column Wide
													</a>
													<a
														href='classic-3-full.html'
														className='mega-drop-menu-item sub-menu--item'
													>
														Three Column Wide
													</a>
													<a
														href='classic-4-full.html'
														className='mega-drop-menu-item sub-menu--item'
													>
														Four Column Wide
													</a>
												</div>
											</li>
											<li className='w-full'>
												<div className=''>
													<h3>Masonry Style</h3>
													<a
														href='masonry-3-in-container.html'
														className='mega-drop-menu-item sub-menu--item'
													>
														Three Column in Grid{' '}
													</a>
													<a
														href='masonry-4-in-container.html'
														className='mega-drop-menu-item sub-menu--item'
													>
														Four Column in Grid
													</a>
													<a
														href='masonry-3-full.html'
														className='mega-drop-menu-item sub-menu--item'
													>
														Three Column Wide
													</a>
													<a
														href='masonry-4-full.html'
														className='mega-drop-menu-item sub-menu--item'
													>
														Four Column Wide
													</a>
													<a
														href='masonry-3-classic.html'
														className='mega-drop-menu-item sub-menu--item d-block'
													>
														Three Column Classic
													</a>
													<a
														href='masonry-4-classic.html'
														className='mega-drop-menu-item sub-menu--item d-block'
													>
														Four Column Classic
													</a>
												</div>
											</li>
											<li className='w-full'>
												<div className=''>
													<h3>Single Project</h3>
													<a
														href='portfolio-details-1.html'
														className='mega-drop-menu-item sub-menu--item d-block'
													>
														Portfolio-details-01
													</a>
													<a
														href='portfolio-details-2.html'
														className='mega-drop-menu-item sub-menu--item d-block'
													>
														Portfolio-details-02
													</a>
													<a
														href='portfolio-details-3.html'
														className='mega-drop-menu-item sub-menu--item d-block'
													>
														Portfolio-details-03
													</a>
												</div>
											</li>
											<li className='w-full'>
												<div className=''>
													<h3>Single Project</h3>
													<a
														href='portfolio-details-1.html'
														className='mega-drop-menu-item sub-menu--item d-block'
													>
														Portfolio-details-01
													</a>
													<a
														href='portfolio-details-2.html'
														className='mega-drop-menu-item sub-menu--item d-block'
													>
														Portfolio-details-02
													</a>
													<a
														href='portfolio-details-3.html'
														className='mega-drop-menu-item sub-menu--item d-block'
													>
														Portfolio-details-03
													</a>
												</div>
											</li>
										</ul>
									</div>
								</li>
								<li className='nav-item'>
									<Link href='blogs' className='nav-link-item'>
										Blogs
									</Link>
								</li>
								<li className='nav-item'>
									<Link href='about-us' className='nav-link-item'>
										About Us
									</Link>
								</li>
							</ul> */}
						</nav>
					</div>
					<div className='header-btns header-btns ms-auto d-none d-xs-inline-flex'>
						<a className='bg-primary px-5 py-3 text-white rounded-lg text-sm ' href='#'>
							Get in touch
						</a>
						{/* <a className='btn sign-in-btn focus-reset' href='#'>
							Sign In
						</a> */}
					</div>
					{/* mobile menu trigger */}
					<div onClick={() => setMenuOpen(!menuOpen)} className='mobile-menu-trigger'>
						<span></span>
					</div>
					{/* /.Mobile Menu Hamburger Ends */}
				</nav>
			</div>
		</header>
	);
};

export default Header;
