// BEGIN
const textToP = () => {
    const divElements = document.querySelectorAll('div');
    divElements.forEach(element => {
        const textNodes = Array.from(element.childNodes).filter((node) => node instanceof Text);

        textNodes.forEach(node => {

            if (node.textContent.trim() !== '') {
                const newNode = document.createElement('p');
                newNode.textContent = node.textContent.trim()
                node.replaceWith(newNode);
            }

        })
    })
}


export default textToP;
// END