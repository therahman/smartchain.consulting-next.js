import Image from 'next/image';
import React from 'react';
import preloader from '../../public/image/preloader.gif';
const Preloader = () => {
	return (
		<div id='loading' className='hidden'>
			<div className='preloader'>
				<Image src={preloader} alt='Picture of the author' width={200} height={200} />
			</div>
		</div>
	);
};

export default Preloader;
