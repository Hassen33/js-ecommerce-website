
let  myProducts = products.filter(item => item.isMe === 'y');




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
        ${item.isMe ==='y' && "<button class='edit' onclick='getEditProduct("+item.id+")'><i class='fa fa-edit fa-2x' ></i></button>"} 
        <button class="add-to-cart" onclick="removeFromProducts(${item.id})" style='background-color:rgba(0,0,0,0.567); border-radius:10%; margin-top:10px; color:white' >remove rom cart</button>
        
        </div>
        </div>
        
        `
    })
    productsDom.innerHTML =productsUI.join("");
};


drawCartProductsUI(myProducts);

//edit product
function getEditProduct(id){
    localStorage.setItem("editProductId" , id);
    window.location = "editProduct.html";
}

//remove from products
function removeFromProducts(id){
    let filtredItems = products.filter((item)=>item.id !==id);
    localStorage.setItem('products',JSON.stringify(filtredItems));
    console.log(products)
    for (let index = 0; index < myProducts.length; index++) {
        if(myProducts[index].id==id)
        myProducts.splice(index,1)
        
    }
    drawCartProductsUI(myProducts);
}