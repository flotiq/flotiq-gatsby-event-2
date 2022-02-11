import React from 'react';
import { Card, Paragraph } from 'flotiq-components-react';

const EventDescriptionCard = ({ name, headerImage, date, description, address, price }) => (
    <Card
        vertical
        bordered={false}
        rounded="none"
        additionalClasses={['w-full flex flex-wrap mb-10 my-10']}
    >
        <div className="flex !basis-1/6 lg:!basis-1/12 flex-col
            basis-1/12 font-light relative bg-light-gray"
        >
            <p className="w-full px-1 md:px-3 py-7 text-xs md:text-base
            text-center text-white bg-secondary"
            >
                SAT
                <span className="block font-normal text-2xl md:text-4xl">28</span>
            </p>
        </div>
        <div className="flex flex-wrap basis-5/6 lg:basis-11/12">
            <Card.Body
                additionalClasses={[
                    'flex flex-col justify-between !p-5 md:!p-10 !basis-full '
                    + 'lg:!basis-1/2 bg-light-gray font-light',
                ]}
            >
                <p>
                    {date}
                </p>
                <Card.Title additionalClasses={['font-normal mt-5 mb-8']}>
                    {name}
                </Card.Title>
                <Paragraph text={description} />
                <div className="mt-10 flex flex-wrap items-center justify-self-end justify-between">
                    <p>{address}</p>
                    <p>{price}</p>
                </div>
            </Card.Body>
            <div
                className="basis-full lg:basis-1/2 bg-cover bg-center"
                style={{ backgroundImage: `url('${headerImage}')` }}
            />
        </div>
        <div className="basis-full">
            <Card.Img
                src={headerImage}
                alt={name}
                additionalClasses={['block lg:hidden !w-full']}
            />
        </div>
    </Card>
);

export default EventDescriptionCard;
