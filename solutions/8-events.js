export default () => {
  // BEGIN
    const alertGenerator = document.querySelector('#alert-generator');
    const alertsContainer = document.querySelector('.alerts');

    let alertsCount = 1;

    alertGenerator.addEventListener('click', () => {

        const newDiv = document.createElement('div');

        newDiv.className = 'alert alert-primary';
        newDiv.textContent = `Alert ${alertsCount++}`;

        alertsContainer.prepend(newDiv);

    })
  // END
};