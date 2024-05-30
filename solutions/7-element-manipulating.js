import camelCase from 'lodash/camelCase';

// BEGIN
export default (document) => {
    const items = document.getElementsByTagName('*');
    for (const item of items) {
        const classes = Array.from(item.classList);
        for (const badClassName of classes) {
            const niceCLassName = camelCase(badClassName);
            item.classList.replace(badClassName, niceCLassName)
        }
    }

}
// END