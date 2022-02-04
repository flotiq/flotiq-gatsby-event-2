import React from 'react';
import { Helmet } from 'react-helmet';
import { graphql, useStaticQuery } from 'gatsby';
import Logo from '../assets/Logo.svg';

const IndexPage = () => {
    const data = useStaticQuery(query);
    return (
        <main className="flex flex-col h-screen justify-center items-center">
            <Helmet>
                <html className="bg-dark-blue" lang="en" />
                <title>{data.allExample.nodes[0].title}</title>
            </Helmet>
            <div className="m-5">
                <img src={Logo} alt="Flotiq" width="300px" className="mx-auto" />
            </div>
            <h1 className="text-center m-24 text-5xl text-light-blue font-bold">
                {data.allExample.nodes[0].header}
            </h1>
            <p className="text-center text-4xl text-light-blue">
                You can learn more about Flotiq in the
                {' '}
                <a href="https://flotiq.com/docs/" target="_blank" rel="noreferrer" className="underline">
                    documentation
                </a>
            </p>
        </main>
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
    }
`;

export default IndexPage;
