const parentScripts = require("../../_base/package-scripts")

parentScripts.scripts.default = "webpack-dev-http2Server --watch"
parentScripts.scripts.once = "webpack-dev-http2Server"
parentScripts.scripts.production = "start ./dist/index.html"
parentScripts.scripts.build = "webpack --mode production --optimize-max-chunks 10 --optimize-min-chunk-size true --optimize-minimize true"

module.exports = parentScripts
