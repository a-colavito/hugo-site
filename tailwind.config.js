module.exports = {
  darkMode: "class", // Abilita la modalità scura tramite la classe "dark"
  theme: {
    extend: {
      fontFamily: {
        sans: ['-apple-system', 'BlinkMacSystemFont', '"Segoe UI"', 'Roboto', '"Helvetica Neue"', 'Arial', 'sans-serif'],
      },
    },
  },
  variants: {
    extend: {
      backgroundColor: ['dark'],  // Estendi backgroundColor per la modalità scura
      textColor: ['dark'],         // Estendi textColor per la modalità scura
      borderColor: ['dark'],       // Estendi borderColor per la modalità scura
      // Puoi aggiungere altre proprietà che desideri modificare in modalità scura
    },
  },
};
