const postForm = document.querySelector(`#postForm`);
const postFormTitle = document.querySelector(`#postFormTitle`);

const postsContainer = document.querySelector(`#postsContainer`);

postForm.addEventListener(`submit`, e=>{
    e.preventDefault();

    let newPost = {
        title: postFormTitle.value
    };

    renderPost(newPost);
});

const renderPost = post => {
    const postBlock = document.createElement(`div`);
    postBlock.className = `post__block`;
    postBlock.innerHTML = `<h3>${post.title}</h3>`;

    const deleteBtn = document.createElement(`button`);
    deleteBtn.innerHTML = `Delete post`;
    deleteBtn.addEventListener(`click`, () => {
        postBlock.remove();
    });

    postBlock.append(deleteBtn);

    postsContainer.append(postBlock); // Object.toString() => [Object DivElement];
};
