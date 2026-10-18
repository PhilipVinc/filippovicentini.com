const htmlmin = require('html-minifier-terser')

const shouldTransformHTML = (outputPath) =>
    outputPath &&
    outputPath.endsWith('.html') &&
    process.env.ELEVENTY_ENV === 'production'

process.setMaxListeners(Infinity)
module.exports = {
    htmlmin: async function (content, outputPath) {
        if (shouldTransformHTML(outputPath)) {
            return await htmlmin.minify(content, {
                useShortDoctype: true,
                removeComments: true,
                collapseWhitespace: true
            })
        }
        return content
    }
}
