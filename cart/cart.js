
let globalCartObject = {};
let whatToSend = 0;

            

function cartBuilderFunction(){
    let cartEmpty = true;
    spaContainer.innerHTML = '';
    let cartMainContainer = document.createElement('form');
    cartMainContainer.classList.add('cartMainContainer');
    cartMainContainer.action = '../mail.php';
    cartMainContainer.method = 'POST';

    
    function emptyCartFunction (){
        let emptyCartDiv = document.createElement('div');
        emptyCartDiv.classList.add('emptyCartDiv');
        cartMainContainer.appendChild(emptyCartDiv);
        let emptyCartP = document.createElement('p');
        emptyCartP.classList.add('emptyCartP');
        emptyCartDiv.appendChild(emptyCartP);
        emptyCartP.innerHTML = `Пока здесь пусто :(`;
    }

    spaContainer.appendChild(cartMainContainer);
    if(Object.keys(localStorage).length===0){
        //если пустая корзина
        
        emptyCartFunction();
    
        
        
    } else {
        
        for (let i=0; i<Object.keys(localStorage).length; i++){
            if (Object.keys(localStorage)[i].indexOf('ekors')===0){
                cartEmpty = false;
            } 
        }
        
        //если в корзине что-то есть строится содержимое

        //построение блока-инструкции для измерения головы и дополнительной информации
        if (cartEmpty===true){
            emptyCartFunction();
        } else{
        
        
                let instructionsContainer = document.createElement('div'); 
                instructionsContainer.classList.add('instructionsContainer');
                cartMainContainer.appendChild(instructionsContainer);


                let instructionsStartP = document.createElement('p');
                instructionsStartP.classList.add('instructionsP');
                instructionsContainer.appendChild(instructionsStartP);
                instructionsStartP.innerHTML = cartInstructionsDetails.start;

                let instructionsHeadParametersContainer  = document.createElement('div');
                instructionsHeadParametersContainer.classList.add('instructionsHeadParametersContainer');
                instructionsContainer.appendChild(instructionsHeadParametersContainer);
                    let instructionsHeadParametersTextPart = document.createElement('div');
                    instructionsHeadParametersTextPart.classList.add('instructionsHeadParametersTextPart');
                    instructionsHeadParametersContainer.appendChild(instructionsHeadParametersTextPart);
                        for(let i=0; i<cartInstructionsDetails.headMeasures.length;i++ ){
                            let instructionsMeasurmentsP = document.createElement('p');
                            instructionsMeasurmentsP.classList.add('instructionsMeasurmentsP');
                            instructionsHeadParametersTextPart.appendChild(instructionsMeasurmentsP);
                            instructionsMeasurmentsP.innerHTML = cartInstructionsDetails.headMeasures[i];
                        }

                    let instructionsImage = document.createElement('img');
                    instructionsImage.id = 'instructionImID';
                    instructionsImage.src = cartInstructionsDetails.imageSource;
                    instructionsHeadParametersContainer.appendChild(instructionsImage);

                    cartInstructionsDetails.afterInstructions.map(el=>{
                        let cartInstructionsEndP = document.createElement('p');
                        cartInstructionsEndP.classList.add('instructionsP');
                        cartInstructionsEndP.innerHTML = el;
                        instructionsContainer.appendChild(cartInstructionsEndP);
                    })    

                // построение товаров корзины  
                
                
                globalCartObject = {};    
                

                for (let i=0; i<Object.keys(localStorage).length; i++){
                    if (Object.keys(localStorage)[i].indexOf('ekors')===0){
                    let cartItemDiv = document.createElement('div');
                    cartItemDiv.classList.add('cartItemDiv');
                    let item = JSON.parse(localStorage[Object.keys(localStorage)[i]]);


                    function whatToSendUpdate  (){
                        

                        whatToSend = JSON.stringify(globalCartObject);
                        totalOrderInformation.value = whatToSend;
                    }
                    globalCartObject[item.id] = {};
                    globalCartObject[item.id].name = item.name; 
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
                        
                        headCircumference.addEventListener('change', function(){

                            globalCartObject[item.id].diametr = headCircumference.value;
                            whatToSendUpdate();
                        })
                            


                        let headDepth = document.createElement('input');
                        headDepth.classList.add('headInput');
                        headDepth.placeholder = 'глубина шапки';
                        

                        headDepth.addEventListener('change', function(){
                            globalCartObject[item.id].glubina = headDepth.value;
                            whatToSendUpdate();
                        })

                                    
                        let quantity = document.createElement('input');
                        quantity.classList.add('headInput');
                        quantity.id = 'quantity';
                        quantity.type = 'number';
                        quantity.value = 1;
                        item.quantity = 1;
                        quantity.placeholder = 'кол-во, 1шт';
                        quantity.addEventListener( 'change', function (){
                            itemTotalPrice();
                            item.quantity = quantity.value;
                        })
                        

                        headParametrs.appendChild(headCircumference);
                        headParametrs.appendChild(headDepth);
                        headParametrs.appendChild(quantity);
                        cartItemInfoParentDiv.appendChild(headParametrs);

                        //панелька для удаления строки и ценой
                        let delAndPricePanel = document.createElement('div');
                        delAndPricePanel.classList.add('delAndPricePanel');
                        headParametrs.appendChild(delAndPricePanel);

                        let cartItemPrice = document.createElement('p');
                        function itemTotalPrice (){
                            cartItemPrice.innerHTML = `${item.price*quantity.value} руб.`;

                        }
                        itemTotalPrice();
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

                //построение формы для заказа 
                let customerInfoContainer = document.createElement('div');
                customerInfoContainer.classList.add('customerInfoContainer');
                cartMainContainer.appendChild(customerInfoContainer);

                let customerPhonenumber = document.createElement('input');
                customerPhonenumber.classList.add('customerData');
                customerInfoContainer.appendChild(customerPhonenumber);
                customerPhonenumber.placeholder = 'Ваш контактный телефон';
                customerPhonenumber.name = 'user_phone';
                customerPhonenumber.required = true;

                customerPhonenumber.addEventListener('keyup',function(){
                    let regex = /^(\+7|7|8)?[\s\-]?\(?[489][0-9]{2}\)?[\s\-]?[0-9]{3}[\s\-]?[0-9]{2}[\s\-]?[0-9]{2}$/
                    if (!regex.test(customerPhonenumber.value)){
                        customerPhonenumber.style.backgroundColor = 'rgb(224 88 88 / 26%)';
                    }else{
                        customerPhonenumber.style.backgroundColor = 'rgb(88 224 102 / 26%)';
                    };
                })

                let customerEmail = document.createElement('input');
                customerEmail.classList.add('customerData');
                customerInfoContainer.appendChild(customerEmail);
                customerEmail.placeholder = 'email для связи с Вами';
                customerEmail.required = true;
                customerEmail.name = 'user_email';

                let totalOrderInformation = document.createElement('input');
                customerInfoContainer.appendChild(totalOrderInformation);
                totalOrderInformation.type = 'hidden';
                totalOrderInformation.name = 'newOrder';
                customerInfoContainer.appendChild(totalOrderInformation);

                

                let orderConfirmationButton = document.createElement('button');
                orderConfirmationButton.classList.add('orderConfirmationButton');
                orderConfirmationButton.innerHTML ='Подтверждение заказа';
                customerInfoContainer.appendChild(orderConfirmationButton);

                orderConfirmationButton.type = 'submit';
                
                

                

                

                orderConfirmationButton.addEventListener('click', function(){
                    whatToSendUpdate();
                    

                }) 

            }



    }
}