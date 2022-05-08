
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
    
    //слайдер для изображений(картинок) товара в карточке
    let goodPhotoSliderContainer = document.createElement('div');
    goodPhotoSliderContainer.classList.add('goodPhotoSliderContainer');
    let goodPhotoSlider = document.createElement('div');
    goodPhotoSlider.classList.add('goodPhotoSlider');
    goodPhotoSliderContainer.appendChild(goodPhotoSlider);

    



    for(let i=0; i<props.pictureURL.length; i++){
        let itemImageDiv = document.createElement('div');
        itemImageDiv.classList.add('itemImageDiv');
        itemImageDiv.style.backgroundImage = `url(${props.pictureURL[i]})`;
        goodPhotoSlider.appendChild(itemImageDiv); 
    }
    //создание переключателей изображений в карточке товара
    let switcherCounter = 0;
    let switchButtonDivPrevious = document.createElement('div');
    let switchButtonDivNext = document.createElement('div');
    switchButtonDivPrevious.classList.add('switchButton');
    switchButtonDivNext.classList.add('switchButton');
    switchButtonDivNext.classList.add('next');

    goodPhotoSliderContainer.appendChild(switchButtonDivNext);
    switchButtonDivNext.innerHTML = '>';
    //обработка переключения вперед
    switchButtonDivNext.addEventListener('click',function(){
        if(switcherCounter<props.pictureURL.length-1){
            switcherCounter++;
            
        } else {
            switcherCounter = 0
        }
        goodPhotoSlider.style.transform = `translateX(-${switcherCounter}00%)`;
    })
    switchButtonDivPrevious.innerHTML = '<';
    // обработка переключения назад
    switchButtonDivPrevious.addEventListener('click',function(){
        if(switcherCounter>0){
            switcherCounter--;
            
        } else {
            switcherCounter = props.pictureURL.length-1
        }
        goodPhotoSlider.style.transform = `translateX(-${switcherCounter}00%)`;
    })



    goodPhotoSliderContainer.appendChild(switchButtonDivPrevious);
    modalCardWindow.appendChild(goodPhotoSliderContainer);
    // создание информационного блоока в карточке товара
    let infoBlockContainer = document.createElement('div');
    infoBlockContainer.classList.add('infoBlockContainer');

    //цена товара внутри карточки
    let infoBlockPriceDiv = document.createElement('div');
    infoBlockPriceDiv.classList.add('infoBlockContainer__priceDiv');
    let cardItemPrice = document.createElement('p');
    cardItemPrice.innerHTML = `Цена: ${props.price} рублей`;

    infoBlockPriceDiv.appendChild(cardItemPrice);
    infoBlockContainer.appendChild(infoBlockPriceDiv);
    //родительский блок дополнительной информации(состав, материалы, наличие) и блок корзина и как заказать
    let infoBlockInfoCartContainer  = document.createElement('div');
    infoBlockInfoCartContainer.classList.add('infoBlockInfoCartContainer');
    infoBlockContainer.appendChild(infoBlockInfoCartContainer);
    //блок дополнительной информации(состав, материалы, наличие)
    let infoBlockAdditionalInfo  = document.createElement('div');
    infoBlockAdditionalInfo.classList.add('infoBlockAdditionalInfo');
    infoBlockInfoCartContainer.appendChild(infoBlockAdditionalInfo);
    
    let materialInfoP = document.createElement('p');
    materialInfoP.innerHTML = `${props.material}`;

    let consistsInfoP = document.createElement('p');
    consistsInfoP.innerHTML = `${props.consists}`;

    //блок добавления в корзину
    let cartParentContainer = document.createElement('div');
    cartParentContainer.classList.add('cartParentContainer');
    infoBlockInfoCartContainer.appendChild(cartParentContainer);

    /* let howToOrder = document.createElement('p');
    howToOrder.classList.add('howToOrder');
    howToOrder.innerHTML = 'Как заказать?';
    howToOrder.dataTitle = "Добавьте товар в корзину и перейдите в неё";
    cartParentContainer.appendChild(howToOrder); */
    
    let itemCardCartButton = document.createElement('div');
    itemCardCartButton.classList.add('itemCardCartButton');
    let toCartP = document.createElement('p');
    toCartP.innerHTML = 'В корзину';
    itemCardCartButton.appendChild(toCartP);
    cartParentContainer.appendChild(itemCardCartButton);

    
      if(Object.keys(localStorage).includes(`ekors${props.id}`))
      {
      toCartP.innerHTML = 'В корзине';
      itemCardCartButton.classList.add('inCart');
      }

    //функция добавления в корзину

    itemCardCartButton.addEventListener('click', function(){
        
        localStorage[`ekors${props.id}`] = JSON.stringify(props);
        toCartP.innerHTML = 'В корзине';
        itemCardCartButton.classList.add('inCart');
    })


    let stockInfoP = document.createElement('p');
    if(props['наличие']===0){
        stockInfoP.innerHTML = `под заказ`;
    }else{
        stockInfoP.innerHTML = `В наличии ${props['наличие']} шт.`;
    }
    
    infoBlockAdditionalInfo.appendChild(materialInfoP);
    infoBlockAdditionalInfo.appendChild(consistsInfoP);
    infoBlockAdditionalInfo.appendChild(stockInfoP);
    



    modalCardWindow.appendChild(infoBlockContainer);

    return cardBackgroundField;

}