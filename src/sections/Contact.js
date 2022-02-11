import React from 'react';
import { Header } from 'flotiq-components-react';

const Contact = ({ headerText, nameInputLabel, emailInputLabel, messageInputLabel, buttonLabel }) => (
    <div className="flex flex-wrap mx-auto w-5/6 md:w-4/6">
        <Header
            level={2}
            text={headerText}
            additionalClasses={['text-3xl lg:text-5xl leading-tight basis-full '
            + 'md:basis-1/2 lg:basis-5/12 px-0 md:px-5']}
        />
        <form
            action="#"
            method="POST"
            className="font-sora font-light flex flex-col space-y-4 basis-full md:basis-1/2 lg:basis-7/12"
        >
            <div>
                <label htmlFor="full-name" className="sr-only">
                    {nameInputLabel}
                </label>
                <input
                    type="text"
                    name="full-name"
                    id="full-name"
                    autoComplete="name"
                    className="block w-full py-3 px-4 placeholder-primary/25
                    placeholder:font-light border-0 border-b border-gray"
                    placeholder="Name"
                />
            </div>
            <div>
                <label htmlFor="email" className="sr-only">
                    {emailInputLabel}
                </label>
                <input
                    type="email"
                    name="email"
                    id="email"
                    autoComplete="email"
                    className="block w-full py-3 px-4 placeholder-primary/25
                    placeholder:font-light border-0 border-b border-gray"
                    placeholder="Email"
                />
            </div>
            <div>
                <label htmlFor="message" className="sr-only">
                    {messageInputLabel}
                </label>
                <textarea
                    id="message"
                    name="message"
                    rows={2}
                    className="block w-full py-3 px-4 placeholder-primary/25
                     placeholder:font-light border-0 border-b border-gray"
                    placeholder="Message"
                />
            </div>
            <div className="text-right">
                <button
                    type="submit"
                    className="inline-flex justify-center py-2 px-10 text-base
                         font-light text-white bg-secondary"
                >
                    {buttonLabel}
                </button>
            </div>
        </form>
    </div>
);

export default Contact;
