import React from 'react';
import { Helmet } from 'react-helmet';
import { graphql } from 'gatsby';
import Pagination from 'flotiq-components-react/dist/components/Pagination/Pagination';
import Layout from '../layouts/layout';
import EventCards from '../sections/EventCards';

const IndexPage = ({ data, pageContext }) => {
    const { events } = pageContext;
    return (
        <Layout additionalClass={['bg-white']}>
            <Helmet>
                <title>{data.site.siteMetadata.title}</title>
                <meta
                    name="description"
                    content={data.site.siteMetadata.description}
                />
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
                description
            }
        }
    }
`;

export default IndexPage;
