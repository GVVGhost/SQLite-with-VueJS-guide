function isValidUrl(urlString) {
    const urlPattern = new RegExp('^(https?:\\/\\/)?' + // validate protocol
        '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|' + // validate domain name
        '((\\d{1,3}\\.){3}\\d{1,3}))' + // validate OR ip (v4) address
        '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' + // validate port and path
        '(\\?[;&a-z\\d%_.~+=-]*)?' + // validate query string
        '(\\#[-a-z\\d_]*)?$', 'i'); // validate fragment locator
    return !!urlPattern.test(urlString);
}

console.log(`URL validation:`);
[
    "",
    "invalidURL",
    "htt//jsowl",
    "1",
    "https://www.jsowl.com/remove-an-item-from-an-array-in-javascript/",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Vue.js_Logo_2.svg/1200px-Vue.js_Logo_2.svg.png",
    "https://cdn.pixabay.com/photo/2015/04/23/17/41/node-js-736399__480.png"
].forEach((el => console.log(`\t${isValidUrl(el)}: ${el}`)));
