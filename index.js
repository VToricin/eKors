const spaContainer = document.getElementById('spaContainer'); //изменяемый контейнер для контента
const body = document.querySelector('body');
const footerGategories = document.querySelector('.footer__categories');
const menuMenu = document.querySelector('.menuMenu');
const naviButton = document.querySelector('#naviButton');
const menuFirst = document.getElementById('menuFirst');
const menuSecond = document.getElementById('menuSecond');
const delivery = document.getElementById('delivery');
const homePage = document.getElementById('homePage');
const basket = document.getElementById('basket');



function toggleMenuFunction () {
    menuMenu.classList.toggle('openedMenu');
    menuFirst.classList.toggle('openedMenu');
    menuSecond.classList.toggle('openedMenu');
    menuMiddle.classList.toggle('openedMenu');
}

naviButton.addEventListener('click', function(){
     toggleMenuFunction();
    }
)

//построение футера + добавление категорий в выпадающее меню
function categoryFooterBuilder (props) {
    
    let footerCategoryName = document.createElement('p');
    footerCategoryName.innerHTML = props.name;
    footerCategoryName.classList.add('footer__text');

    footerCategoryName.addEventListener('click',()=>{
        categorySectionBuilder(props);
    })

    /* клонирование ссылок на группы товаров из подвала в выпадающее меню */
    const menuCloneUnit = footerCategoryName.cloneNode(true); 
    menuMenu.appendChild(menuCloneUnit);
    footerGategories.appendChild(footerCategoryName);
   
    menuCloneUnit.addEventListener('click',()=>{
        categorySectionBuilder(props);
        toggleMenuFunction();
    })

   

}

basket.addEventListener('click', function(){
    spaContainer.innerHTML = '';
    window.scroll(0,0);
    cartBuilderFunction();
})



Object.keys(allGoods).map(el=>{
    
    categoryFooterBuilder(allGoods[el]);
    
});

function deliverySectionBuilder () {
    spaContainer.innerHTML = '';
    window.scroll(0,0);
    let deliverySection = document.createElement('section');
    deliverySection.classList.add('delivery');
        
    Object.keys(deliveryDetails).map(el=>{
        let deliveryType = document.createElement('div');
        deliveryType.classList.add('delivery__Type');
        deliverySection.appendChild(deliveryType);
        //создание контейнера с типом доставки
        let deliveryTypeName = document.createElement('p');
        deliveryTypeName.classList.add('delivery__TypeName');
        deliveryType.appendChild(deliveryTypeName);
        deliveryTypeName.innerHTML = deliveryDetails[el].name;

        let deliveryTypeInfoContainer = document.createElement('div');

        for  (let i=0;i<deliveryDetails[el].howTo.length;i++){
            let deliveryTypeInfo = document.createElement('p');
            deliveryTypeInfo.innerHTML = deliveryDetails[el].howTo[i];
            deliveryTypeInfoContainer.appendChild(deliveryTypeInfo);
        }
        deliveryType.appendChild(deliveryTypeInfoContainer);
    })    

    spaContainer.appendChild(deliverySection);

}

delivery.addEventListener('click',function(){
    toggleMenuFunction();
    deliverySectionBuilder();

})




/* сверху постороение основных элементов страницы шапка и подвал, не меняются + функция постороения */   


function categorySectionBuilder(argu){
    spaContainer.innerHTML = '';
    window.scroll(0,0);
    let goods = document.createElement('section');
    goods.classList.add('goods');
    let goodsContainer = document.createElement('div');
    goodsContainer.classList.add('goods__container');
    goods.appendChild(goodsContainer);

    Object.keys(argu.categoryCatalog).map( el=>{
        let goodCardDiv = document.createElement('div');
        goodCardDiv.classList.add('categoryCard');
        goodsContainer.appendChild(goodCardDiv);
        let goodMainPicture = document.createElement('img');
        goodMainPicture.src = argu.categoryCatalog[el].pictureURL[0];
        let goodName = document.createElement('p');
        goodName.innerHTML = argu.categoryCatalog[el].name;
        let goodPrice = document.createElement('p');
        goodPrice.innerHTML = `${argu.categoryCatalog[el].price}руб.`;
        goodCardDiv.appendChild(goodMainPicture);
        goodCardDiv.appendChild(goodName);
        goodCardDiv.appendChild(goodPrice);

        goodCardDiv.addEventListener('click', function(){
            body.appendChild(goodCardComponent(argu.categoryCatalog[el]));
        })

    })
    
    spaContainer.appendChild(goods);

}


function categoryCardBuilder (props, parentContainer) {
    
    
    let categoryCardDiv = document.createElement('div');
    categoryCardDiv.classList.add('categoryCard');
    parentContainer.appendChild(categoryCardDiv);
    let categoryCardPicture = document.createElement('img');
    categoryCardPicture.src = props.imgURL;
    let categoryName = document.createElement('p');
    categoryName.innerHTML = props.name;
    categoryCardDiv.appendChild(categoryCardPicture);
    categoryCardDiv.appendChild(categoryName);

    categoryCardDiv.addEventListener('click',()=>{
        categorySectionBuilder(props);
    })
   
}

function workshopSectionBuilder (){
    let workshop = document.createElement('section');
    workshop.classList.add('workshop');
    let workshop__name = document.createElement('div');
    workshop__name.classList.add('workshop__name');
    workshop__name.innerHTML = 'СОБСТВЕННАЯ МАСТЕРСКАЯ';
    
    let workshopContentArray = [["./workshop/images/HusqvarnaE20.jpg", 
    "Надежное, высокоточное оборудование от ведущих производителей позволяет мне избегать брака и радовать Вас готовыми закзами в самые кратчайшие сроки."],
    ["./workshop/images/new.jpg","Лучшие безопасные материалы, веселые и нежные расцетки - все это подчернет индивидуальность и создаст безупречный комфорт для Вашего малыша."]]; 

    for (let i=0; i<workshopContentArray.length; i++) {
        let workshop__container = document.createElement('div');
        workshop__container.classList.add('workshop__container');
        if((i+1)%2==0){
            workshop__container.classList.add('secondWorkshopContainer');
        } 
        let workshop__imagesContainer = document.createElement('img');
        workshop__imagesContainer.src = workshopContentArray[i][0];
        workshop__imagesContainer.classList.add('workshop__imagesContainer');
        let workshop__imagesDescription = document.createElement('p');
        workshop__imagesDescription.classList.add('workshop__imagesDescription');
        workshop__imagesDescription.innerHTML = workshopContentArray[i][1];
        workshop__container.appendChild(workshop__imagesContainer);
        workshop__container.appendChild(workshop__imagesDescription);

        workshop.appendChild(workshop__container);

    }
    return workshop;

}



function mainPageBuilder(){
    /* постройка каталога */
    spaContainer.innerHTML = '';
    let catalog = document.createElement('section');
    catalog.classList.add('catalog');
    let pictureCatalog = document.createElement('div');
    pictureCatalog.classList.add('pictureCatalog');
    catalog.appendChild(pictureCatalog);
    spaContainer.appendChild(catalog);
    Object.keys(allGoods).map(el=>{
        categoryCardBuilder(allGoods[el], pictureCatalog);
    });        
    /* постройка описания мастерской */
    
    spaContainer.appendChild(workshopSectionBuilder());
}

mainPageBuilder();


homePage.addEventListener('click', function (){
    spaContainer.innerHTML = '';
    mainPageBuilder();
})



 


