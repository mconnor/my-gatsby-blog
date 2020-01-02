import React from 'react';
import Layout from '../components/layout';
import Listing from '../components/listing';

import SEO from '../components/seo';

const IndexPage = ({location}) => (
	<Layout location={location}>
		<Listing />
	</Layout>
);

export default IndexPage;
