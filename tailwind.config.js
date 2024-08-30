/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [ require('daisyui'),
    require('@tailwindcss/forms'),
   ],
    daisyui: {
      themes: [
        {
          mytheme: {
            "primary": "#3b7b9a",      
            "secondary": "#3b7b9a",     
            "accent": "#3b7b9a",        
            "neutral": "#474747",
            "info": "#a5def1",
            
            "success": "#34c759",
            "warning": "#ff9500",
            "error": "#ff3b30",
          },
        },
      ],
    },
}

