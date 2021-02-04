module.exports = {
  plugins: [
    [
      "module-resolver",
      {
        root: ["./"],
      },
    ],
  ],
  presets: ["@expo/next-adapter/babel"],
};
