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
            "primary": "#1f2937",      
            "secondary": "#2a5085",     
            "accent": "#3b7b9a",        
            "neutral": "#70AFCE",
            "info": "#a5def1",
            
            "success": "#34c759",
            "warning": "#ff9500",
            "error": "#ff3b30",
          },
        },
      ],
    },
}

