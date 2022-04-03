
const pictureCatalog = document.querySelector('.pictureCatalog');
const footerGategories = document.querySelector('.footer__categories');






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
    footerGategories.appendChild(footerCategoryHref);

}

Object.keys(allGoods).map(el=>{
    catgoryCardBuilder(allGoods[el]);
    categoryFooterBuilder(allGoods[el]);
});


 


