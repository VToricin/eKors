

function cartBuilderFunction(){
    spaContainer.innerHTML = '';
    let cartMainContainer = document.createElement('section');
    cartMainContainer.classList.add('cartMainContainer');
    
    spaContainer.appendChild(cartMainContainer);
    if(Object.keys(localStorage).length===0){
        //если пустая корзина
        let emptyCartDiv = document.createElement('div');
        emptyCartDiv.classList.add('emptyCartDiv');
        cartMainContainer.appendChild(emptyCartDiv);
        let emptyCartP = document.createElement('p');
        emptyCartP.classList.add('emptyCartP');
        emptyCartDiv.appendChild(emptyCartP);
        emptyCartP.innerHTML = `Пока здесь пусто :(`;
    } else {
        //если в корзине что-то есть строится содержимое

        let instructionsContainer = document.createElement('div'); 
        instructionsContainer.classList.add('div');

        let instructionsStartP = document.createElement('p');
        instructionsStartP.classList.add('instructionsP');

        let instructionsHeadParametersContainer  = document.createElement('div');
        instructionsHeadParametersContainer.classList.add('instructionsHeadParametersContainer');
            let instructionsHeadParametersTextPart = document.createElement('div');


        for (let i=0; i<Object.keys(localStorage).length; i++){
            if (Object.keys(localStorage)[i].indexOf('ekors')===0){
            let cartItemDiv = document.createElement('div');
            cartItemDiv.classList.add('cartItemDiv');
            let item = JSON.parse(localStorage[Object.keys(localStorage)[i]]);
            cartMainContainer.appendChild(cartItemDiv);
                let cartItemName = document.createElement('p');
                cartItemName.classList.add('cartItemName');
                cartItemName.innerHTML = item.name;
                cartItemDiv.appendChild(cartItemName);


                let cartItemInfoParentDiv = document.createElement('div');
                cartItemInfoParentDiv.classList.add('cartItemInfoParentDiv');
                cartItemDiv.appendChild(cartItemInfoParentDiv);
                //picture
                let cartItemImage = document.createElement('img');
                cartItemImage.src = item.pictureURL[0];
                cartItemImage.classList.add('cartItemImage');
                cartItemInfoParentDiv.appendChild(cartItemImage);
                //панелька для ввода параметров головы
                let headParametrs = document.createElement('div');
                headParametrs.classList.add('headParametrs');
                let headCircumference = document.createElement('input');
                headCircumference.placeholder = 'окружность головы'
                headCircumference.classList.add('headInput');
                let headDepth = document.createElement('input');
                headDepth.classList.add('headInput');
                headDepth.placeholder = 'глубина шапки';
                let quantity = document.createElement('input');
                quantity.classList.add('headInput');
                quantity.id = 'quantity';
                quantity.placeholder = 'кол-во';
                headParametrs.appendChild(headCircumference);
                headParametrs.appendChild(headDepth);
                headParametrs.appendChild(quantity);
                cartItemInfoParentDiv.appendChild(headParametrs);

                //панелька для удаления строки и ценой
                let delAndPricePanel = document.createElement('div');
                delAndPricePanel.classList.add('delAndPricePanel');
                headParametrs.appendChild(delAndPricePanel);

                let cartItemPrice = document.createElement('p');
                cartItemPrice.innerHTML = `${item.price} руб.`;
                delAndPricePanel.appendChild(cartItemPrice);
                //кнопка удаления позиции из корзины
                let cartItemDel = document.createElement('div');
                
                cartItemDel.classList.add('cartItemDel');
                delAndPricePanel.appendChild(cartItemDel);

                let XcomponentLeft =  document.createElement('div');
                let XcomponentRight = document.createElement('div');
                XcomponentLeft.classList.add('Xcomponent');
                XcomponentLeft.style.transform = `rotate(45deg)`;
                
                XcomponentRight.classList.add('Xcomponent');
                XcomponentRight.style.transform = `rotate(-45deg)`;

                cartItemDel.appendChild(XcomponentLeft);
                cartItemDel.appendChild(XcomponentRight);

                cartItemDel.addEventListener('click',function(){
                    localStorage.removeItem(`ekors${item.id}`);
                    cartItemDiv.parentNode.removeChild(cartItemDiv);
                    cartBuilderFunction();        
                })

                //
                
                
            }
        }
    }
}