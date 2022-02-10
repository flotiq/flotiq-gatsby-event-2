import React from 'react';
import { Card } from 'flotiq-components-react';

const PastEventLabel = () => (
    <div className="flex !basis-1/6 md:!basis-1/12 flex-col justify-center items-center
            basis-1/12 border-solid border border-gray font-light relative"
    >
        <p className="absolute top-0 left-0 w-full px-1 md:px-3
            py-3 text-xs md:text-base text-center"
        >
            Past event
        </p>
        <p className="text-center text-gray">
            SAT
            <span className="block font-normal text-2xl md:text-4xl">28</span>
        </p>
    </div>
);

const FeaturedEventLabel = () => (
    <div className="flex !basis-1/6 lg:!basis-1/12 flex-col justify-center items-center
            basis-1/12 border-solid border-2 border-secondary font-light relative"
    >
        <p className="absolute top-0 left-0 w-full px-1 md:px-3 py-3 text-xs md:text-base
            text-center text-white bg-secondary"
        >
            Featured
        </p>
        <p className="text-center">
            SAT
            <span className="block font-normal text-2xl md:text-4xl">28</span>
        </p>
    </div>
);

const FutureEventLabel = () => (
    <div className="flex !basis-1/6 md:!basis-1/12 flex-col justify-center items-center
            basis-1/12 border-solid border border-secondary font-light relative"
    >
        <p className="text-center">
            SAT
            <span className="block font-normal text-2xl md:text-4xl">28</span>
        </p>
    </div>
);

const CustomRecipeCard = ({ name, headerImage, date, excerpt, address, price, onClick, featured }) => {
    let EventLabel = FutureEventLabel;
    if (new Date(date) < new Date()) { EventLabel = PastEventLabel; }
    if (featured) { EventLabel = FeaturedEventLabel; }
    return (
        <Card
            vertical
            onClick={onClick}
            bordered={false}
            rounded="none"
            additionalClasses={['w-full flex flex-wrap mb-10 cursor-pointer']}
        >
            <EventLabel />
            <div className="flex flex-wrap basis-5/6 lg:basis-11/12">
                <Card.Body
                    additionalClasses={[
                        'flex flex-col justify-between !p-5 md:!pd-10 !basis-full '
                        + 'lg:!basis-1/2 bg-light-gray order-2 lg:order-1',
                    ]}
                >
                    <p>
                        {date}
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
                    <Card.Img
                        src={headerImage}
                        alt={name}
                        additionalClasses={['']}
                    />
                </div>
            </div>
        </Card>
    );
};

export default CustomRecipeCard;
