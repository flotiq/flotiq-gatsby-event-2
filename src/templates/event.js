import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../layouts/layout';
import NextEvents from '../sections/NextEvents';

const EventTemplate = ({ data, pageContext }) => {
    const { event } = data;
    const events = data.allEvent.nodes;
    return (
        <Layout additionalClass={['bg-white']}>
            <NextEvents events={events} headerText="Next Events" pageContext={pageContext} />
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
            excerpt
            price
            image {
                extension
                url
                width
                height
                localFile {
                    publicURL
                    childImageSharp {
                        gatsbyImageData(layout: FULL_WIDTH)
                    }
                }
            }
            gallery {
                localFile {
                  publicURL
                }
            }
        }
        allEvent(sort: {fields: flotiqInternal___createdAt, order: DESC}, limit: 3, filter: {slug: {ne: $slug}}) {
            nodes {
                id
                name
                slug
                address
                date
                excerpt
                price
                image {
                    extension
                    url
                    width
                    height
                    localFile {
                        publicURL
                        childImageSharp {
                            gatsbyImageData(layout: FULL_WIDTH)
                        }
                    }
                }
            }
        }
    }
`;

export default EventTemplate;
