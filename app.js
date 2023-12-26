const wrapper = document.querySelector(".sliderWrapper");
const menuItems = document.querySelectorAll(".menuItem");

const products = [
    {
        id: 1,
        title: "AIR FORCE",
        price: 1599,
        colors: [
            {
                code: "black",
                img: "./img/air.png",
            },
            {
                code: "darkblue",
                img: "./img/air2.png",
            },
        ],
    },
    {
        id: 2,
        title: "AIR JORDAN",
        price: 1899,
        colors: [
            {
                code: "lightgray",
                img: "./img/jordan.png",
            },
            {
                code: "green",
                img: "./img/jordan2.png",
            },
        ],
    },
    {
        id: 3,
        title: "BLAZER",
        price: 1299,
        colors: [
            {
                code: "lightgray",
                img: "./img/blazer.png",
            },
            {
                code: "green",
                img: "./img/blazer2.png",
            },
        ],
    },
];

let chosenProduct = products[0];

const currentProductImg = document.querySelector(".productImg");
const currentProductTitle = document.querySelector(".productTitle");
const currentProductPrice = document.querySelector(".productPrice");
const currentProductColor = document.querySelectorAll(".color");
const currentProductSize = document.querySelectorAll(".size");

menuItems.forEach((item, index) => {
    item.addEventListener("click", () => {
        //change the current slide
        wrapper.style.transition = "1s";
        wrapper.style.transform = 'translateX(calc(-100 * ' + index + 'vw))';
    
        //change the product
        chosenProduct = products[index];

        //change text & image of current product
        currentProductTitle.textContent = chosenProduct.title;
        currentProductPrice.textContent = "R" + chosenProduct.price;
        currentProductImg.src = chosenProduct.colors[0].img;

        //change sneaker color palette
        currentProductColor.forEach((color, index) => {
            color.style.backgroundColor = chosenProduct.colors[index].code;
        }) 
    });
});


//change sneaker color on click
currentProductColor.forEach((color, index) => {
    color.addEventListener("click", () => {
        currentProductImg.src = chosenProduct.colors[index].img;
    });
});

//select size
currentProductSize.forEach((size, index) => {
    size.addEventListener("click", () => {
        currentProductSize.forEach((size) => {
            size.style.backgroundColor = "white";
            size.style.color = "black"; 
        });
        size.style.backgroundColor = "black";
        size.style.color = "white";
    });
});


//display payment form
const productButton = document.querySelector('.productButton');
const paymentForm = document.querySelector('.payment');
const close = document.querySelector('.close');

productButton.addEventListener("click", () => {
    paymentForm.style.display = "flex";
});

close.addEventListener("click", () => {
    paymentForm.style.display = "none";
});