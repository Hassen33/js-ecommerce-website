
// local storage objects
// localStorage.setItem("products", JSON.stringify(productsDB));
let productsInCart =JSON.parse(localStorage.getItem('productsInCart'));
favoriteProducts =JSON.parse(localStorage.getItem('favoriteProducts')); 

//save id in data base
function saveItemData(id){
    localStorage.setItem("productId" , id);
    window.location = "cartDetails.html";
}


//display products
//drawProductsUI
let drawCartProductsUI;
(drawCartProductsUI = function(products = []) {
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
        <button class="add-to-cart" onclick="addedToCart(${item.id})">
        <i class="fas fa-cart-plus fa-2x" ></i></button>
        ${item.isMe ==='y' && "<button class='edit' onclick='getEditProduct("+item.id+")'><i class='fa fa-edit fa-2x' ></i></button>"} 
        <i class="favorite fas fa-heart "
        style = "color: ${item.liked=="true" ? "red": ""};"
        onclick="addedToFavorite(${item.id})"  ></i>
        </div>
        </div>
        
        `
    })
    productsDom.innerHTML =productsUI.join("");
})(products)
//add to cart
function addedToCart(id) {
    if (localStorage.getItem("username")) {
        let choosenItem = products.find((item) => item.id===id);
        
        let hasRepetedItem = addedItem.some(function(item){
            return item.id ==choosenItem.id
        })
        
        if (hasRepetedItem == true){
            let choosenItemIndex = addedItem.findIndex(item=>{ return item.id=== choosenItem.id;})
            addedItem[choosenItemIndex].quantity += 1;
            
            // second methode
            // addedItem = addedItem.map((p)=>{
                //     if(p.id === choosenItem.id){
                    //         p.quantity+= 1 ;
                    //         return p
                    //     }
                    // })
                    
                }
                
                
                else {
                    addedItem.push(choosenItem);
                }
                
                // save Data
                localStorage.setItem ('productsInCart' , JSON.stringify(addedItem));
                
                //    add item inside the cart icon
                cartProductDom.innerHTML = '';
                addedItem.forEach((item) =>{
                    cartProductDom.innerHTML += `<p>${item.title} ${item.quantity}
                    </p> <hr>`;});
                    badgeDom.style = " display:inline-flex;"
                    counter = quantityPurshased(addedItem)
                    badgeDom.innerHTML =counter;
                }
                else {
                    window.location='login.html';
                    
                }
            }
            //add to favorite 
            
            let newProducts = products;
            function addedToFavorite(id) {
                let favorite =localStorage.getItem('favoriteProducts') ? favoriteProducts :[];
        if (localStorage.getItem("username")) {
            let choosenItem = products.find((item) => item.id===id);
            
            if (choosenItem.liked == false ){
                choosenItem.liked = "true" ;
                favorite.push(choosenItem);
                
                
                
                
            }
            else {
                choosenItem.liked = false ;
                let choosenItemIndex = favorite.findIndex(item=>{ return item.id=== choosenItem.id;})
                
                favorite.splice(choosenItemIndex , 1 )
                
                
                
            }
            localStorage.setItem ('favoriteProducts' , JSON.stringify(favorite));
            localStorage.setItem ('products' , JSON.stringify(newProducts));
            drawCartProductsUI(products)
            
        }
    }
    // redHeart
    favorite=favoriteProducts;
    if (localStorage.getItem('favoriteProducts')){
        for (let n=0; n<products.length; n++){
            for (let m=0; m<favorite.length; m++){
                
                if(newProducts[n].id ==favorite[m].id){
                    newProducts[n].liked = "true"
                    
                    
                    
                    localStorage.setItem ('products' , JSON.stringify(newProducts));
                }
            }}
        }
        drawCartProductsUI(products)
        
        
        
        
        //search 
        let input =document.getElementById("search");
        let arr =[];
        input.addEventListener('keyup', function(e) {
            search(e.target.value , products);
            
            
            if (e.target.value.trim() === ""){
                drawCartProductsUI(JSON.parse(localStorage.getItem("products")
                
                ))
            }
        });
        
        
        //filter by size
let selectSize = document.querySelector('.products-filter #size-filter');
selectSize.addEventListener("change",filterBySize);










//functions

//filter by size function
function filterBySize(e){
    let sizeValue;
    let sizeFiltredProducts = [];
    sizeValue = e.target.value ; 
    console.log(sizeValue)
    
    sizeFiltredProducts = products.filter(item=>{ return item.size===sizeValue})
    drawCartProductsUI(sizeFiltredProducts)
    if(sizeValue=="all"){
        console.log('t')
        sizeFiltredProducts = products;
        drawCartProductsUI(sizeFiltredProducts);
    }
}


//search function 
function search(searchedItem , myArray){
    arr = myArray.filter(item =>
        item.title.toLowerCase().trim().indexOf(searchedItem.toLowerCase().trim()) !==-1 
        );
        
        drawCartProductsUI(arr)
    };
    //remove from array function
    function removeElementFromArray(array,element){
        return arr.filter(function(item){return item != element})
    }
    //quantity purshased function
    function quantityPurshased(array){
        return array.reduce((result,item) => {
            return result + item.quantity ; 
    }, 0)
    
}

//edit product
function getEditProduct(id){
    localStorage.setItem("editProductId" , id);
    window.location = "editProduct.html";
}

