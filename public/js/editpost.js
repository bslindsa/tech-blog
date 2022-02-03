const id = document.querySelector('#update-post').getAttribute('data-id');

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

const delPostHandler = async (event) => {
    const response = await fetch(`/api/post/${id}`, {
        method: 'DELETE'
    });
    if (response.ok) {
        alert('Post has been deleted');
        document.location.replace('/dashboard');
    };
};

document
    .querySelector('#update-post')
    .addEventListener('click', postUpdateHandler);

document
    .querySelector('#delete-post')
    .addEventListener('click', delPostHandler);