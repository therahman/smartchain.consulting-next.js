import Head from 'next/head';

import React, { useEffect, useState } from 'react';
import Preloader from '../components/Preloader/Preloader';
import Footer from './Footer';
import Header from './Header';

const Layout = ({ children }) => {
	const [loading, setLoading] = useState(false);
	useEffect(() => {
		// setLoading(true);
		// setTimeout(() => {
		// 	setLoading(false);
		// }, 5000);
		window.addEventListener('load', (event) => {
			console.log('page is fully loaded');
		});
	}, []);

	return (
		<>
			<Head>
				<meta name='description' content='Smartchain Consulting' />
				<title>Smartchain-Consulting</title>
				<link rel='apple-touch-icon' sizes='180x180' href='/apple-touch-icon.png' />
				<link rel='mask-icon' href='/safari-pinned-tab.svg' color='#131419' />
				<meta name='msapplication-TileColor' content='#131419' />
				<meta name='theme-color' content='#131419'></meta>
				<link rel='icon' href='/favicon.png' sizes='180x180' />
			</Head>
			{/* {loading ? <Preloader /> : ''} */}
			<Header />
			{children}
			<Footer />
		</>
	);
};

export default Layout;
