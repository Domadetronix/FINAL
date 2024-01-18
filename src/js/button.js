let button = document.querySelector('.services-block__expand-button');
let buttonPic = button.querySelector('.expand-button__picture');
let buttonText = button.querySelector('.expand-button__text');

let condition = false;

export let toggleButton = function(text, pic){
    if (!text.classList.contains('active')){
        text.textContent = 'Скрыть';
        pic.style.transform = 'rotate('+180+'deg)';
        text.classList.add('active')
    } else {
        text.textContent = 'Показать все';
        pic.style.transform = 'rotate('+0+'deg)'
        text.classList.remove('active')
    }

}

let cleaner = function(){
    let items = document.querySelectorAll('.mobile-slider__item');
    for (let i = 0; i < items.length; i++) {
        items[i].classList.remove('hidden');
    }
}

let detectWrap = function() {
    let className = 'mobile-slider__item';
    let prevItem = {};
    let currItem = {};
    let items = document.getElementsByClassName(className);
    let lineCounter = 1;
    for (let i = 0; i < items.length; i++) {
        items[i].classList.remove('hidden');    
        currItem = items[i].getBoundingClientRect();
        if (prevItem && prevItem.top < currItem.top) {
            lineCounter++;
        }
        if (lineCounter > 2) {
            items[i].classList.add('hidden');
        }
        prevItem = currItem;
      
    };
}

detectWrap();

window.addEventListener('resize', function(){
    if ( !buttonText.classList.contains('active') ){
        detectWrap();
    }
});

button.addEventListener('click', function(){
    toggleButton(buttonText, buttonPic);
    if ( buttonText.classList.contains('active') == true ){
        cleaner();
    } else {
        detectWrap();
    }
});