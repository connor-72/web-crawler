const url = require('node:url')

function normalizeURL(url) {
    if (url.length > 0 && url.slice(-1) === '/') {
        const preURL = url.slice(0, -1)
        const myURL = new URL (preURL)
        const finalURL = myURL.host + myURL.pathname
        return finalURL
    } else {
        const myURL = new URL (url)
        const finalURL = myURL.host + myURL.pathname
        return finalURL
    }
    // const myURL = new URL(url)
    // console.log(myURL.resolve())
    // console.log(`${myURL.slice(-1)}`)
}

module.exports = {
    normalizeURL
}