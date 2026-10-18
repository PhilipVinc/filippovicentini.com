// Generates the service worker from workbox.config.js (run after the eleventy build)
const { generateSW } = require('workbox-build')
const config = require('../workbox.config.js')

generateSW(config)
    .then(({ count, size, warnings }) => {
        warnings.forEach((warning) => console.warn(warning))
        console.log(`Generated ${config.swDest}, precaching ${count} files (${size} bytes)`)
    })
    .catch((err) => {
        console.error(err)
        process.exit(1)
    })
