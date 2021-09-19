const debug = process.env.NODE_ENV !== 'production'
const name = 'xr-global'

module.exports = {
  assetPrefix: !debug ? `/${name}/` : '',
  reactStrictMode: true,
}