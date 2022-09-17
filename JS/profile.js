// get data from local storage
let email =localStorage.getItem('email');
let profileImgUrl =JSON.parse( localStorage.getItem('ProfileImgUrl'));



//variables
let  myProducts = products.filter(item => item.isMe === 'y');

let profilePic =  document.querySelector('.profile-pic');
let nameDom = document.getElementById('username');
let EmailDom = document.getElementById('email');
let productlengthDom = document.querySelector('#productlength > span');
let productlength1 = document.querySelector('#productlength ');
let myProd = document.querySelector('.myproducts')

//name & email:
nameDom.innerHTML = username;
EmailDom.innerHTML = email;
//profile picture
console.log(profileImgUrl)
    profilePic.src = profileImgUrl;

    //product length

if(myProducts.length !=  0){
productlengthDom.innerHTML = '&nbsp;&nbsp; '+ myProducts.length;}
else{
    productlength1.remove();
}


//draw my products
let drawCartProductsUI;
drawCartProductsUI = function(products = []) {
    let productsUI = products.map((item) => {
        return `
        <div class="product-item" style = "border: ${item.isMe=='y' ? "2px solid gray": "0px"}; margin-top:10px; display:flex; ">
        <img src="${item.imgUrl}" alt="image"
        style="border-radius:10%;">
        <div class="product-item-desc" style=" margin-left:50px;">
        <a onclick="saveItemData(${item.id})">${item.title}</a>
        <p style=" margin:10px 0 ; ">${item.description}</p>
        <span>${item.size}</span>
        <br>
        </div> <!-- ./product-item-desc -->
        <div class="product-item-actions" style="margin:80px 0 0 100px;">
        ${item.isMe ==='y' && "<button class='edit' onclick='getEditProduct("+item.id+")'><i class='fa fa-edit fa-4x' style='color: rgba(0,0,0,0.45);'></i></button>"} 
        
        </div>
        </div>
        
        `
    })
    myProd.innerHTML =productsUI.join("");
};



drawCartProductsUI(myProducts);      