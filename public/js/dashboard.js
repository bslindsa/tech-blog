const toEdit = (event) => {
    if (event.target.hasAttribute('data-id')) {
        let id = event.target.getAttribute('data-id');
        document.location.replace(`/dashboard/${id}`);
    };
};


document
    .querySelector('#new-post')
    .addEventListener('click', () => {
        document.location.replace('/newpost')
    });



document.querySelector('.dashboard')
    .addEventListener('click', toEdit);