const { url } = require("inspector");

function opacity() {
  const scale = Array(21)
    .fill(null)
    .map((_, i) => [i * 5, Math.round(i * 0.05 * 100) / 100]);
  const values = Object.fromEntries(scale);
  return values;
}

function spacing() {
  const scale = Array(101)
    .fill(null)
    .map((_, i) => [i * 0.5, `${i * 0.5 * 8}px`]);
  const values = Object.fromEntries(scale);
  values.px = "1px";
  values.xs = "2px";
  values.sm = "4px";
  values.md = "6px";
  values.screen = "100vh";
  return values;
}

function zIndex() {
  const scale = Array(11)
    .fill(null)
    .map((_, i) => [i * 1, `${i * 1}`]);
  const values = Object.fromEntries(scale);
  values.top = "999999";
  return values;
}

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./public/**/*.svg",
  ],
  darkMode: "class",
  theme: {
    /*/
      Adding or editing an object in this theme object will remove all
      of the https://tailwindcss.com/docs default classes for it and generate
      only the tailwind classes you define in here for it.
      
      If this isn't your intention, customize them in the theme.extend object
      below instead.
    /*/
    borderRadius: {
      none: "0",
      px: "1px",
      xs: "6px",
      sm: "10px",
      DEFAULT: "12px",
      md: "14px",
      lg: "18px",
      icon: "22px",
      "icon-inner": "19px",
      full: "9999px",
    },
    colors: {
      white: "#fff",
      black: "#000",
      transparent: "transparent",
      "bg-primary": "var(--bg-primary)",
      "bg-secondary": "var(--bg-secondary)",

      gray: {
        50: "#fafafa",
        100: "#ebebeb",
        200: "#e1e1e1",
        300: "#c1c1c1",
        400: "#a1a1a1",
        500: "#818181",
        600: "#616161",
        700: "#414141",
        800: "#2b2b2b",
        850: "#1a1a1a",
        900: "#111111",
      },
      red: {
        50: "#fffafa",
        100: "#ffe5e9",
        200: "#fbbfc7",
        300: "#ff909f",
        400: "#ff7082",
        500: "#ff455d",
        600: "#d92038",
        700: "#c11027",
        800: "#8f0718",
        900: "#341418",
      },
      orange: {
        50: "#fff8f3",
        100: "#ffe8d8",
        200: "#ffc59b",
        300: "#fc9c66",
        400: "#fd812d",
        500: "#f35815",
        600: "#b83a05",
        700: "#962d00",
        800: "#672002",
        900: "#3c1403",
      },
      yellow: {
        50: "#fffbe4",
        100: "#fff1a8",
        200: "#fed54a",
        300: "#f2b600",
        400: "#d19f03",
        500: "#a78103",
        600: "#7d5903",
        700: "#5c4716",
        800: "#41320c",
        900: "#281e03",
      },
      green: {
        50: "#effff3",
        100: "#d7fbdf",
        200: "#a9ecb8",
        300: "#75db8c",
        400: "#40d763",
        500: "#27b648",
        600: "#13862e",
        700: "#19652a",
        800: "#10481d",
        900: "#0a2b13",
      },
      blue: {
        50: "#f3fbff",
        100: "#ddf2ff",
        200: "#a9dffe",
        300: "#73c7f9",
        400: "#47b7f8",
        500: "#1e9de7",
        600: "#0b6ec5",
        700: "#144eb6",
        800: "#0e3682",
        900: "#08204e",
      },
      purple: {
        50: "#f9f8ff",
        100: "#eeeaff",
        200: "#d4c9fe",
        300: "#b7a5fb",
        400: "#a18bf5",
        500: "#8467f3",
        600: "#5e49af",
        700: "#4b3990",
        800: "#3e1f75",
        900: "#27124a",
      },
    },
    fontFamily: {
      sans: [
        "Inter var",
        "-apple-system",
        "BlinkMacSystemFont",
        "Segoe UI",
        "Roboto",
        "Oxygen",
        "Ubuntu",
        "Cantarell",
        "Fira Sans",
        "Droid Sans",
        "Helvetica Neue",
        "sans-serif",
      ],
      mono: [
        "Roboto Mono",
        "ui-monospace",
        "SF-Regular",
        "SF Mono",
        "Menlo",
        "Consolas",
        "Liberation Mono",
        "monospace",
      ],
    },
    fontSize: {
      "3xs": [
        "8px",
        {
          letterSpacing: "0.024em",
          lineHeight: 1.4,
        },
      ],
      "2xs": [
        "10px",
        {
          letterSpacing: "0.01em",
          lineHeight: 1.4,
        },
      ],
      xs: [
        "12px",
        {
          letterSpacing: "0",
          lineHeight: 1.4,
        },
      ],
      sm: [
        "14px",
        {
          letterSpacing: "-0.006em",
          lineHeight: 1.5,
        },
      ],
      base: [
        "16px",
        {
          letterSpacing: "-0.011em",
          lineHeight: 1.5,
        },
      ],
      lg: [
        "18px",
        {
          letterSpacing: "-0.014em",
          lineHeight: 1.4,
        },
      ],
      xl: [
        "20px",
        {
          letterSpacing: "-0.017em",
          lineHeight: 1.4,
        },
      ],
      "2xl": [
        "24px",
        {
          letterSpacing: "-0.019em",
          lineHeight: 1.25,
        },
      ],
      "3xl": [
        "28px",
        {
          letterSpacing: "-0.021em",
          lineHeight: 1.4,
        },
      ],
      "4xl": [
        "32px",
        {
          letterSpacing: "-0.021em",
          lineHeight: 1.4,
        },
      ],
      "5xl": [
        "48px",
        {
          letterSpacing: "-0.022em",
          lineHeight: 1,
        },
      ],
      "6xl": [
        "64px",
        {
          letterSpacing: "-0.022em",
          lineHeight: 1,
        },
      ],
    },
    fontWeight: {
      normal: 400,
      medium: 500,
      semibold: 600,
      bold: 700,
    },
    opacity: opacity(),
    spacing: spacing(),
    textColor: {
      primary: "var(--text-primary)",
      secondary: "var(--text-secondary)",
      light: "var(--text-light)",
      dark: "var(--text-dark)",
      red: "var(--text-red)",
      orange: "var(--text-orange)",
      green: "var(--text-green)",
      blue: "var(--text-blue)",
      purple: "var(--text-purple)",
      transparent: "transparent",
    },
    zIndex: zIndex(),
    extend: {
      /*/
        Adding or editing an object in this theme.extend object will create the
        additional tailwind classes for it in addition to the default classes
        on https://tailwindcss.com/docs. If you add an object class that already exists
        in the base tailwind classes, it will replace only that class value with what you
        define in here. All other classes associated with that object will remain
        the same.
        
        If your intention is to entirely re-define a set of classes, specific to the
        core design system, and limit the usage only to our classes for that object,
        customize them in the base theme object above instead.
      /*/
      backgroundImage: {
        "image-hero-mb":
          "url('../public/assets/home/mobile/image-hero-coffeepress.jpg')",
        "image-hero-tb":
          "url('../public/assets/home/tablet/image-hero-coffeepress.jpg')",
        "image-hero-dk":
          "url('../public/assets/home/desktop/image-hero-coffeepress.jpg')",
      },
      backgroundColor: {
        primary: "var(--bg-primary)",
        secondary: "var(--bg-secondary)",
        tertiary: "var(--bg-tertiary)",
      },
      borderColor: {
        DEFAULT: "var(--border-primary)",
        primary: "var(--border-primary)",
        secondary: "var(--border-secondary)",
      },
      boxShadow: {
        "inner-px": "inset 0 1px 0 var(--tw-shadow-color)",
        "inner-xs": "inset 0 1px 1px var(--tw-shadow-color)",
        "inner-lg":
          "inset 0 -50px 50px var(--tw-shadow-color), 0 30px 30px var(--tw-shadow-color), 0 15px 15px var(--tw-shadow-color), 0 10px 8px var(--tw-shadow-color), 0 4px 4px var(--tw-shadow-color), 0 2px 2px var(--tw-shadow-color)",
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "var(--spacing-2)",
          sm: "var(--spacing-3)",
          md: "var(--spacing-4)",
          lg: "var(--spacing-5)",
          xl: "var(--spacing-6)",
        },
      },
      fontFamily: {
        fraunces: ["Fraunces", "serif"],
        barlow: ["Barlow", "sans-serif"],
      },
      lineHeight: {
        normal: "normal",
      },
      transitionDuration: {
        DEFAULT: "200ms",
      },
    },
  },
  plugins: [
    require("@tailwindcss/forms"),
    function ({ addVariant }) {
      addVariant("initial", "html :where(&)");
    },
  ],
};
