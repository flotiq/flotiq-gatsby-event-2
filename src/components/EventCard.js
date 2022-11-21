import React from 'react';
import { Card } from 'flotiq-components-react';
import { Link } from 'gatsby';
import { GatsbyImage, getImage } from "gatsby-plugin-image";

const PastEventLabel = ({ date }) => (
    <div className="flex !basis-1/6 md:!basis-1/12 flex-col justify-center items-center
            basis-1/12 border-solid border border-gray font-light relative"
    >
        <p className="absolute top-0 left-0 w-full px-1 md:px-3
            py-3 text-xs md:text-base text-center"
        >
            Past event
        </p>
        <p className="text-center text-gray">
            {date.toLocaleString('en-us', { weekday: 'short' }).toUpperCase()}
            <span className="block font-normal text-2xl md:text-4xl">{date.getDate().toString().padStart(2, '0')}</span>
        </p>
    </div>
);

const FeaturedEventLabel = ({ date }) => (
    <div className="flex !basis-1/6 lg:!basis-1/12 flex-col justify-center items-center
            basis-1/12 border-solid border-2 border-primary font-light relative"
    >
        <p className="absolute top-0 left-0 w-full px-1 md:px-3 py-3 text-xs md:text-base
            text-center text-white bg-primary"
        >
            Featured
        </p>
        <p className="text-center">
            {date.toLocaleString('en-us', { weekday: 'short' }).toUpperCase()}
            <span className="block font-normal text-2xl md:text-4xl">{date.getDate().toString().padStart(2, '0')}</span>
        </p>
    </div>
);

const FutureEventLabel = ({ date }) => (
    <div className="flex !basis-1/6 md:!basis-1/12 flex-col justify-center items-center
            basis-1/12 border-solid border border-primary font-light relative"
    >
        <p className="text-center">
            {date.toLocaleString('en-us', { weekday: 'short' }).toUpperCase()}
            <span className="block font-normal text-2xl md:text-4xl">{date.getDate().toString().padStart(2, '0')}</span>
        </p>
    </div>
);

const CustomEventCard = ({ name, headerImage, date, excerpt, address, price, slug, featured }) => {
    let EventLabel = FutureEventLabel;
    const imgSize = { width: 590, height: 330 };
    if (new Date(date) < new Date()) { EventLabel = PastEventLabel; }
    if (featured) { EventLabel = FeaturedEventLabel; }
    return (
        <Link to={`/${slug}`}>
            <Card
                horizontal
                bordered={false}
                rounded="none"
                additionalClasses={['w-full flex flex-wrap mb-10 cursor-pointer']}
            >

                <EventLabel date={new Date(date)} />
                <div className="flex flex-wrap basis-5/6 lg:basis-11/12">
                    <Card.Body
                        additionalClasses={[
                            'flex flex-col justify-between !p-5 md:!pd-10 !basis-full '
                            + 'lg:!basis-1/2 bg-light-gray order-2 lg:order-1',
                        ]}
                    >
                        <p>
                            {date.replace('T', ' ')}
                        </p>
                        <Card.Title additionalClasses={['font-normal']}>
                            {name}
                        </Card.Title>
                        <Card.Text additionalClasses={['line-clamp-4 !my-0']}>
                            {excerpt}
                        </Card.Text>
                        <div className="mt-10 flex flex-wrap items-center justify-self-end justify-between">
                            <p>{address}</p>
                            <p>{price}</p>
                        </div>
                    </Card.Body>
                    <div className="basis-full lg:basis-1/2 !order-1 lg:!order-2">
                        <GatsbyImage
                            image={getImage(headerImage)}
                            alt={name}
                            imgClassName={imgSize}
                        />
                    </div>
                </div>
            </Card>
        </Link>
    );
};

export default CustomEventCard;
