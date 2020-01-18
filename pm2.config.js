module.exports = {
  apps: [
    {
      name: 'My super application',
      script: './build/bundle.js',
      node_args: '-r esm',
    },
  ],
};
