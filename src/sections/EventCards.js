import React from 'react';
import { navigate } from 'gatsby';
import { Header } from 'flotiq-components-react';
import EventCard from '../components/EventCard';

const RecipeCards = ({ events, headerText }) => {
    let featuredIsFounded = false;
    const isFeatured = (event) => {
        if (new Date(event.date) >= new Date() && !featuredIsFounded) { featuredIsFounded = true; return true; }
        return false;
    };
    return (
        <div className="max-w-7xl mt-6 mb-6 mx-auto px-4 py-4 sm:px-6 lg:px-8 xl:px-0">
            <div className="flex flex-col items-center md:items-start justify-start">
                <Header text={headerText} additionalClasses={['mb-5 !font-normal']} />
                <div className="inline-flex items-center justify-center bg-secondary mb-8 px-10 py-3 text-white">
                    December 2022
                </div>
            </div>
            <div className="flex flex-wrap">
                {events.map((event) => (
                    <EventCard
                        featured={() => isFeatured(event)}
                        name={event.name}
                        headerImage={event.image[0] && event.image[0].localFile.publicURL}
                        date={event.date}
                        excerpt={event.excerpt}
                        address={event.address}
                        price={event.price}
                        onClick={() => { navigate(`/${event.slug}`); }}
                    />
                ))}
            </div>
        </div>
    );
};

export default RecipeCards;
