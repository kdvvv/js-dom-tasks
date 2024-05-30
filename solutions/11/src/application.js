import 'whatwg-fetch';

export default () => {
  // BEGIN
    const autocompleteInputs = document.querySelectorAll('input[data-autocomplete]');
    autocompleteInputs.forEach((input) => {
        const routeURL = input.dataset.autocomplete;
        const autocompleteName = input.dataset.autocompleteName;
        input.addEventListener('input', async (event) => {
            const resultList = document.querySelector(`ul[data-autocomplete-name="${autocompleteName}"]`);
            const searchTerm = encodeURIComponent(event.target.value);
            const response = await fetch(`${routeURL}?search=${searchTerm}`);
            const items = await response.json();
            const options = items.length === 0 ? ['Nothing'] : items;
            const listHTML = options.map((item) => `<li>${item}</li>`).join('\n');
            resultList.innerHTML = listHTML;
        });
    });



    // END
};
