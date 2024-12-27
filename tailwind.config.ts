import type { Config } from "tailwindcss";

const config: Config = {
    darkMode: ["class"],
    content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
  	extend: {
  		colors: {
  			background: 'var(--background)',
  			foreground: 'var(--foreground)'
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		},
		  keyframes: {
			'fade-in': {
			  '0%': { opacity: '0', transform: 'translateY(10px)' },
			  '100%': { opacity: '1', transform: 'translateY(0)' },
			},
		  },
		  animation: {
			'fade-in': 'fade-in 0.3s ease-in-out',
		  },
  	}
  },
  plugins: [require("tailwindcss-animate")],
};
export default config;
