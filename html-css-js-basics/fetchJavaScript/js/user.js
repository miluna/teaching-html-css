import header from "./header.js";
import footer from "./footer.js";

const pathParams = window.location.search;
const userId = pathParams.substring(pathParams.length -1, pathParams.length)
console.log(userId);

const user = ``;

document.body.innerHTML = header + user + footer;
