module.exports = {
  apps: [
    {
      name: 'My super application',
      script: './src/server.js',
      node_args: '-r esm',
    },
  ],
};