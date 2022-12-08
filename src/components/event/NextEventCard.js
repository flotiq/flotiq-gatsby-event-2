import React from 'react';
import { Card } from 'flotiq-components-react';
import { Link } from 'gatsby';

const NextEventCard = ({ name, headerImage, date, excerpt, address, price, slug }) => (
    <Card
        bordered={false}
        rounded="none"
        additionalClasses={['basis-full lg:basis-1/3 flex flex-wrap mb-5 lg:mb-10']}
    >
        <Link to={`/${slug}`} className="flex basis-full cursor-pointer">
            <div className="basis-2/12 flex flex-col justify-center items-center
        border-solid border border-primary font-light relative"
            >
                <p className="text-center">
                    {new Date(date).getFullYear()}
                    <br />
                    {new Date(date).toLocaleString('en-us', { month: 'short' }).toUpperCase()}
                    <span className="block text-2xl md:text-4xl">
                        {new Date(date).getDate().toString().padStart(2, '0')}
                    </span>
                    {new Date(date).getHours().toString().padStart(2, '0')}
                    :
                    {new Date(date).getMinutes().toString().padStart(2, '0')}
                </p>
            </div>
            <Card.Body
                additionalClasses={[
                    '!basis-7/12 flex flex-col justify-between !p-5 md:!pd-10 bg-light-gray',
                ]}
            >
                <p>
                    {date.replace('T', ' ')}
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
            <div
                className="basis-3/12 bg-cover bg-center" style={{ backgroundImage: `url('${headerImage.publicURL}')` }}
            />
        </Link>
    </Card>
);

export default NextEventCard;
