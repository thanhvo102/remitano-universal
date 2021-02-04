const { withExpo } = require("@expo/next-adapter");
const withPlugins = require("next-compose-plugins");
const withFonts = require("next-fonts");
const withImages = require("next-images");

module.exports = withPlugins(
  [
    withFonts,
    withImages,
    [withExpo, { projectRoot: __dirname }],
  ],
);
