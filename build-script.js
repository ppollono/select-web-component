const fs = require('fs-extra');
const concat = require('concat');
(async function build() {
    const files = [
        './dist/custom-element/runtime.js',
        './dist/custom-element/polyfills.js',
        // './dist/custom-element/scripts.js',
        './dist/custom-element/main.js',
    ]
    await fs.ensureDir('custom-element')
    await concat(files, 'custom-element/custom-element.js')
    await fs.copyFile('./dist/custom-element/styles.css', 'custom-element/styles.css')
})()