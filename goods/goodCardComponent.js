
function goodCardComponent(props){
    //creating a dark background for modal window 
    let cardBackgroundField = document.createElement('div');
    cardBackgroundField.classList.add('cardBackgroundField');

    //создание непосредственно окна карточки товара 
    let modalCardWindow = document.createElement('div');
    modalCardWindow.classList.add('modalCardWindow');
    cardBackgroundField.appendChild(modalCardWindow);

    //кнопка закрытия модального окна    
    let closeButton = document.createElement('div');
    closeButton.classList.add('closeButton');
    let closeStick1 = document.createElement('div');
    closeStick1.classList.add('closeStick');
    let closeStick2 = document.createElement('div');
    closeStick2.classList.add('closeStick');
    closeStick2.classList.add('rotated');
    let sticksContainer = document.createElement('div');
    sticksContainer.classList.add('sticksContainer');
    closeButton.appendChild(sticksContainer);
    sticksContainer.appendChild(closeStick1);
    sticksContainer.appendChild(closeStick2);
    modalCardWindow.appendChild(closeButton);
    
    closeButton.addEventListener('click',function(){
        let parentForClose = modalCardWindow.parentNode; 
        parentForClose.parentNode.removeChild(parentForClose);
    })      
    
    //слайдер для изображений(картинок) товара
    let goodPhotoSliderContainer = document.createElement('div');
    goodPhotoSliderContainer.classList.add('goodPhotoSliderContainer');
    goodPhotoSliderContainer.style.backgroundImage = props.pictureURL;
    
    return cardBackgroundField;

}