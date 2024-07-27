const url = require('node:url')
import { JSDOM } from 'jsdom'

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

function getURLsFromHTML(html, baseURL) {
    const urls = []
    const dom = new JSDOM(html)
    const anchors = dom.window.document.querySelectorAll('a')

    for (const anchor of anchors) {
        if (anchor.hasAttribute('href')) {
            let href = anchor.getAttribute('href')

            try {
                // convert any relative URLs to absolute URLs
                href = new URL(href, baseURL).href
                urls.push(href)
            } catch(err) {
                console.log(`${err.message}: ${href}`)
            }
        }
    }
    return urls
}

module.exports = {
    normalizeURL, getURLsFromHTML
}