import React from 'react';
import { Card } from 'flotiq-components-react';

const CustomRecipeCard = ({ name, headerImage, date, excerpt, address, price, onClick }) => (
    <Card
        vertical
        onClick={onClick}
        bordered={false}
        rounded="none"
        additionalClasses={['!flex mb-10 cursor-pointer']}
        proportionsForVertical={{
            body: '7/12',
            img: '5/12',
            breakpoint: 'lg',
        }}
    >
        <Card.Body
            additionalClasses={[
                'flex !p-0',
            ]}
        >
            <div className="flex flex-col justify-center items-center
            basis-1/6 border-solid border !border-gray font-light relative"
            >
                <p className="absolute top-0 left-0 w-full py-3 text-center">Past event</p>
                <p className="text-center">
                    SAT
                    <span className="block font-normal text-4xl">28</span>
                </p>
            </div>
            <div className="flex flex-col justify-between px-10 py-5 basis-5/6 bg-light-gray">
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
            </div>
        </Card.Body>
        <Card.Img src={headerImage} alt={name} />
    </Card>
);

export default CustomRecipeCard;
