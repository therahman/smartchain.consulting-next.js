import Head from 'next/head';
import React from 'react';
import Services from '../../pageComponents/Services/Services';
const contentful = require('contentful');

const client = contentful.createClient({
	space: process.env.NEXT_PUBLIC_SPACE_ID,
	accessToken: process.env.NEXT_PUBLIC_ACCESS_TOKEN,
});

const details = (props) => {
	return (
		<>
			<Head>
				<title>Services</title>
			</Head>
			<Services {...props} />
		</>
	);
};

export const getStaticPaths = async () => {
	const entries = await client.getEntries();
	const paths = entries.items
		.map((item) => ({ params: { slug: item.fields.slug } }))
		.filter(({ params }) => params.slug);
	return {
		paths,
		fallback: true,
	};
};

export const getStaticProps = async ({ params }) => {
	try {
		const entries = await client.getEntries();
		let entry = {};

		for (let i = 0; i < entries.items.length; i++) {
			if (entries.items[i].fields.slug === params.slug) {
				entry = entries.items[i].fields;
			}
		}
		if (entry) {
			return { props: { product: entry } };
		}
		return { notFound: true };
	} catch (error) {
		return { notFound: true };
	}
};

export default details;
