import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../layouts/layout';
import Contact from '../sections/Contact';

const EventTemplate = ({ data }) => {
    const { event } = data;
    return (
        <Layout additionalClass={['bg-white']}>
            <div className="flex flex-wrap max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
                <Contact
                    headerText="Do you have more questions?"
                    nameInputLabel="Name"
                    emailInputLabel="Email"
                    messageInputLabel="Message"
                    buttonLabel="Send"
                />
            </div>
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
