const purgecss = require('@fullhuman/postcss-purgecss')({
  content: [
    './shared/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './provider/ThemeProvider/*.{js,ts,jsx,tsx,mdx}',
  ],
  safelist: ['html', 'body'],
});

const cssnano = require('cssnano')({
  preset: 'default',
});

module.exports = {
  plugins: [
    'postcss-flexbugs-fixes',
    'postcss-preset-env',
    ...(process.env.NODE_ENV === 'production' ? [purgecss] : []),
    cssnano,
  ],
};
