module.exports = {
  content: [
    'src/index.html',
    './src/**/*.{css,js,vue}',
    './node_modules/@zazuko/vue-graph-layout/src/components/GraphLayout.vue',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: 'var(--color-primary-50)',
          100: 'var(--color-primary-100)',
          200: 'var(--color-primary-200)',
          300: 'var(--color-primary-300)',
          400: 'var(--color-primary-400)',
          500: 'var(--color-primary-500)',
          600: 'var(--color-primary-600)',
          700: 'var(--color-primary-700)',
          800: 'var(--color-primary-800)',
          900: 'var(--color-primary-900)',
        },
      },
      fontFamily: {
        title: ['Playfair Display', 'serif'],
      },
    },
  },
  plugins: [],
}
