import React from 'react';
import { graphql } from 'gatsby';
import { Helmet } from 'react-helmet';
import Layout from '../layouts/layout';
import EventDescriptionCard from '../components/event/EventDescriptionCard';
import Contact from '../sections/Contact';
import NextEvents from '../sections/NextEvents';

const EventTemplate = ({ data, pageContext }) => {
    const { event } = data;
    return (
        <Layout additionalClass={['bg-white']}>
            <Helmet>
                <title>{event.name}</title>
                <meta
                    name="description"
                    content={event.description}
                />
            </Helmet>
            <div className="flex flex-wrap max-w-7xl mx-auto px-2 sm:px-6 lg:px-0">
                <EventDescriptionCard
                    name={event.name}
                    headerImage={event.image[0] && event.image[0].localFile}
                    date={event.date}
                    description={event.description}
                    address={event.address}
                    price={event.price}
                />
            </div>
            <NextEvents events={pageContext.nextEvents} headerText="Next Events" pageContext={pageContext} />
            <div className="flex flex-wrap max-w-7xl mx-auto px-2 sm:px-6 lg:px-8 mt-10">
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
            image {
                extension
                url
                width
                height
                localFile {
                    publicURL
                    childImageSharp {
                        gatsbyImageData(layout: FULL_WIDTH, placeholder: NONE)
                    }
                }
            }
            address
            date
            price
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
                        gatsbyImageData(layout: FULL_WIDTH, placeholder: NONE)
                    }
                }
            }
            gallery {
                localFile {
                  publicURL
                }
            }
        }
    }
`;

export default EventTemplate;
