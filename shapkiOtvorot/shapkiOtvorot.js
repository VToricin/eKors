
let goodsContainer = document.querySelector('.goods__container');
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

Object.keys(allGoods).map(el=>{
    
    categoryFooterBuilder(allGoods[el]);
});