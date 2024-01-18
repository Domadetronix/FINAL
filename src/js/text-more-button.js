import { toggleButton } from "./button";

let textButton = document.querySelector('.text-block_expand-button');
let textButtonText = textButton.querySelector('.expand-button__text');
let textButtonPic = textButton.querySelector('.expand-button__picture');

let condition = false;

let items = document.querySelectorAll('.expandable-text');

let open = function(){
    items.forEach(function(item){
        item.classList.remove('mobile-hide','tablet-hide','desktop-hide');
    })
}

let close = function(){
    items[0].classList.add('mobile-hide');
    items[1].classList.add('tablet-hide');
    items[2].classList.add('desktop-hide')
}

/* textButton.closest('.') */


textButton.addEventListener('click', function(){
    toggleButton(textButtonText, textButtonPic);
    if ( textButtonText.classList.contains('active') ){
        open();
    } else {
        close();
    }
});