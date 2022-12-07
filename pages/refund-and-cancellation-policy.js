import React from 'react';

const RefundCancellationPolicy = () => {
	return (
		<>
			<Head>
				<title>Refund Cancellation Policy</title>
			</Head>
			<section>
				<div className='container mx-auto max-w-4xl w-full px-5 lg:px-24 py-12 lg:py-24'>
					<div className='pt-12 space-y-4 lg:space-y-8'>
						<h1 className='text-left lg:text-center text-4xl font-semibold text-secondary'>
							Refund & Cancellation Policy
						</h1>
					</div>
					<div className='pt-9 space-y-2'>
						<h1 className='text-xl font-semibold text-secondary'>1.0 Refund Terms</h1>
						<div className='space-y-2'>
							<p>
								Smart Chain offers a 30 days refund policy on all Services sold, on all products that
								fall under the refund policy, on all products and services where 30 day refund is
								mentioned. To ensure our customer protection, customers can request a refund within 30
								days from the date of the purchase.
							</p>
							<p>
								We offer refunds if we are unable to solve the problem in Smart Chain’s
								extension/module/plugins as advertised in the user guide and product demo. It is
								mandatory that the customer must provide us with server access including [ GIT OR FTP
								access ].
							</p>
							<p>
								Refunds do not include any extended feature, conflict with other plugins and software.
								Although Smart Chain’s extensions/modules/plugins/ are compatible with every theme or
								template.
							</p>
							<p>
								In case of theme or template incompatibility customers need to provide the server access
								[ GIT or FTP details ] and we will ensure that our modules/plugins/extensions are fully
								compatible with Smart Chain Products or Services.
							</p>
							<p>
								To request a refund please share the details at our customer support system. Our
								dedicated team will ensure that you will get the refund within 15 business days.
							</p>
							<p>
								Customers must ensure that they have deleted all the copies/files of smart chain
								software from their server/host.
							</p>
							<p>Also, they need to confirm the same via email to our helpdesk system.</p>
							<p>
								Refunds will not be granted in case of installation and customization or consultancy
								services. We are highly focused on our customer's happiness. We also offer a refund as a
								credit feature as well.
							</p>
						</div>
					</div>
					<div className='pt-9 space-y-2'>
						<h1 className='text-xl font-semibold text-secondary'>2.0 Cancellation Terms</h1>
						<p>
							If our software is not working properly as advertised and we are unable to fix the problem,
							in that case, the customer may also request a cancellation as a credit. Which they may use
							in another Smart Chains product/service purchase.
						</p>
					</div>
				</div>
			</section>
		</>
	);
};

export default RefundCancellationPolicy;
