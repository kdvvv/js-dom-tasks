export default (document) => {
  // BEGIN
    const content = document.getElementsByClassName('content')[0];
    const categoryTitle = content.getElementsByTagName('h1')[0].textContent;
    const categoryDescription = content.getElementsByClassName('description')[0].textContent;

    const articleContainers = content.getElementsByClassName('links')[0].getElementsByTagName('div');
    const articles = [];

    for (let i = 0; i < articleContainers.length; i++) {
        const articleTitle = articleContainers[i].getElementsByTagName('h2')[0].getElementsByTagName('a')[0].textContent;
        const articleDescription = articleContainers[i].getElementsByTagName('p')[0].textContent;
        articles.push({ title: articleTitle, description: articleDescription });
    }

    return { title: categoryTitle, description: categoryDescription, items: articles };
  // END
};
