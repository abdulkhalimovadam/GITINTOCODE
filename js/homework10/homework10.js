const main = document.getElementById('main-post');
const block1 = document.getElementById('post-1-tab');
const block2 = document.getElementById('post-2-tab');
const block3 = document.getElementById('post-3-tab');
const block4 = document.getElementById('post-4-tab');
block1.addEventListener('click', activator);
block1.addEventListener('click', show);
block2.addEventListener('click', activator);
block2.addEventListener('click', show);
block3.addEventListener('click', activator);
block3.addEventListener('click', show);
block4.addEventListener('click', activator);
block4.addEventListener('click', show);
function activator (){
    block1.classList.remove('active');
    block2.classList.remove('active');
    block3.classList.remove('active');
    block4.classList.remove('active');
    this.classList.add('active')
};
function show(){
    let src = this.firstElementChild.firstElementChild.firstElementChild.src;
    let text = this.firstElementChild.lastElementChild.firstElementChild.innerHTML;
    main.firstElementChild.firstElementChild.firstElementChild.innerHTML = text;
    main.firstElementChild.style.backgroundImage = `url(${src})`;
};
