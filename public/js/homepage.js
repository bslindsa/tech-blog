// const id = document.querySelector('#post-5').getAttribute('data-id');
// console.log(id);



const viewPost = (event) => {
    
    let id = event.target.getAttribute('data-id');
    console.log(id);
    // document.location.replace(`/post/${id}`);
    
};

document
    .querySelector(`.posts`)
    .addEventListener('click', viewPost);