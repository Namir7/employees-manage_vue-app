module.exports = {
  purge: { content: ["./public/**/*.html", "./src/**/*.vue"] },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    backgroundColor: ["even"],
    extend: {
      fontWeight: ["hover", "focus"],
    },
  },
  plugins: [],
};
