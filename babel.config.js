module.exports = {
  presets: ['babel-preset-expo', '@babel/preset-typescript'],
  plugins: [
    [
      'module-resolver',
      {
        alias: {
          '~components': './src/components',
          '~screens': './src/screens',
          '~theme': './src/theme',
        },
      },
    ],
  ],
};
