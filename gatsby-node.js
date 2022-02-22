const path = require('path');

exports.createPages = async ({ graphql, actions }) => {
    const { createPage } = actions;

    const singleEvent = path.resolve('./src/templates/event.js');
    const result = await graphql(`
        query GetEvents {
            allEvent(sort: {order: ASC, fields: date}) {
                edges {
                    node {
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
        }
`);

    if (result.errors) {
        throw result.errors;
    }
    let events = result.data.allEvent.edges;
    const today = new Date();
    const filterDate = new Date(`${today.getFullYear()}-${(today.getMonth() + 1).toString().padStart(2, '0')}-01`);
    events = events.filter((event) => new Date(event.node.date) > filterDate);

    // Create paginated index
    const eventsPerPage = 5;
    const numPages = Math.ceil(events.length / eventsPerPage);

    Array.from({ length: numPages }).forEach((item, i) => {
        createPage({
            path: i === 0 ? '/' : `/${i + 1}`,
            component: path.resolve('./src/templates/index.js'),
            context: {
                limit: eventsPerPage,
                skip: i * eventsPerPage,
                numPages,
                currentPage: i + 1,
                events: events.slice(i * eventsPerPage, i * eventsPerPage + eventsPerPage),
            },
        });
    });

    // Create events pages.
    events.forEach((event, index) => {
        const next = index === events.length - 1 ? null : events[index + 1].node;
        const previous = index === 0 ? null : events[index - 1].node;

        createPage({
            path: event.node.slug,
            component: singleEvent,
            context: {
                slug: event.node.slug,
                previous,
                next,
                nextEvents: events.slice(index + 1, index + 4),
            },
        });
    });
};
