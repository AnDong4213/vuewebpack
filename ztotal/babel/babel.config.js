// "@babel/env",

const presets = [
  [
    "@babel/preset-env",
    {
      targets: {
        chrome: "40"
      },
      corejs: 2,
      useBuiltIns: "usage"
    }
  ]
]

module.exports = { presets }

