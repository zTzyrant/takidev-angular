/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  darkMode: ["selector", '[data-theme="dark"]'],
  theme: {
    extend: {
      colors: {
        primary: "var(--bg-primary)",
        secondary: "var(--bg-secondary)",
        "primary-text": "var(--text-primary)",
        "secondary-text": "var(--text-secondary)",
      },
    },
  },
  plugins: [],
}
