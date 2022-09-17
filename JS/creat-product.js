//variables
let myImg = document.querySelector('#myImg');
let productName = document.querySelector('#product-name'); 
let productDesc = document.querySelector('#product-desc'); 
let productSizeSelect = document.querySelector('#product-size'); 
let createForm = document.querySelector('#create-form'); 
let ProductSizeValue;


// events
myImg.addEventListener("change",uploadImg);

productSizeSelect.addEventListener("change",getProductSizeValue);

createForm.addEventListener("submit", creatProductFun); 


//functions

function getProductSizeValue(e){
    ProductSizeValue = e.target.value;
};
function creatProductFun(e){
    e.preventDefault()
    let allProducts = JSON.parse(localStorage.getItem('products')) ||  productsDB;
    let name = productName.value;
    let desc = productDesc.value;
    if (name && desc){
    let obj ={
        id: allProducts? allProducts.length + 1 : 1,
        title:`${name}`,
        size:ProductSizeValue,
        description:`${desc}`,
        imgUrl:productImg,
        quantity:1,
        isMe:'y',
        liked:false
    };
    let newProd = [...allProducts , obj]
    localStorage.setItem('products' , JSON.stringify(newProd));
    productName.value ='';
    productDesc.value ="";
    productSizeSelect.value ="";
    window.setTimeout(() => {
        window.location = "index.html";
    }, 1000);
    }
    else {
        alert('enter data please ')
    }
}


//upload image
let productImg;
function uploadImg(e) {
    let file=e.target.files[0];
    let types =["image/jpeg" , "image/png"];   
    if(types.indexOf(file.type)==-1){
        alert('image type not suported');
        return
    }
    if(file.size >2 *1024 * 1024){
        alert('image size is superior than 2MB')
        return
    }

      productImg = URL.createObjectURL(file)
 console.log(productImg)
 getImagebase64(file)


}
//blb link is not redable 
//image base 64 
function getImagebase64(file){
    let reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload= function(){
        productImg = reader.result ; 
        console.log(productImg)
    }
    reader.onerror = function(){
        alert('ERROR !!')
    }
    

}
