const markdownIt = require('markdown-it')()

// collapse whitespace in these small snippets (full pages are minified by the htmlmin transform)
const minify = (content) =>
    content.replace(/\s+/g, ' ').replace(/>\s+</g, '><').trim()

const Icon = (iconName, useInline = false) => {
    const spriteUrl = '/assets/icons/icons.sprite.svg'
    const iconId = `#icon-${iconName}`
    const href = useInline ? iconId : spriteUrl + iconId

    const output = `<svg class="icon icon--${iconName}" role="img" aria-hidden="true" width="24" height="24">
        <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="${href}"></use>
    </svg>`

    return minify(output)
}

const Callout = (content, type = 'info') => {
    let icon

    switch (type) {
        case 'action':
            icon = 'check'
            break

        case 'warning':
            icon = 'warning'
            break

        case 'tip':
            icon = 'lightbulb'
            break

        case 'info':
        default:
            icon = 'info'
            break
    }

    const output = `<div class="callout callout--${type}">
        <span class="callout__icon">${Icon(icon)}</span>
        <div class="callout__content">${markdownIt.render(content)}</div>
    </div>`

    return minify(output)
}

module.exports = {
    Icon,
    Callout
}
