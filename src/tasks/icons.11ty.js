const fs = require('fs')
const path = require('path')
const SVGSpriter = require('svg-sprite')

module.exports = class {
    async data() {
        const config = {
            mode: {
                inline: true,
                symbol: {
                    sprite: 'icons.sprite.svg',
                    example: false
                }
            },
            shape: {
                transform: ['svgo'],
                id: {
                    generator: 'icon-%s'
                }
            },
            svg: {
                xmlDeclaration: false,
                doctypeDeclaration: false
            }
        }

        return {
            permalink: '/assets/icons/icons.sprite.svg',
            eleventyExcludeFromCollections: true,
            config
        }
    }

    async compile(dir, config) {
        // Make a new SVGSpriter instance w/ configuration
        const spriter = new SVGSpriter(config)

        // Get all SVG icon files in working directory
        const files = fs
            .readdirSync(dir, { recursive: true })
            .filter((file) => file.endsWith('.svg'))

        // Add them all to the spriter
        files.forEach(function (file) {
            const filePath = path.join(dir, file)
            spriter.add(filePath, file, fs.readFileSync(filePath, 'utf8'))
        })

        // Compile the sprite file and return it as a string
        const { result } = await spriter.compileAsync(config.mode)
        return result.symbol.sprite.contents.toString('utf8')
    }

    async render({ config }) {
        try {
            const cwd = path.resolve('src/assets/icons')
            const sprite = await this.compile(cwd, config)
            return sprite
        } catch (err) {
            console.error(err)
        }
    }
}
