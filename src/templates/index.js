import React from 'react';
import { Helmet } from 'react-helmet';
import { graphql } from 'gatsby';
import Layout from '../layouts/layout';
import Eventcards from '../sections/EventCards';

const IndexPage = ({ data }) => {
    const events = data.allEvent.nodes;
    return (
        <Layout additionalClass={['bg-white']}>
            <Helmet>
                <title>Flotiq Gatsby event starter</title>
            </Helmet>
            <Eventcards events={events} additnalClasses={['py-10']} />
        </Layout>
    );
};

export const pageQuery = graphql`
    query indexQuery($skip: Int!, $limit: Int!) {
        site {
            siteMetadata {
                title
            }
        }
        allEvent(sort: {fields: flotiqInternal___createdAt, order: DESC}, limit: $limit, skip: $skip,) {
            nodes {
                id
                name
                slug
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
                address
                date
                price
                description
                excerpt
                gallery {
                    localFile {
                      publicURL
                    }
                }
            }
        }
    }
`;

export default IndexPage;
