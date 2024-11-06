/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                gold: "#FFD700", // Custom gold color
            },
            fontFamily: {
                sans: ["Poppins", "sans-serif"], // Custom sans font
                handwritting: ["Merienda", "cursive"],
                heading: ["Montserrat Bold", "Arial", "sans-serif"], // Heading font with Arial fallback
                paragraph: ["Lato", "Helvetica", "sans-serif"], // Paragraph font with Helvetica fallback
                display: ["Playfair Display", "serif"], // Display font with serif fallback
                serif: ["Merriweather", "Georgia", "serif"], // Serif font with Georgia fallback
                avenir: ["Avenir Next", "Verdana", "sans-serif"], // Avenir Next with Verdana fallback
                
            },
            container: {
                center: true,
                padding: {
                    DEFAULT: "1rem",
                    sm: "2rem",
                    lg: "4rem",
                    xl: "5rem",
                    "2xl": "6rem",
                },
            },
            // Define animation settings
            animation: {
                'infinite-scroll': 'infinite-scroll 25s linear infinite',
            },
            // Define keyframes for the animation
            keyframes: {
                'infinite-scroll': {
                    from: { transform: 'translateX(0)' },
                    to: { transform: 'translateX(-100%)' },
                },
            },
        },
    },
    plugins: [],
};