// BEGIN
const getParagraphsContent = (element) => {
    const p = element.querySelectorAll('p');
    const array = Array.from(p);
    const pContent = array.map(p => p.textContent.trim())
    return pContent;
}

export default getParagraphsContent;
// END