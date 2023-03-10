function spacing() {
  const scale = Array(101)
    .fill(null)
    .map((_, i) => [i * 0.5, `${i * 0.5 * 8}px`])
  const values = Object.fromEntries(scale)
  values.px = '1px'
  values.xs = '2px'
  values.sm = '4px'
  values.md = '6px'
  values.screen = '100vh'
  return values
}

/** @type {import('tailwindcss').Config} */
module.exports = {
  future: {
    hoverOnlyWhenSupported: true,
  },
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    colors: {
      'dark-cyan': '#0E8784',
      'dark-grey-blue': '#333D4B',
      'pale-orange': '#FDD6BA',
      'light-cream': '#FEFCF7',
      'fall-chill': '#E2DEDB',
      'grey-heather': '#83888F',
      petrichor: '#66D2CF',
    },
    fontFamily: {
      fraunces: ['Fraunces', 'serif'],
      barlow: ['Barlow', 'sans-serif'],
    },
    fontSize: {
      sm: [
        '12px',
        {
          letterSpacing: '1.5px',
          lineHeight: 1.25,
        },
      ],
      base: [
        '16px',
        {
          letterSpacing: '0',
          lineHeight: 1.625,
        },
      ],
      lg: [
        '24px',
        {
          letterSpacing: '0',
          lineHeight: 1.33,
        },
      ],
      xl: [
        '32px',
        {
          letterSpacing: '0',
          lineHeight: 0.88,
        },
      ],
      '2xl': [
        '40px',
        {
          letterSpacing: '0',
          lineHeight: 0.83,
        },
      ],
      '3xl': [
        '72px',
        {
          letterSpacing: '0',
          lineHeight: 1,
        },
      ],
      '4xl': [
        '150px',
        {
          letterSpacing: '0',
          lineHeight: 0.48,
        },
      ],
    },
    spacing: spacing(),
    textColor: {
      transparent: 'transparent',
      'dark-cyan': '#0E8784',
      'dark-grey-blue': '#333D4B',
      'pale-orange': '#FDD6BA',
      'light-cream': '#FEFCF7',
      'fall-chill': '#E2DEDB',
      'grey-heather': '#83888F',
      petrichor: '#66D2CF',
    },
    extend: {
      backgroundImage: {
        'image-hero-home-mb': "url('../public/assets/home/mobile/image-hero-coffeepress.jpg')",
        'image-hero-home-tb': "url('../public/assets/home/tablet/image-hero-coffeepress.jpg')",
        'image-hero-home-dk': "url('../public/assets/home/desktop/image-hero-coffeepress.jpg')",
        'image-hero-about-mb': "url('../public/assets/about/mobile/image-hero-whitecup.jpg')",
        'image-hero-about-tb': "url('../public/assets/about/tablet/image-hero-whitecup.jpg')",
        'image-hero-about-dk': "url('../public/assets/about/desktop/image-hero-whitecup.jpg')",
        'image-hero-plan-mb': "url('../public/assets/plan/mobile/image-hero-blackcup.jpg')",
        'image-hero-plan-tb': "url('../public/assets/plan/tablet/image-hero-blackcup.jpg')",
        'image-hero-plan-dk': "url('../public/assets/plan/desktop/image-hero-blackcup.jpg')",
      },
    },
  },
  plugins: [],
}
