let noproducts = document.querySelector('.noproducts')
let productsUI ;
let productsInCart =JSON.parse(localStorage.getItem(("products")));


//display products


//functions 

let drawCartProductsUI;
drawCartProductsUI = function(products = []) {
    let productsUI = products.map((item) => {
        return `
        <div class="product-item" style = "border: ${item.isMe=='y' ? "2px solid gray": "0px"};">
        <img src="${item.imgUrl}" alt="image">
        <div class="product-item-desc">
        <a onclick="saveItemData(${item.id})">${item.title}</a>
        <p>${item.description}</p>
        <span>${item.size}</span>
        <br>
        </div> <!-- ./product-item-desc -->
        <div class="product-item-actions">
        <button class="add-to-cart" onclick="removeFromCart(${item.id})">remove rom cart</button>
        
        </div>
        </div>
        
        `
    })
    productsDom.innerHTML =productsUI.join("");
}

    drawCartProductsUI(JSON.parse(localStorage.getItem(("productsInCart"))));


function removeFromCart(id){
    let productsInCart =localStorage.getItem('productsInCart');
    if(productsInCart) {
        let items = JSON.parse(productsInCart);
        let filtredItems = items.filter((item)=>item.id !==id);
    console.log(filtredItems)
    localStorage.setItem('productsInCart',JSON.stringify(filtredItems));
    drawCartProductsUI(filtredItems);
}
   
}

