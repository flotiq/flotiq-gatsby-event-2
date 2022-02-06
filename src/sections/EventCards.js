import React from 'react';
import { navigate } from 'gatsby';
import EventCard from '../components/EventCard';

const RecipeCards = ({ events }) => (
    <div className="max-w-7xl mt-6 mb-6 mx-auto px-4 py-4 sm:px-6 lg:px-8 xl:px-0">
        <div className="flex flex-wrap">
            {events.map((event) => (
                <EventCard
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

export default RecipeCards;
