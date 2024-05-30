// BEGIN
const site = document.querySelector('body');
const siteBodyContent = site.innerHTML;

const lines = siteBodyContent.trim().split('\n');
let formattedContent = '';

lines.forEach(line => {
    const formattedLine = document.createElement('p');
    formattedLine.textContent = line;
    formattedContent += formattedLine.outerHTML;
});

site.innerHTML = formattedContent;
// END