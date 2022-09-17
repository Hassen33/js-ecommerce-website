let userInfo = document.querySelector('#user_info');
let links = document.querySelector('#links');
let Logout = document.querySelector('#Logout')

let username = localStorage.getItem("username");
links.innerHTML = `
<li><a href="login.html">Sign In</a></li>
<li><a href="register.html">Sign up</a></li>
`
if (username) {
    links.remove()
    userInfo.style ='display: flex;'
    userInfo.innerHTML = `
    <li><a href="" id="user"></a></li>
    <li><a href="favorites.html"><i class="favorite fas fa-heart "style="color:red;"></i>&nbsp; favorites </a></li>
    <li><a href="myProducts.html" id="">my products</a></li>
    <li>
    <i class="fa fa-shopping-cart" > </i> 
    <span class="badge">
    
    </span>
    <div class="carts-products">
    <div class="h"></div>
    <a href="cartproducts.html
    ">
    view all products</a>
    </div> <!-- ./carts-products -->
    </li>
    <li ><a href="#"  id="Logout" onclick="clearStorage()"><i class="fas fa-sign-out-alt" style="margin-left: 179%;
    color: #aca8a8;">logout</i></a></li>
    `
    let userDom = document.querySelector('#user');
    userDom.innerHTML =`<a href='profile.html'><i class="fas fa-user"></i>&nbsp; ${username}</a>`
}

 function clearStorage(){
    localStorage.clear()
    console.log('thte')
    setTimeout(() => {
        window.location = 'login.html'
    }, 1500);
}