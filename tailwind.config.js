/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    `./src/pages/**/*.{js,jsx,ts,tsx}`,
    `./src/components/**/*.{js,jsx,ts,tsx}`,
  ],
  theme: {
    extend: {
      colors: {
        'black': '#000000',
        'white': '#ffffff',
        'green': {
          '50': 'var(--green-50)',
          '100': 'var(--green-100)',
          '200': 'var(--green-200)',
          '300': 'var(--green-300)',
          '400': 'var(--green-400)',
          '500': 'var(--green-500)',
          '600': 'var(--green-600)',
          '700': 'var(--green-700)',
          '800': 'var(--green-800)',
          '900': 'var(--green-900)',
          '950': 'var(--green-950)',
        },
        'blue-ribbon': {
          '50': 'var(--blue-ribbon-50)',
          '100': 'var(--blue-ribbon-100)',
          '200': 'var(--blue-ribbon-200)',
          '300': 'var(--blue-ribbon-300)',
          '400': 'var(--blue-ribbon-400)',
          '500': 'var(--blue-ribbon-500)',
          '600': 'var(--blue-ribbon-600)',
          '700': 'var(--blue-ribbon-700)',
          '800': 'var(--blue-ribbon-800)',
          '900': 'var(--blue-ribbon-900)',
          '950': 'var(--blue-ribbon-950)',
        },
        'lavender-rose': {
          '50': 'var(--lavender-rose-50)',
          '100': 'var(--lavender-rose-100)',
          '200': 'var(--lavender-rose-200)',
          '300': 'var(--lavender-rose-300)',
          '400': 'var(--lavender-rose-400)',
          '500': 'var(--lavender-rose-500)',
          '600': 'var(--lavender-rose-600)',
          '700': 'var(--lavender-rose-700)',
          '800': 'var(--lavender-rose-800)',
          '900': 'var(--lavender-rose-900)',
          '950': 'var(--lavender-rose-950)',
        },
      }
    },
  },
  plugins: [],
}
