// Open option to make a comment
const makeComment = (event) => {
    event.preventDefault();

    document.getElementById('comment').style.display = 'block';
    document.getElementById('commentbtn').style.display = 'none';
};

document
    .querySelector('#commentbtn')
    .addEventListener('click', makeComment);

// Submit comment
const addComment = async (event) => {
    event.preventDefault();

    const content = document.querySelector('#comment-text').value.trim();
    let id = event.target.getAttribute('data-id');

    const response = await fetch(`/api/comment/${id}`, {
        method: 'POST',
        body: JSON.stringify({ content }),
        headers: { 'Content-Type': 'application/json' }
    });
    if (response.ok) {
        location.reload();
    }
    else {
        alert('Failed to create comment');
    };
};

document
    .querySelector('#add-comment')
    .addEventListener('click', addComment);