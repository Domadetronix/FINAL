let background = document.querySelector('.modal-background')

let openMenu = document.querySelector('.button__icon_content_burger-menu').closest('.button')
let closeMenu = document.querySelector('.mobile-menu__close-button').querySelector('.button')
let menu = document.querySelector('.mobile-menu');
/*    */
let modalCall = document.querySelector('.phone-modal')
let openCall = document.querySelectorAll('.button__icon_content_phone')
let closeCall = modalCall.querySelector('.modal__close-button').querySelector('.button')

/*    */
let modalMes = document.querySelector('.message-modal')
let openMes = document.querySelectorAll('.button__icon_content_chat')
let closeMes = modalMes.querySelector('.modal__close-button').querySelector('.button')




let popupDo = function(op, cl, modal){
    op.addEventListener('click', function(){
            modal.classList.add('modal-active');
            background.classList.add('modal-background-active');
    })
    cl.addEventListener('click', function(){
        modal.classList.remove('modal-active');
        background.classList.remove('modal-background-active');
    })
    background.addEventListener('click',function() {
            modal.classList.remove('modal-active');
            background.classList.remove('modal-background-active');
    });
    (document.body).addEventListener('click', function(){
        let modalCounter = document.querySelectorAll('.modal-active');
        if (modalCounter.length > 0){
            background.classList.add('modal-background-active')
        } else {
            background.classList.remove('modal-background-active')
        }
    })
    
}

popupDo(openMenu,closeMenu, menu);

for (let i = 0; i < openCall.length; i++){
    popupDo(openCall[i].closest('.button'), closeCall, modalCall );
}
for (let i = 0; i < openMes.length; i++){
    popupDo(openMes[i].closest('.button'), closeMes, modalMes );
}