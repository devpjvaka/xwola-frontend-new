// /** @type {import('tailwindcss').Config} */
// export default {
//     content: [
//         "./index.html",
//         "./src/**/*.{js,ts,jsx,tsx}",
//     ],
//     theme: {
//         extend: {
//             colors: {
//                 gold: '#FFD700',
//             },
//             fontFamily: {
//                 sans: ["Poppins", "sans-serif"],
//                 handwritting: ["Merienda", "cursive"],
//             },
//             container: {
//                 center: true,
//                 padding: {
//                     DEFAULT: "1rem",
//                     sm: "2rem",
//                     lg: "4rem",
//                     xl: "5rem",
//                     "2xl": "6rem",
//                 }
//             }

//         },
//     },
//     plugins: [
//         // other plugins
//         require('@tailwindcss/forms'),
//     ],
// }

/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                gold: '#FFD700',
            },
            fontFamily: {
                sans: ['Noto Sans Ethiopic', 'sans-serif'],
            },


            container: {
                center: true,
                padding: {
                    DEFAULT: "1rem",
                    sm: "2rem",
                    lg: "4rem",
                    xl: "5rem",
                    "2xl": "6rem",
                }
            },
            keyframes: {
                scroll: {
                    '0%': { transform: 'translateX(0)' },
                    '100%': { transform: 'translateX(-100%)' },
                },
            },
            animation: {
                scroll: 'scroll 20s linear infinite',
            },
        },
    },
    plugins: [
        require('@tailwindcss/forms'),
    ],

}
