import heroUINativePlugin from 'heroui-native/tailwind-plugin';

module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    './node_modules/heroui-native/lib/**/*.{js,ts,jsx,tsx}',
  ],
  presets: [require('nativewind/preset')],
  theme: {
    extend: {},
  },
  plugins: [heroUINativePlugin],
};