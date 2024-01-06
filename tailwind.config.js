/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');
module.exports = {
    content: [
        './**/*.html',
        './**/*.md',
    ],
    darkMode: 'class',
    theme: {
        extend: {
            typography: {
                DEFAULT: {
                    css: {
                        pre: {
                            padding: "0",
                            color: "#D1D5DB",
                            backgroundColor: "#202020"
                        },
                        code: {
                            padding: "0.2em 0.4em",
                            backgroundColor: "#202020",
                            color: "#D1D5DB",
                            fontWeight: "400",
                            "border-radius": "0.25rem"
                        },
                        "code::before": false,
                        "code::after": false,
                        "blockquote p:first-of-type::before": false,
                        "blockquote p:last-of-type::after": false,
                    },
                },
            },
            fontFamily: {
                sans: ['Inter var', ...defaultTheme.fontFamily.sans],
            },
        },
    },
    variants: {
        extend: {},
    },
    plugins: [
        require('@tailwindcss/typography'),
    ],
}
