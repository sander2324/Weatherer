require('dotenv').config();

export default {
  'expo': {
    'name': 'weatherer',
    'slug': 'weatherer',
    'version': '1.0.0',
    'orientation': 'portrait',
    'entryPoint': './src/App.js',
    'icon': './assets/icon.png',
    'splash': {
      'image': './assets/splash.png',
      'resizeMode': 'contain',
      'backgroundColor': '#ffffff'
    },
    'updates': {
      'fallbackToCacheTimeout': 0
    },
    'assetBundlePatterns': [
      '**/*'
    ],
    'ios': {
      'supportsTablet': true
    },
    'web': {
      'favicon': './assets/favicon.png'
    },
    'extra': {
      'owmApiKey': process.env.OWM_API_KEY
    },
  }
}
