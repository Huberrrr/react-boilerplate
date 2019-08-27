import nodeExternals from 'webpack-node-externals';

const serverConfig = {
  entry: './src/server/index.js',
  mode: 'production',
  target: 'node',
  output: {
    path: __dirname,
    filename: 'server.js',
  },
  node: {
    __dirname: false,
    __filename: false,
  },
  externals: [nodeExternals()],
};

export default serverConfig;
