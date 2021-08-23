/**
 * Metro configuration for React Native
 * https://github.com/facebook/react-native
 *
 * @format
 */
const path = require('path');

const watchFolders = [
  path.resolve(__dirname, '..', 'shared', 'src'),
  path.resolve(__dirname, '..', 'shared'),
  path.resolve(__dirname, '..', 'node_modules'),
];

module.exports = {
  transformer: {
    getTransformOptions: async () => ({
      transform: {
        experimentalImportSupport: false,
        inlineRequires: false,
      },
    }),
  },
  resolver: {
    extraNodeModules: new Proxy(
      {},
      {
        get: (target, name) => {
          return path.join(__dirname, `node_modules/${name}`);
        },
      },
    ),
  },
  watchFolders,
};
