/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            height: {
                custom: 'calc(100% - 180px - 56px)',
            },
        },
    },
    plugins: [],
};
