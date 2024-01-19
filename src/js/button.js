let button1 = document.querySelector('.expand-button_1');
let button2 = document.querySelector('.expand-button_2')


let buttonChange = function(btn, lineQuantiti){

    let buttonPic = btn.querySelector('.expand-button__picture');
    let buttonText = btn.querySelector('.expand-button__text');
    

    window.addEventListener('resize', function(){
        if ( !buttonText.classList.contains('active') ){
            detectWrap();
        }
    });
    
    btn.addEventListener('click', function(){
        toggleButton(buttonText, buttonPic);
        if ( buttonText.classList.contains('active') == true ){
            cleaner();
        } else {
            detectWrap();
        }
    });

    let container = btn.closest('.services-block__content');

    let cleaner = function(){
        
        let items = container.querySelectorAll('.swiper-slide');
        for (let i = 0; i < items.length; i++) {
            items[i].classList.remove('hidden');
        }
    }
    
    let detectWrap = function() {
        
        let prevItem = {};
        let currItem = {};
        let items = container.querySelectorAll('.swiper-slide');
        let lineCounter = 1;
        for (let i = 0; i < items.length; i++) {
            items[i].classList.remove('hidden');    
            currItem = items[i].getBoundingClientRect();
            if (prevItem && prevItem.top < currItem.top) {
                lineCounter++;
            }
            if (lineCounter > lineQuantiti) {
                items[i].classList.add('hidden');
            }
            prevItem = currItem;
          
        };
    }

    detectWrap(btn);


}



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

buttonChange(button1, 2)

buttonChange(button2, 1)
/*  let cleaner = function(button){
    let container = button.closest('.services-block__content');
    let items = container.querySelectorAll('.mobile-slider__item');
    for (let i = 0; i < items.length; i++) {
        items[i].classList.remove('hidden');
    }
}

let detectWrap = function(button) {
    let className = 'mobile-slider__item';
    let container = button.closest('.services-block__content');
    let prevItem = {};
    let currItem = {};
    let items = container.getElementsByClassName(className);
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

detectWrap(button);

window.addEventListener('resize', function(){
    if ( !buttonText.classList.contains('active') ){
        detectWrap(button);
    }
});

button.addEventListener('click', function(){
    toggleButton(buttonText, buttonPic);
    if ( buttonText.classList.contains('active') == true ){
        cleaner(button);
    } else {
        detectWrap(button);
    }
});

ВТОРАЯ КНОПКА 

window.addEventListener('resize', function(){
    if ( !buttonText_2.classList.contains('active') ){
        detectWrap(button);
    }
});

button.addEventListener('click', function(){
    toggleButton(buttonText, buttonPic);
    if ( buttonText.classList.contains('active') == true ){
        cleaner(button);
    } else {
        detectWrap(button);
    }
});
*/