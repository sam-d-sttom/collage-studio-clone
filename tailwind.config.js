/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      // => @media (min-width: 200px) { ... }
      'sssm': '200px',

      // => @media (min-width: 300px) { ... }
      'ssm': '320px',

      // => @media (min-width: 425px) { ... }
      'sm': '425px',

      // => @media (min-width: 768px) { ... }
      'md': '768px',

      // => @media (min-width: 1024px) { ... }
      'lg': '1024px',

      // => @media (min-width: 1280px) { ... }
      'xl': '1280px',

      // => @media (min-width: 1536px) { ... }
      '2xl': '1536px',
    },
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
        'logoLineHeight': 'calc(1.1vw + (0.75vh))',
        'logoLineHeightMd': 'calc(1.3vw + (0.9vh))',
        'logoLineHeightSm': '1.3rem',
        'logoLineHeightSsm': '1.3rem',
        'logoLineHeightSssm': '1.2rem',
        'secondaryLineHeight': '14px',
        'scrollableSectionProductCardNameLineHeight': '40px',
        'footerHeadingLineHeight': '50px',
        'heading3': '40px',
      },
      fontWeight: {
        'logoFontWeight': '700',
        'logoFontWeightSm': '600',
        'footerHeadingFontWeight': '700',
        'productSectionHeadingFontWeight': '700',
        'productHeadingAnchorFontWeight': '600',
        'singleProductFontWeight': '500',
      },
      fontSize: {
        'logoFontSize': 'calc(1.4vw + (0.9vh))',
        'logoFontSizeMd': 'calc(1.6vw + (1.2vh))',
        'logoFontSizeSm': '1.6rem',
        'logoFontSizeSsm': '1.6rem',
        'logoFontSizeSssm': '1.5rem',
        'primaryFontSize': '0.83rem',
        'primaryFontSizeSm': '0.73rem',
        'primaryFontSizeSssm': '0.63rem',
        'secondaryFontSize': '0.85rem',
        'secondaryFontSizeSm': '0.85rem',
        'secondaryFontSizeSssm': '0.65rem',
        'scrollableSectionProductCardNameFontSize': '3rem',
        'scrollableSectionProductCardNameFontSizeSssm': '2rem',
        'productSectionHeadingFontSize': '3rem',
        'productSectionHeadingFontSizeSssm': '2rem',
        'aboutSectionPFontSize': '2rem',
        'aboutSectionPFontSizeSssm': '1.5rem',
        'aboutSectionPFontSizeTwo': '0.8rem',
        'devNameFontSize': '0.9rem',
        'footerHeadingFontSize': '4rem',
        'footerHeadingFontSizeSssm': '2rem',
        'footerCopyrightFontSize': '1rem',
        'footerCopyrightFontSizeSssm': '0.7rem',
        'productFontSize': '3rem',
        'productPropertiesFontSize': '0.8rem',
        'productDescriptionFontSize': '0.7rem',
      }
    },
  },
  plugins: [],
}

