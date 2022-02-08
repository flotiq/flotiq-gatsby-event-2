import React from 'react';
import { Header } from 'flotiq-components-react';
import NextEventCard from '../components/event/NextEventCard';

const NextEvents = ({ events, headerText }) => (
    <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <Header text={headerText} additionalClasses={['!font-light']} />
        {events.map((event) => (
            <NextEventCard
                name={event.name}
                headerImage={event.image[0] && event.image[0].localFile.publicURL}
                date={event.date}
                excerpt={event.excerpt}
                address={event.address}
                price={event.price}
            />
        ))}
    </div>
);

export default NextEvents;