// // //variables
// //localStorage
let editProductId =JSON.parse(localStorage.getItem('editProductId'));
//inputs
let myImg = document.querySelector('#myImg');
let productName = document.querySelector('#product-name'); 
let productDesc = document.querySelector('#product-desc'); 
let productSizeSelect = document.querySelector('#product-size'); 
let createForm = document.querySelector('#create-form'); 

let productToEdit = products.find(item => item.id=== editProductId
    );
    productName.value =productToEdit.title ; 
    productDesc.value =productToEdit.description ;
    productSizeSelect.value =productToEdit.size;
    let productImg;
    productImg = productToEdit.imgUrl;
let ProductSizeValue;


// // events
myImg.addEventListener("change",uploadImg);

productSizeSelect.addEventListener("change",getProductSizeValue);

createForm.addEventListener("submit", creatProductFun); 


// //functions

function getProductSizeValue(e){
    ProductSizeValue = e.target.value;

};
console.log(products)
function creatProductFun(e){
    e.preventDefault()
    productToEdit.title = productName.value ;
    productToEdit.description =    productDesc.value  ;
    productToEdit.size =    productSizeSelect.value ; 
    console.log(productToEdit)
    productToEdit.imgUrl = productImg ;
    console.log(productToEdit)
    console.log(products)

    
    localStorage.setItem('products' , JSON.stringify(products));
    setTimeout(() => {
        window.location='index.html'
    }, 500);
}

//upload image
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
    }
    reader.onerror = function(){
        alert('ERROR !!')
    }
    

}
