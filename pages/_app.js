import Layout from '../layout/Layout';
import NextNProgress from 'nextjs-progressbar';

import '../styles/styles.css';
import '../styles/globals.css';
import '../styles/fonts/fontawesome-5/css/all.css';
import '../styles/fonts/icon-font/css/style.css';
import { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';

function MyApp({ Component, pageProps }) {
	useEffect(() => {
		Aos.init();
	}, []);
	return (
		<>
			<NextNProgress color='#416ff4' startPosition={0.3} stopDelayMs={200} height={3} showOnShallow={true} />
			<Layout>
				<Component {...pageProps} />
			</Layout>
		</>
	);
}

export default MyApp;
