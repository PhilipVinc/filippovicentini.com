const fs = require('fs')
const path = require('path')
const webpack = require('webpack')
const webpackConfig = require('../../webpack.config')
const { createFsFromVolume, Volume } = require('memfs')

const ENTRY_POINTS = {
    main: 'src/assets/scripts/main.js',
    webmentions: 'src/assets/scripts/webmentions/index.js',
    sharer: 'src/assets/scripts/sharer/index.js'
}

module.exports = class {
    async data() {
        return {
            targets: ENTRY_POINTS,
            permalink: (data) => `/assets/scripts/${data.file}.js`,
            eleventyExcludeFromCollections: true,
            pagination: {
                data: 'targets',
                size: 1,
                alias: 'file'
            }
        }
    }

    async compile() {
        const vol = new Volume()
        const mfs = createFsFromVolume(vol)
        const resolveTargets = (targets) =>
            Object.keys(targets).reduce((acc, key) => {
                acc[key] = path.resolve(__dirname, '../../', targets[key])
                return acc
            }, {})

        const compiler = webpack({
            ...webpackConfig,
            entry: resolveTargets(ENTRY_POINTS)
        })

        compiler.outputFileSystem = mfs

        this.compiledAssets = await new Promise((resolve, reject) => {
            compiler.run((err, stats) => {
                if (err || stats.hasErrors()) {
                    const errors =
                        err ||
                        (stats.compilation ? stats.compilation.errors : null)

                    reject(errors)
                    return
                }

                const outputPath = stats.compilation.outputOptions.path
                const assets = {}

                // Read files from memory filesystem
                Object.keys(stats.compilation.assets).forEach(filename => {
                    try {
                        const filePath = path.join(outputPath, filename)
                        const content = mfs.readFileSync(filePath, 'utf8')
                        assets[filename] = content
                    } catch (e) {
                        console.warn(`Could not read ${filename}:`, e.message)
                    }
                })

                resolve(assets)
            })
        })
    }

    async getSource(file) {
        if (!this.compiledAssets) {
            await this.compile()
        }
        const fileName = `${file}.js`
        const content = this.compiledAssets[fileName]
        if (content) {
            return content
        } else {
            throw new Error(`Could not get source for ${fileName}`)
        }
    }

    async render({ file }) {
        try {
            return await this.getSource(file)
        } catch (err) {
            console.error(err)
            return null
        }
    }
}
