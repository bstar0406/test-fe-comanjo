/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    // screens: {
    //   xs: '0px',
    //   sm: '480px',
    //   sx: '560px',
    //   md: '768px',
    //   lg: '1024px',
    //   xl: '1440px',
    // },
    // extend: {
    //   colors: {
    //     app: {
    //       purple: {
    //         DEFAULT: "#36265F",
    //         light: "#48346D"
    //       },
    //       white: {
    //         DEFAULT: "#ffffff"
    //       }
    //     }
    //   },
    //   spacing: {
    //     px: "1px",
    //     0: "0px",
    //     0.5: "0.125rem",
    //     1: "0.25rem",
    //     1.5: "0.375rem",
    //     2: "0.5rem",
    //     2.5: "0.625rem",
    //     3: "0.75rem",
    //     3.5: "0.875rem",
    //     4: "1rem",
    //     5: "1.25rem",
    //     6: "1.5rem",
    //     7: "1.75rem",
    //     8: "2rem",
    //     9: "2.25rem",
    //     10: "2.5rem",
    //     11: "2.75rem",
    //     12: "3rem",
    //     13: "3.125rem",
    //     14: "3.5rem",
    //     15: "60px",
    //     16: "4rem",
    //     18: "4.5rem",
    //     20: "5rem",
    //     24: "6rem",
    //     25: "6.125rem",
    //     28: "7rem",
    //     29: "7.5rem",
    //     32: "8rem",
    //     33: "8.75rem",
    //     36: "9rem",
    //     40: "10rem",
    //     44: "11rem",
    //     45: "11.375rem",
    //     48: "12rem",
    //     52: "13rem",
    //     56: "14rem",
    //     60: "15rem",
    //     64: "16rem",
    //     65: "16.875rem",
    //     72: "18rem",
    //     80: "20rem",
    //     82: "22rem",
    //     96: "24rem",
    //     98: "36rem",
    //     99: "40rem",
    //     100: "44.625rem",
    //     120: "51.875rem",
    //     200: "75rem"
    //   },
    // },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}
