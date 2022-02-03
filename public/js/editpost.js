const id = document.querySelector('.cssbtn').getAttribute('data-id');

const postUpdateHandler = async (event) => {
    const title = document.querySelector('#post-title').value.trim();
    const content = document.querySelector('#post-content').value.trim();
    
    const response = await fetch(`/api/post/${id}`, {
        method: 'PUT',
        body: JSON.stringify({ title, content }),
        headers: { 'Content-Type': 'application/json' }
    });
    if (response.ok) {
        document.location.replace('/dashboard');
    }
    else {
        alert('Failed to create post');
    };
};

document
    .querySelector('.post-form')
    .addEventListener('submit', postUpdateHandler);