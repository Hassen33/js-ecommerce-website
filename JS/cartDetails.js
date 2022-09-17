let productId =localStorage.getItem('productId');
let productDetails =products.find(item => item.id == productId )
let itemDom = document.querySelector('.item-details');

itemDom.innerHTML = `
<img src="${productDetails.imgUrl}" alt="">
            <h2>${productDetails.title}</h2>
            <span>${productDetails.description} </span>
<br>
<span> size :  ${productDetails.size} </span> <br>            
<span> Quantity : ${productDetails.quantity}<span>`