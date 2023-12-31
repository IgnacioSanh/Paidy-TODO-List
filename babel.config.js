module.exports = {
  presets: ['babel-preset-expo', '@babel/preset-typescript'],
  plugins: [
    [
      'module-resolver',
      {
        alias: {
          '~components': './src/components',
          '~contexts': './src/contexts',
          '~hooks': './src/hooks',
          '~screens': './src/screens',
          '~theme': './src/theme',
          '~types': './src/types',
          '~utils': './src/utils',
        },
      },
    ],
  ],
};
