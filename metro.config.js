/**
 * Metro configuration for React Native
 * https://github.com/facebook/react-native
 *
 * @format
 */

module.exports = {
  transformer: {
    getTransformOptions: async () => ({
      transform: {
        experimentalImportSupport: false,
        inlineRequires: true,
      },
    }),
  },
  project: {
    ios: {},
    android: {},
  },
  assets: ['./assets/fonts']
};

// module.exports = {
//   project: {
//       ios: {},
//       android: {},
//   },
//   assets: ['./assets/fonts']
//   };
