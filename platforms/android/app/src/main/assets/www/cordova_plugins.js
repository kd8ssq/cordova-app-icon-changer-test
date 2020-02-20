cordova.define('cordova/plugin_list', function(require, exports, module) {
  module.exports = [
    {
      "id": "cordova-plugin-app-icon-changer.AppIconChanger",
      "file": "plugins/cordova-plugin-app-icon-changer/www/AppIconChanger.js",
      "pluginId": "cordova-plugin-app-icon-changer",
      "clobbers": [
        "AppIconChanger"
      ]
    }
  ];
  module.exports.metadata = {
    "cordova-custom-config": "5.1.0",
    "cordova-plugin-app-icon-changer": "2.0.0",
    "cordova-plugin-whitelist": "1.3.3"
  };
});