const colors = require("tailwindcss/colors");

module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      spacing: {
        0.1: "1px",
        0.2: "2px",
        0.3: "3px",
        0.4: "4px",
        0.5: "5px",
        1.1: "10px",
        1.15: "15px",
        1.8: "18px",
        2.2: "20px",
        '1/50':'5%',
        "1/10": "10%",
        "1/15": "15%",
        "2/10": "20%",
        "2/15": "25%",
        "3/10": "30%",
        "3/15": "35%",
        "4/10": "40%",
        "4/15": "45%",
        "5/10": "50%",
        "5/15": "55%",
        "6/10": "60%",
        "6/15": "65%",
        "7/10": "70%",
        "7/15": "75%",
        "8/10": "80%",
        "8/15": "85%",
        "9/10": "90%",
        "9/15": "95%",
        "10/10": "100%",
      },
      height: {
        700: "70vh",
      },
      fontSize: {
        xxxs: "2px",
        xxs: "5px",
      },
      colors: {
        transparent: "transparent",
        current: "currentColor",
        black: colors.black,
        white: colors.white,
        gray: colors.trueGray,
        indigo: colors.indigo,
        red: colors.rose,
        green: colors.green,
        seagreen: "#1BAE8A",
        yellow: colors.amber,
        lightgreen: "#1BAE8A21",
        skyblue: "#3B99FC",
        darkblue: "#2A498D",
        turquoise: "#03B2BA",
        skyblue: "#F6FFFF",
        darkblue: "#060D29",
        turquoise: "#03B2BA",
        trans: "#555D7D",
        blueish: '#0068B8',
        lightteal: '#4FA9D6',
      },
      backgroundImage: (theme) => ({
        intro: "url('/src/img/assuredBg.svg')",
        signup:"url('/src/img/signup.svg')",
      }),
    },
  },
  variants: {
    extend: {
      animation: ['motion-safe'],
    },
  },
  plugins: [
    require("@tailwindcss/forms")({
      strategy: "class",
    }),
  ],
};
