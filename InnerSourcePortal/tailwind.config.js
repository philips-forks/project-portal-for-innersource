//tailwind.config.js
module.exports = {
    purge: {
        enabled: true,
        content: [
            './**/*.html',
            './**/*.razor'
        ],
    },
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {},
        maxWidth: {
            '1/4': '25%',
            '1/2': '50%',
            '3/4': '75%',
        }
    },
    variants: {
        extend: {},
    },
    plugins: [],
}