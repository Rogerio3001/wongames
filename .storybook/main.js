module.exports = {
  stories: ['../src/components/**/stories.tsx'],
  addons: [
    '@storybook/addon-essentials',
    'storybook-addon-next-router',
    'storybook-dark-mode'
  ],
  babel: async (options) => ({
    ...options,
    plugins: [
      ...options.plugins,
      require.resolve('@babel/plugin-transform-react-jsx')
    ]
  }),
  webpackFinal: (config) => {
    config.resolve.modules.push(`${process.cwd()}/src`)
    return config
  }
}
