// idle timer code borrowed from w3docs.com
let idle = false;

let inactivityTime = function () {

    let time;
    window.onload = resetTimer;
    document.onmousemove = resetTimer;
    document.onkeypress = resetTimer;

    function resetTimer() {
        clearTimeout(time);
        time = setTimeout(logout, 3000000)
    };

    function logout() {
        const response = fetch('/api/users/logout', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
        });

        console.log('logged out');
        alert('Logged out due to inactivity')
        idle = true;
    };
};

window.onload = function () {
    inactivityTime();
};


const makeComment = (event) => {
    // event.preventDefault();

    if (idle === true) {
        document.location.replace('/login');
    } else {
        document.getElementById('comment').style.display = 'block';
        document.getElementById('commentbtn').style.display = 'none';
    }
};

document
    .querySelector('#commentbtn')
    .addEventListener('click', makeComment);


const addComment = async (event) => {

    const content = document.querySelector('#comment-text').value.trim();
    let id = event.target.getAttribute('data-id');

    if (idol === true) {
        document.location.replace('/login');
    } else {
        const response = await fetch(`/api/comment/${id}`, {
            method: 'POST',
            body: JSON.stringify({ content }),
            headers: { 'Content-Type': 'application/json' }
        });
        if (response.ok) {
            // document.location.replace('/dashboard');
            location.reload();
        }
        else {
            alert('Failed to create comment');
        };
    }
};


document
    .querySelector('#add-comment')
    .addEventListener('click', addComment);


