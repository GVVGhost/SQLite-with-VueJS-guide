import {isValidUrl} from '@/utils/UrlValidator'

const url1 = ""
const url2 = "invalidURL"
const url3 = "htt//jsowl"
const url4 = "1"
const url5 = "https://www.jsowl.com/remove-an-item-from-an-array-in-javascript/"
const url6 = "https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Vue.js_Logo_2.svg/1200px-Vue.js_Logo_2.svg.png"
const url7 = "https://cdn.pixabay.com/photo/2015/04/23/17/41/node-js-736399__480.png"

console.log(`Url valid check`)
console.log(`${isValidUrl(url1)}: ${url1}`)
console.log(`${isValidUrl(url2)}: ${url2}`)
console.log(`${isValidUrl(url3)}: ${url3}`)
console.log(`${isValidUrl(url4)}: ${url4}`)
console.log(`${isValidUrl(url5)}: ${url5}`)
console.log(`${isValidUrl(url6)}: ${url6}`)
console.log(`${isValidUrl(url7)}: ${url7}`)