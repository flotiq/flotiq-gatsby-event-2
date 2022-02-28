import React from 'react';
import { Helmet } from 'react-helmet';
import { graphql } from 'gatsby';
import Pagination from 'flotiq-components-react/dist/components/Pagination/Pagination';
import Layout from '../layouts/layout';
import EventCards from '../sections/EventCards';

const IndexPage = ({ pageContext }) => {
    const { events } = pageContext;
    return (
        <Layout additionalClass={['bg-white']}>
            <Helmet>
                <title>Flotiq Gatsby event starter</title>
            </Helmet>
            <EventCards
                events={events}
                headerText="Upcoming events"
                additnalClasses={['py-10']}
            />
            <Pagination numOfPages={pageContext.numPages} page={pageContext.currentPage} rounded="none" />
        </Layout>
    );
};

export const pageQuery = graphql`
    query indexQuery {
        site {
            siteMetadata {
                title
            }
        }
    }
`;

export default IndexPage;
