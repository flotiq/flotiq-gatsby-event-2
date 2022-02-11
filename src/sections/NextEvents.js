import React from 'react';
import { navigate } from 'gatsby';
import { Header } from 'flotiq-components-react';
import NextEventCard from '../components/event/NextEventCard';
import NextEventsNavigation from '../components/event/NextEventsNavigation';

const NextEvents = ({ events, headerText, pageContext }) => (
    <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <Header text={headerText} additionalClasses={['!font-light mb-5']} />
        <div className="flex flex-wrap lg:flex-nowrap lg:space-x-4">
            {events.map((event) => (
                <NextEventCard
                    onClick={() => { navigate(`/${event.slug}`); }}
                    name={event.name}
                    headerImage={event.image[0] && event.image[0].localFile.publicURL}
                    date={event.date}
                    excerpt={event.excerpt}
                    address={event.address}
                    price={event.price}
                />
            ))}
        </div>
        <NextEventsNavigation
            additionalClass={['']}
            prevText="Previous event"
            nextText="Next event"
            pageContext={pageContext}
        />
    </div>
);

export default NextEvents;
