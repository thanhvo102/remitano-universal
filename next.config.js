// @generated: @expo/next-adapter@2.1.59
// Learn more: https://github.com/expo/expo/blob/master/docs/pages/versions/unversioned/guides/using-nextjs.md#withexpo

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
