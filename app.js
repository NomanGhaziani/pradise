let reviewCard = document.querySelectorAll(".reviewCard");
let foodCard = document.write(".foodCard");

let count = 0;

reviewCard.forEach(function (card, index) {
    card.style.left = `${index * 100}%`
})

function myFun() {
    reviewCard.forEach(function (curCard) {
        curCard.style.transform = `translateX(-${count * 100}%)`
    })
}

setInterval(function () {
    count++;
    if (count == reviewCard.length) {
        count = 0;
    }
    myFun();
}, 3000)

var Biryani=["single","duble",];
document.write(Biryani[0]);




// foodCard.forEach(function (food) {
//     food.addEventListener("click"), function () {
//         console.log(food);
//     }})
        let div = document.createElement("div");
        div.classList.add("detailCard");
        div.innerHTML = `
        <i id="icon" class="fa-solid fa-xmark"></i>
        <img src=${food.firstElementChild.src} alt="">
        <p>paradies biryani</p> <br/>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae pariatur possimus at reprehenderit, accusantium unde est nisi dolore laudantium repudiandae magni sed.</p>
        `

        document.querySelector("body").appendChild(div);
        document.getElementById("icon").addEventListener("click", function () {
        div.remove()
        })
    
var addToCartBtn = document.getElementById("addToCartBtn");


addToCartBtn.addEventListener("click", function addToCart() {

        alert("Item added to cart!");
    }

);


// Wait for the DOM content to be fully loaded
document.addEventListener("DOMContentLoaded", function() {
    // Get the button element
    var addToCartBtn = document.getElementById("addToCartBtn");

    // Add event listener to the button
    addToCartBtn.addEventListener("click", function() {
        // Here you can add the logic to add the item to the cart
        // For example, you can make an AJAX request to add the item to the cart on the server
        addToCart();
    });

    // Function to add item to the cart (dummy function)
    function addToCart() {
        alert("Item added to cart!");
    }
});

