module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: {
          orange: "hsl(26, 100%, 55%)",
          paleOrange: "hsl(25, 100%, 94%)",
        },
        neutral: {
          veryDarkBlue: "hsl(220, 13%, 13%)",
          darkGrayishBlue: "hsl(219, 9%, 45%)",
          grayishBlue: "hsl(220, 14%, 75%)",
          lightGrayishBlue: "hsl(223, 64%, 98%)",
          white: "hsl(0, 0%, 100%)",
          black: "hsl(0, 0%, 0%)",
        },
      },
      height: {
        76: "19rem",
        120: "38rem",
      },
      minHeight: {
        need: "16rem",
      },
      maxWidth: {
        my: "1440px",
      },
      lineHeight: {
        "extra-loose": "2.7rem",
      },
    },
  },
  variants: {
    extend: {
      opacity: ["disabled"],
    },
  },
  plugins: [],
};
