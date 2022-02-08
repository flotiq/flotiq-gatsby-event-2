import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../layouts/layout';
import NextEvents from '../sections/NextEvents';

const EventTemplate = ({ data }) => {
    const { event } = data;
    return (
        <Layout additionalClass={['bg-white']}>
            <NextEvents events={events} headerText="Next Events" />
        </Layout>
    );
};

export const pageQuery = graphql`
    query EventBySlug($slug: String!) {
        site {
            siteMetadata {
                title
            }
        }
        event( slug: { eq: $slug } ) {
            id
            name
            slug
            address
            date
            description
            gallery {
                localFile {
                  publicURL
                }
            }
        }
    }
`;

export default EventTemplate;
