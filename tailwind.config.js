/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
	colors: {
		'yellow': '#FFDE5D',
		'pink': '#FF9393',
		'red': '#E74C38',
		'white': "#FFFEFE",
		'black': '#232221',
		'cream': '#FEF9F5',
		'red-young' : '#e74738',
	},
	fontFamily: {
		'body' : ['"Poppins'],
	}
  },
  plugins: [],
}

