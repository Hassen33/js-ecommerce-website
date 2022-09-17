// // //variables
// //localStorage
let profileImgUrl =JSON.parse( localStorage.getItem('ProfileImgUrl'));
let email = localStorage.getItem('email')
// let editProductId =JSON.parse(localStorage.getItem('editProductId'));
//inputs
let imgInput = document.querySelector('#myImg');
let nameInput = document.querySelector('#product-name'); 
let emailInput = document.querySelector('#product-desc'); 
let createForm = document.querySelector('#create-form'); 
// initially
    nameInput.value = username ; 
    emailInput.value =email;
    let productImg;

    // // events
    imgInput.addEventListener("change",uploadImg);
    
    createForm.addEventListener("submit", creatProductFun); 

    
    // //functions
    let newName ;
    let newEmail ;
    
    function creatProductFun(e){
        e.preventDefault()
        newName = nameInput.value ;
        // save th new name in the storage
        localStorage.setItem('username' , newName);       // save th new email in the storage
        newEmail =  emailInput.value  ;
        localStorage.setItem('email' , newEmail)
        // save the imgUrl
        if(imgInput.value==''){
        localStorage.setItem('ProfileImgUrl' , JSON.stringify( profileImgUrl));}
        if(imgInput.value!==''){
        localStorage.setItem('ProfileImgUrl' , JSON.stringify( productImg));}
        
        setTimeout(() => {
        window.location='profile.html'
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
