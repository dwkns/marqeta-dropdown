module.exports = {
  future: {
    defaultLineHeights: true,
    purgeLayersByDefault: true,
    removeDeprecatedGapUtilities: true,
    standardFontWeights: true,
  },
  purge: {
    content: ["./src/**/*.njk", "./src/**/*.js", "./src/**/*.svg"],
    options: {
      safelist: [],
    },
  },
  plugins: [require("tailwindcss-debug-screens")],
  theme: {
    extend: {
      fontFamily: {
        graphix: ["Graphik"],
      },
      colors: {
        "u2-gold": "#F4B41A",
      },
    },
  },
};
