import { getDefaultConfig } from 'expo/metro-config';
import type { ConfigT } from 'metro-config';

// Wrap in an IIFE to keep the default config structure
const config = (() => {
  const defaultConfig = getDefaultConfig(__dirname) as ConfigT;

  // Apply SVG transformer settings
  defaultConfig.transformer = {
    ...defaultConfig.transformer,
    babelTransformerPath: require.resolve('react-native-svg-transformer'),
  };
  
  defaultConfig.resolver = {
    ...defaultConfig.resolver,
    assetExts: defaultConfig.resolver.assetExts.filter(ext => ext !== 'svg'),
    sourceExts: [...defaultConfig.resolver.sourceExts, 'svg'],
  };

  return defaultConfig;
})();

export default config;
