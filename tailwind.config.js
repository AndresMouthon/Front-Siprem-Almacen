const flowbite = require("flowbite-react/tailwind");

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html", "./src/**/*.{js,ts,jsx,tsx}",
    flowbite.content(),
    "node_modules/flowbite/**/*.js",
  ],
  theme: {
    extend: {
      colors: {
        "secondary": "#001A72",
      },
    },
  },
  plugins: [
    require('flowbite/plugin'),
    flowbite.plugin(),
  ],
}

// theme: {
//   extend: {
//     colors: {
//       primary: "#001A72",
//       "light-1": "#bbdefb",
//       secondary: "#543884",
//       "light-2": "#efe7fc",
//       "otro-100": "#faf5ff",
//       "otro-2": "#42a5f5",
//       tercer: "#f5eeff",
//       cuarto: "#782aeb",
//       background: "#F5F5F5",
//     },
//   },
// },