const autoprefixer = require("autoprefixer");

const config = {
  // map: { 
  //   inline: false,
  //   annotation: true,
  //   sourcesContent: true
  // },

  plugins: [
    //Some plugins, like tailwindcss/nesting, need to run before Tailwind,
    // tailwindcss(),
    //But others, like autoprefixer, need to run after,
    autoprefixer()
  ]
};

module.exports = config;

// module.exports = {
//     map: { 
//       inline: false,
//       annotation: true,
//       sourcesContent: true
//     },
//     plugins: {
//       autoprefixer: {
//         cascade: false
//       }
//     }
//   }