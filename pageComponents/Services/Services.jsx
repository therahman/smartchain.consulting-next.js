import Image from 'next/image';
import Link from 'next/link';

const myLoader = ({ src }) => {
	return `https:${src}`;
};

const Services = ({ product }) => {
	return (
		<>
			<div className='container mx-auto px-5 pt-36 pb-24 lg:px-24'>
				<div className='grid lg:grid-cols-12 gap-6'>
					<div className='w-full col-span-12 md:col-span-6 lg:col-span-3 space-y-2 order-2 lg:order-1'>
						<div className=' relative w-full rounded-lg overflow-hidden bg-white'>
							<Image
								loader={myLoader}
								src={product?.cover.fields.file.url}
								alt={product?.cover.fields.title}
								width={555}
								height={555}
							/>
						</div>
						<div className='space-y-2.5'>
							<Link href='https://forms.gle/Eu5HbpanCFtiWdWt5'>
								<a
									target='_blank'
									rel='noreferrer'
									className='w-full py-2.5 flex justify-center items-center gap-1 px-3 border border-primary rounded-lg text-primary'
								>
									User Guide
									<svg
										className='fill-primary'
										xmlns='http://www.w3.org/2000/svg'
										viewBox='0 0 24 24'
										width='20'
										height='20'
									>
										<path fill='none' d='M0 0h24v24H0z' />
										<path d='M10 6v2H5v11h11v-5h2v6a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h6zm11-3v8h-2V6.413l-7.793 7.794-1.414-1.414L17.585 5H13V3h8z' />
									</svg>
								</a>
							</Link>

							<Link href='https://forms.gle/8LQQxR82zJdh1cXy5'>
								<a
									target='_blank'
									rel='noreferrer'
									className='w-full py-2.5 flex justify-center items-center gap-1 px-3 border border-primary rounded-lg text-primary'
								>
									Contact US
									<svg
										className='fill-primary'
										xmlns='http://www.w3.org/2000/svg'
										viewBox='0 0 24 24'
										width='20'
										height='20'
									>
										<path fill='none' d='M0 0h24v24H0z' />
										<path d='M10 6v2H5v11h11v-5h2v6a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h6zm11-3v8h-2V6.413l-7.793 7.794-1.414-1.414L17.585 5H13V3h8z' />
									</svg>
								</a>
							</Link>
						</div>
					</div>
					<div className='w-full col-span-12 lg:col-span-6 order-1 lg:order-2'>
						<div className='space-y-2 pb-4'>
							<h1 className='text-2xl font-semibold text-secondary'>{product?.name}</h1>
							<div className='divide-x-[1px] flex items-center '>
								<div className='flex items-center gap-2 pr-2'>
									<ul className='flex gap-2 text-yellow-400 text-lg'>
										<li>
											<i className='fas fa-star'></i>
										</li>
										<li>
											<i className='fas fa-star'></i>
										</li>
										<li>
											<i className='fas fa-star'></i>
										</li>
										<li>
											<i className='fas fa-star'></i>
										</li>
										<li>
											<i className='fas fa-star-half-alt'></i>
										</li>
									</ul>
									<span className='text-sm text-dark-400'>{product?.reviews} Reviews</span>
								</div>
								<a href='' className='pl-2 text-primary'>
									Write a Reviews
								</a>
							</div>
						</div>

						<div className=''>
							<p>{product?.shortDescription}</p>
						</div>
					</div>
					<div className=' w-full col-span-12 md:col-span-6 lg:col-span-3 order-3 lg:order-3'>
						<div className=' space-y-2'>
							<div className='border p-3 space-y-2 rounded-md'>
								<div className='py-3 border-b'>
									<h1 className='text-center text-2xl font-semibold text-secondary'>
										$ {product?.price}
									</h1>
								</div>
								<ul className='space-y-1'>
									<li className='flex items-center justify-between'>
										<p>Base Price USD </p>
										<span>${product?.price}</span>
									</li>
									<li className='flex items-center justify-between'>
										<p>Module extension</p>
										<span>${product?.modulePrice}</span>
									</li>
									<li className='flex items-center justify-between'>
										<p>Multi User</p>
										<span>${product?.multiUserPrice}</span>
									</li>
								</ul>
								<div className='flex items-center gap-2 flex-col'>
									<Link href='https://checkout.stripe.com/c/pay/cs_live_a1fYhs1RrNeY8JRMUlyVtdt0ed534xwLmvonv9j42TivlbbXGm7OCVsgkr#fidkdWxOYHwnPyd1blppbHNgWjA0TzVcaDxJSTBBQE9zclFLbWBHa2g0M3BERzNRblNWcXZnVmZOVEpcbzE3f1dmVXJDNXVuMXxIUEZtakxTcnJVNTNNMGsxV0tcMlYwbEBxbGJianFfMEFANTVdU0htQU1MSScpJ3VpbGtuQH11anZgYUxhJz8nPERUYjQ3PVxBY0dMY0RcPXJ%2FJ3gl'>
										<a
											target='_blank'
											rel='noreferrer'
											className='border text-center rounded-md bg-primary text-white py-2 w-full'
										>
											BUY NOW
										</a>
									</Link>
									<Link href='https://forms.gle/AMqqwamJ8hosBuDH7'>
										<a
											target='_blank'
											rel='noreferrer'
											className='border rounded-md border-primary text-primary py-2 w-full text-center'
										>
											Request Customization
										</a>
									</Link>
								</div>
							</div>
							<div>
								<ul className='space-y-2'>
									<li className='border flex items-center gap-2 py-2.5 px-3 rounded-md text-sm text-dark-400'>
										<svg
											className='fill-primary'
											xmlns='http://www.w3.org/2000/svg'
											viewBox='0 0 24 24'
											width='24'
											height='24'
										>
											<path fill='none' d='M0 0H24V24H0z' />
											<path d='M12 1l8.217 1.826c.457.102.783.507.783.976v9.987c0 2.006-1.003 3.88-2.672 4.992L12 23l-6.328-4.219C4.002 17.668 3 15.795 3 13.79V3.802c0-.469.326-.874.783-.976L12 1zm4.452 7.222l-4.95 4.949-2.828-2.828-1.414 1.414L11.503 16l6.364-6.364-1.415-1.414z' />
										</svg>
										No Refund
									</li>
									<li className='border flex items-center gap-2 py-2.5 px-3 rounded-md text-sm text-dark-400'>
										<div className='w-6 h-6 flex items-center justify-center bg-primary rounded-full text-white'>
											<svg
												xmlns='http://www.w3.org/2000/svg'
												width='16'
												height='16'
												fill='currentColor'
												className='bi bi-currency-dollar'
												viewBox='0 0 16 16'
											>
												<path d='M4 10.781c.148 1.667 1.513 2.85 3.591 3.003V15h1.043v-1.216c2.27-.179 3.678-1.438 3.678-3.3 0-1.59-.947-2.51-2.956-3.028l-.722-.187V3.467c1.122.11 1.879.714 2.07 1.616h1.47c-.166-1.6-1.54-2.748-3.54-2.875V1H7.591v1.233c-1.939.23-3.27 1.472-3.27 3.156 0 1.454.966 2.483 2.661 2.917l.61.162v4.031c-1.149-.17-1.94-.8-2.131-1.718H4zm3.391-3.836c-1.043-.263-1.6-.825-1.6-1.616 0-.944.704-1.641 1.8-1.828v3.495l-.2-.05zm1.591 1.872c1.287.323 1.852.859 1.852 1.769 0 1.097-.826 1.828-2.2 1.939V8.73l.348.086z' />
											</svg>
										</div>
										One Time Payment Only
									</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
				<div className='mt-10 space-y-3'>
					<div className='border-b py-5'>
						<h1 className='text-2xl font-semibold text-dark-400'>Description</h1>
					</div>
					<p className=''>{product?.longDescription}</p>
				</div>
				<div className='mt-5'>
					<p>{product?.note}</p>
				</div>
				<div className='mt-6 space-y-3'>
					<div className='border-b py-5'>
						<h1 className='text-2xl font-semibold text-dark-400'>Features</h1>
					</div>
					<ul className='space-y-2'>
						{product?.features.map((item, index) => (
							<li className='flex items-center gap-2' key={index}>
								<i className='icon icon-check-simple text-primary'></i>
								<p>{item.fields.title}</p>
							</li>
						))}
					</ul>
				</div>
				<div className='mt-6 space-y-3'>
					<div className='border-b py-5'>
						<h1 className='text-2xl font-semibold text-dark-400'>Download Process</h1>
					</div>
					<p>
						After completing the Purchase and getting the successful message, Complete the form{' '}
						<Link href='https://forms.gle/vuAQxYcRKTtvQdUD9'>
							<a target='_blank' rel='noreferrer' className='text-primary font-semibold'>
								here
							</a>
						</Link>{' '}
						to get your download link. For any queries contact
						<a className='text-primary font-semibold'> support@digibi.info</a>
					</p>
				</div>
			</div>
		</>
	);
};

export default Services;
