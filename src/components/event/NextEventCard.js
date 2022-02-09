import React from 'react';
import { Card } from 'flotiq-components-react';

const NextEventCard = ({ name, headerImage, date, excerpt, address, price, onClick }) => (
    <Card
        vertical
        onClick={onClick}
        bordered={false}
        rounded="none"
        additionalClasses={['basis-full lg:basis-1/3 flex flex-wrap mb-5 lg:mb-10 cursor-pointer)']}
    >
        <div className="basis-2/12 flex flex-col justify-center items-center
        border-solid border border-secondary font-light relative"
        >
            <p className="text-center">
                SAT
                <span className="block text-2xl md:text-4xl">28</span>
                12pm
            </p>
        </div>
        <Card.Body
            additionalClasses={[
                '!basis-7/12 flex flex-col justify-between !p-5 md:!pd-10 bg-light-gray',
            ]}
        >
            <p>
                {date}
            </p>
            <Card.Title additionalClasses={['font-normal !text-xl my-3']}>
                {name}
            </Card.Title>
            <Card.Text additionalClasses={['line-clamp-4 lg:line-clamp-3 !my-0']}>
                {excerpt}
            </Card.Text>
            <div className="mt-5 flex flex-wrap items-center justify-self-end justify-between">
                <p>{address}</p>
                <p>{price}</p>
            </div>
        </Card.Body>
        <div className="basis-3/12 bg-cover bg-center" style={{ backgroundImage: `url('${headerImage}')` }} />
    </Card>
);

export default NextEventCard;
