var htmlDir          = './app/views';
var assetDir         = './gulp/assets';
var outputDir        = './lib/assets';
var scriptsDir       = '/scripts/src';
var nodeDir          = './node_modules';
var scriptBundleName = '/bundle.js';

module.exports = {
  sass: {
    //src: assetDir + '/stylesheets/style.scss',
    src: assetDir + '/stylesheets/*',
    watch: assetDir + '/stylesheets/**/*',
    dest: outputDir + '/stylesheets',
    includes: [
      "./node_modules/bootstrap-sass/assets/stylesheets",
    ]
  },

  scripts: {
    src: [
      assetDir + scriptsDir + '/index.js',
    ],
    clean: assetDir + scriptsDir + scriptBundleName,
    watch: assetDir + scriptsDir + '/**/*',
    dest: outputDir + '/scripts'
  },

  html: {
    watch: htmlDir + '/**/*',
  },

  env: {
    development: {
      NODE_ENV: 'development',
      HOSTNAME: 'localhost',
      PORT: '3001',
      PROTOCOL: 'http',
      DEBUG: true
    }
  }
}