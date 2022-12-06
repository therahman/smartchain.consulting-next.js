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
							<Image
								src='//image/logo/smartchin-logo-white-4.svg'
								width={120}
								height={44}
								alt='smartchin-logo'
							/>
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
						</nav>
					</div>
					<div className='header-btns header-btns ms-auto d-none d-xs-inline-flex'>
						<a className='bg-primary px-5 py-3 text-white rounded-lg text-sm ' href='#'>
							Get in touch
						</a>
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
