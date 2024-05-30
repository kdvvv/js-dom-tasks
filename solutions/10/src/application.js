import escapeHtml from 'escape-html';

// BEGIN
const escapeData = () => {
    const formOfFeedback = document.querySelector('.feedback-form');
    formOfFeedback.addEventListener('submit', (e) => {
        const dataEmail = e.target.elements.email.value;
        const dataName = e.target.elements.name.value;
        const dataComment = e.target.elements.comment.value;

        const escapedDataEmail = escapeHtml(dataEmail);
        const escapedDataName = escapeHtml(dataName);
        const escapedDataComment = escapeHtml(dataComment);

        const feedback = document.createElement('div');

        feedback.innerHTML = '<p>Feedback has been sent</p>' + '<div>Email: ' + escapedDataEmail + '</div>' + '<div>Name: ' + escapedDataName + '</div>'+ '<div>Comment: ' + escapedDataComment + '</div>';

        e.target.replaceWith(feedback);
    })
}

export default escapeData;
// END