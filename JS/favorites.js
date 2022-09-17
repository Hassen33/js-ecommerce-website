let noproducts = document.querySelector('.noproducts')
let favoriteproducts =JSON.parse(localStorage.getItem("favoriteProducts"));




let drawFavoriteProductsUI;
( drawFavoriteProductsUI =  function(products = []) {
    let productsUI = products.map((item) => {
        return `
        <div class="product-item">
        <img src="${item.imgUrl}" alt="image">
        <div class="product-item-desc">
        <a onclick="saveItemData(${item.id})">${item.title}</a>
        <p>${item.description}</p>
        <span>${item.size}</span>
        </div> <!-- ./product-item-desc -->
        <div class="product-item-actions">
        <button class="add-to-cart" onclick="removeFromFavorite(${item.id})"><i class="favorite fas fa-heart-broken  fa-2x"
        style = "color: ${item.liked=="true" ? "red": ""}; margin:auto;"> </i></button>
       
        </div>
        </div>
        `
    })
    productsDom.innerHTML =productsUI.join("");
})(favoriteproducts);



//functions
let products2=[...products] ;
console.log(products2)
function removeFromFavorite(id){
    let favoriteProducts =localStorage.getItem('favoriteProducts');
    if(favoriteProducts) {
        let items = JSON.parse(favoriteProducts);
        let filtredItems = items.filter((item)=>item.id !==id);
    localStorage.setItem('favoriteProducts',JSON.stringify(filtredItems));
    drawFavoriteProductsUI(filtredItems);
}
for (let i = 0; i < products2.length; i++) {
    if(products2[i].id===id){
        products2[i].liked = "false"
    };
    
}
localStorage.setItem('products',JSON.stringify(products2))
   
}