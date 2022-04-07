
let goodsContainer = document.querySelector('.goods__container');
const pictureCatalog = document.querySelector('.pictureCatalog');
const footerGategories = document.querySelector('.footer__categories');
const menuMenu = document.querySelector('.menuMenu');
const naviButton = document.querySelector('#naviButton');
const menuFirst = document.getElementById('menuFirst');
const menuSecond = document.getElementById('menuSecond');






function categoryContentBuilder (props) {
    
    let goodCardDiv = document.createElement('div');
    goodCardDiv.classList.add('categoryCard');
    goodsContainer.appendChild(goodCardDiv);
    let goodMainPicture = document.createElement('img');
    goodMainPicture.src = props.pictureURL;
    let goodName = document.createElement('p');
    goodName.innerHTML = props.name;
    let goodPrice = document.createElement('p');
    goodPrice.innerHTML = `${props.price}руб.`;
    goodCardDiv.appendChild(goodMainPicture);
    goodCardDiv.appendChild(goodName);
    goodCardDiv.appendChild(goodPrice);

}

Object.keys(allGoods['Шапки с отворотом'].categoryCatalog).map(el=>{
    categoryContentBuilder(allGoods['Шапки с отворотом'].categoryCatalog[el]);
})








function catgoryCardBuilder (props) {
    let linkToCategory = document.createElement('a');
    linkToCategory.href = props['url'];
    pictureCatalog.appendChild(linkToCategory);
    let categoryCardDiv = document.createElement('div');
    categoryCardDiv.classList.add('categoryCard');
    linkToCategory.appendChild(categoryCardDiv);
    let categoryCardPicture = document.createElement('img');
    categoryCardPicture.src = props.imgURL;
    let categoryName = document.createElement('p');
    categoryName.innerHTML = props.name;
    categoryCardDiv.appendChild(categoryCardPicture);
    categoryCardDiv.appendChild(categoryName);
    



}

function categoryFooterBuilder (props) {
    let footerCategoryHref = document.createElement('a');
    footerCategoryHref.href = props['url'];
    footerCategoryHref.classList.add('footer__href')
    let footerCategoryName = document.createElement('p');
    footerCategoryName.innerHTML = props.name;
    footerCategoryName.classList.add('footer__text');

    footerCategoryHref.appendChild(footerCategoryName);

    const menuCloneUnit = footerCategoryHref.cloneNode(true); 
    menuMenu.appendChild(menuCloneUnit);
    footerGategories.appendChild(footerCategoryHref);


    

}

Object.keys(allGoods).map(el=>{
    /* catgoryCardBuilder(allGoods[el]); */
    categoryFooterBuilder(allGoods[el]);
    
});

naviButton.addEventListener('click', function(){
    menuMenu.classList.toggle('openedMenu');
    menuFirst.classList.toggle('openedMenu');
    menuSecond.classList.toggle('openedMenu');
    menuMiddle.classList.toggle('openedMenu');
    }
)