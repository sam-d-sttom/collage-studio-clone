/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    // screens: {
    //   'ssm': '200px',
    //   // => @media (min-width: 300px) { ... }

    //   'sm': '640px',
    //   // => @media (min-width: 640px) { ... }

    //   'md': '768px',
    //   // => @media (min-width: 768px) { ... }

    //   'lg': '1024px',
    //   // => @media (min-width: 1024px) { ... }

    //   'xl': '1280px',
    //   // => @media (min-width: 1280px) { ... }

    //   '2xl': '1536px',
    //   // => @media (min-width: 1536px) { ... }
    // },
    textColor: {
      "inputTextColor": "#000",
    },
    colors: {
      'backgroundOne': '#f4f7f9',
      'backgroundTwo': '#fff',
      'transparent': '#ffffff00',
      'testRed': 'red',
      'testGreen': 'green',
      'testBlue': 'blue',
      'black': '#000',
    },
    extend: {
      lineHeight: {
        'logoLineHeight': '17px',
        'secondaryLineHeight': '14px',
        'footerHeadingLineHeight': '50px',
      },
      fontWeight: {
        'logoFontWeight': '700',
        'footerHeadingFontWeight': '700',
        'productSectionHeadingFontWeight': '700',
        'productHeadingAnchorFontWeight': '600',
      },
      fontSize: {
        'logoFontSize': '1.4rem',
        'primaryFontSize': '0.83rem',
        'secondaryFontSize': '0.85rem',
        'scrollableSectionProductCardNameFontSize': '3rem',
        'productSectionHeadingFontSize': '3rem',
        'aboutSectionPFontSize': '2rem',
        'aboutSectionPFontSizeTwo': '0.8rem',
        'devNameFontSize': '0.9rem',
        'footerHeadingFontSize': '4rem',
      }
    },
  },
  plugins: [],
}

