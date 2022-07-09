let leftmargin = 0;

const firstimage = document.querySelector('.first_image');
const leftButton = document.querySelector('#left_button');
const rightButton = document.querySelector('#right_button');

leftButton.onclick = () =>{
    leftmargin = leftmargin - 300;

    firstimage.style.marginLeft = leftmargin + 'px';
    
};
rightButton.onclick = () => {
    leftmargin = leftmargin + 300;

firstimage.style.marginLeft = leftmargin + 'px';
    
};
