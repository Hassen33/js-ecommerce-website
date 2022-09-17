//localStorage
let products =JSON.parse(localStorage.getItem("products")) || productsDB;
//variables
let x=0;
let counter = 0;
let productsDom = document.querySelector('.products');
let cartProductDom = document.querySelector('.carts-products  div');
let badgeDom = document.querySelector('nav #user_info li .badge');
let cart = document.querySelector('#user_info li i.fa')
let carts_products = document.querySelector('.carts-products');


//DRAW PRODUCTS inside cart 
let addedItem = localStorage.getItem('productsInCart') ? JSON.parse(localStorage.getItem('productsInCart')) : [] ;

if(addedItem){ 
    addedItem.map((item) =>{ cartProductDom.innerHTML += `<p>${item.title} ${item.quantity} </p>`});
    badgeDom.style='display: inline-flex;';
    counter = quantityPurshased(addedItem)
    badgeDom.innerHTML = counter;

}
//open cart menu
cart.addEventListener('click',() => {
    if (addedItem.length){
    x += 1;
    if ( x%2 !=0) {
        carts_products.style='display:block;'
    }
    else {
    carts_products.style='display:none;'
}
}
else {
carts_products.style='display:none;'
}
})


//function 
function quantityPurshased(array){
    return array.reduce((result,item) => {
        return result + item.quantity ; 
    }, 0)
    
}


