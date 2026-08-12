import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Dark dungeon theme
        'dungeon-bg': '#0B0D12',
        'dungeon-dark': '#111827',
        'dungeon-secondary': '#1F2937',
        'dungeon-border': '#D6A437',
        'dungeon-purple': '#4C1D95',
        'dungeon-blue': '#2563EB',
        'dungeon-green': '#22C55E',
        'dungeon-red': '#EF4444',
        'dungeon-text': '#F9FAFB',
        'dungeon-text-secondary': '#D1D5DB',
      },
      fontFamily: {
        sans: ['system-ui', 'sans-serif'],
      },
      borderRadius: {
        none: '0',
      },
      boxShadow: {
        'dungeon': '0 0 10px rgba(214, 164, 55, 0.5)',
      },
    },
  },
  plugins: [],
}

export default config
