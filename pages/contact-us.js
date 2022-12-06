import React from 'react';
import Form from '../components/Form/Form';

const ContactUs = () => {
	return (
		<>
			<div className='contact-us-area'>
				<div className='container mx-auto '>
					<div className='row'>
						<div className='col-lg-12'>
							<div className='contact-us-banner text-center'>
								<h2>Contact us</h2>
								<p>Have a question or just want to say hi? We'd love to hear from you.</p>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className='contact-us-form-area'>
				<div className='container mx-auto px-5 lg:px-24'>
					<div className='row'>
						<div className='col-lg-12'>
							<Form.Contact />
						</div>
					</div>

					<div className='row contact-get-in-touch-area d-flex justify-content-center'>
						<div className='col-lg-4 col-md-6 col-sm-6 text-center'>
							<div className='get-in-touch-single'>
								<div className='icon'>
									<svg xmlns='http://www.w3.org/2000/svg' width='36' height='35' viewBox='0 0 36 35'>
										<g>
											<g>
												<path
													fill='#416ff4'
													d='M3.6 18.421H9c1.988 0 3.6 1.65 3.6 3.684v9.21C12.6 33.352 10.988 35 9 35H3.6C1.612 35 0 33.35 0 31.316V18.42C0 8.247 8.059 0 18 0s18 8.247 18 18.421v12.895C36 33.35 34.388 35 32.4 35H27c-1.988 0-3.6-1.65-3.6-3.684v-9.21c0-2.035 1.612-3.685 3.6-3.685h5.4c0-8.139-6.447-14.737-14.4-14.737S3.6 10.282 3.6 18.421z'
												/>
											</g>
										</g>
									</svg>
								</div>
								<div className='content'>
									<h4>Help & support</h4>
									<p>
										Email <a href='#'>info@smartchain.me</a>
										<br />
										for help with a current product or service or refer to FAQs and developer tools
									</p>
								</div>
							</div>
						</div>
					</div>
					<div className='row'>
						<div className='col-lg-12 d-flex justify-content-center'>
							<div className='contact-us-supp-btn'>
								<button className='btn focus-reset'>Support Center</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default ContactUs;
