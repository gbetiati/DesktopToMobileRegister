/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [require('daisyui'),],
    daisyui: {
      themes: [
        {
          mytheme: {
            "primary": "#0094ff",      
            "secondary": "#6495ED",     
            "accent": "#1E90FF",        
            "neutral": "#242424",         

            "info": "#3dceff",
            "success": "#34c759",
            "warning": "#ff9500",
            "error": "#ff3b30",
          },
        },
      ],
    },
}

