import React from 'react';
import { PoweredByFlotiq } from 'flotiq-components-react';

const Footer = () => (
    <footer className="flex flex-col items-center justify-center">
        <div className="font-sora w-auto px-2 md:px-5 py-5 mt-20
                inline-flex justify-between md:justify-center items-center
                bg-light-gray rounded-t-lg"
        >
            <PoweredByFlotiq />
            <p className="text-center text-xs md:text-base font-light">
                Copyright &copy; Flotiq
                {' '}
                {new Date().getFullYear()}
            </p>
        </div>
    </footer>
);

export default Footer;
