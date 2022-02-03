const makeComment = async (event) => {
    // event.preventDefault();

    const content = document.querySelector('#comment-text').value.trim();
    let id = event.target.getAttribute('data-id');

    const response = await fetch(`/api/comment/${id}`, {
        method: 'POST',
        body: JSON.stringify({ content }),
        headers: { 'Content-Type': 'application/json' }
    });
    if (response.ok) {
        // document.location.replace('/dashboard');
    }
    else {
        alert('Failed to create comment');
    };
};

document
    .querySelector('#add-comment')
    .addEventListener('click', makeComment);