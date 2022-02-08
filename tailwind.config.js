module.exports = {
    content: [
        './node_modules/flotiq-components-react/dist/**/*.{js,jsx,ts,tsx}',
        './src/**/*.{js,jsx,ts,tsx}',
    ],
    theme: {
        extend: {
            colors: {
                primary: '#000000',
                secondary: '#0083FC',
                gray: '#e7e7e7',
                'light-gray': '#F9F9F9',
            },
        },
        fontFamily: {
            lato: ['Lato', 'sans-serif'],
        },
    },
    presets: [
        require('./node_modules/flotiq-components-react/dist/tailwind.preset'), // Flotiq Component theme presets
    ],
    plugins: [
        require('@tailwindcss/forms'),
        require('@tailwindcss/line-clamp'),
    ],
    safelist: require('./node_modules/flotiq-components-react/dist/tailwind.safelist'),
};
