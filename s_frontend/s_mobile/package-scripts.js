const parentScripts = require("../../_base/package-scripts")

parentScripts.scripts.default = "react-native start" // expo start (if normal compiling) --> expo r -c = delete cache and then compile (slower)

module.exports = parentScripts
