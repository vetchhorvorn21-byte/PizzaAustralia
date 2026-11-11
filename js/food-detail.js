const productId = Number(
    localStorage.getItem("productId")
);

const product = products.find(
    item => item.id === productId
);

const foodImage =
document.getElementById("foodImage");

const foodName =
document.getElementById("foodName");

const foodPrice =
document.getElementById("foodPrice");

const sizeSection =
document.getElementById("sizeSection");

const extraSection =
document.getElementById("extraSection");

const totalPrice =
document.getElementById("totalPrice");

const qtyDisplay =
document.getElementById("qty");

let quantity = 1;

let basePrice = product.price;

foodImage.src =
"../images/" + product.image;
foodName.textContent =
product.name;

foodPrice.textContent =
"$" + product.price.toFixed(2);

totalPrice.textContent =
"$" + product.price.toFixed(2);
if(product.category === "pizza"){

    sizeSection.innerHTML = `
        <h3>Choose Size</h3>

        <label>
            <input
            type="radio"
            name="size"
            value="${product.price}"
            checked>

            Small
        </label>

        <label>
            <input
            type="radio"
            name="size"
            value="${(product.price + 3)}">

            Medium
        </label>

        <label>
            <input
            type="radio"
            name="size"
            value="${(product.price + 6)}">

            Large
        </label>
    `;

}
if(product.category === "drink"){

    sizeSection.innerHTML = `
        <h3>Cup Size</h3>

        <label>
            <input
            type="radio"
            name="size"
            value="${product.price}"
            checked>

            Small
        </label>

        <label>
            <input
            type="radio"
            name="size"
            value="${(product.price + 1)}">

            Medium
        </label>

        <label>
            <input
            type="radio"
            name="size"
            value="${(product.price + 2)}">

            Large
        </label>
    `;

}
if(product.category === "drink"){

    extraSection.innerHTML = `

    <h3>Sugar Level</h3>

    <label>
        <input
        type="radio"
        name="sugar"
        value="0%">
        No Sugar
    </label>

    <label>
        <input
        type="radio"
        name="sugar"
        value="25%">
        25%
    </label>

    <label>
        <input
        type="radio"
        name="sugar"
        value="50%"
        checked>
        50%
    </label>

    <label>
        <input
        type="radio"
        name="sugar"
        value="75%">
        75%
    </label>

    <label>
        <input
        type="radio"
        name="sugar"
        value="100%">
        100%
    </label>

    `;

}
else{

    extraSection.innerHTML = `

    <h3>Extra Ingredients</h3>

    <label>
        <input
        type="checkbox"
        class="extra"
        value="2">
        Extra Cheese (+$2)
    </label>

    <label>
        <input
        type="checkbox"
        class="extra"
        value="3">
        Bacon (+$3)
    </label>

    <label>
        <input
        type="checkbox"
        class="extra"
        value="1">
        Mushroom (+$1)
    </label>

    `;

}
function calculateTotal(){

    let currentPrice =
    product.price;

    const selectedSize =
    document.querySelector(
        'input[name="size"]:checked'
    );

    if(selectedSize){

        currentPrice =
        Number(selectedSize.value);

    }

    let extras = 0;

    document
    .querySelectorAll(
        ".extra:checked"
    )
    .forEach(item=>{

        extras +=
        Number(item.value);

    });

    const total =
    (currentPrice + extras)
    * quantity;

    totalPrice.textContent =
    "$" + total.toFixed(2);

}
document
.getElementById("plusBtn")
.addEventListener("click", ()=>{

    quantity++;

    qtyDisplay.textContent =
    quantity;

    calculateTotal();

});

document
.getElementById("minusBtn")
.addEventListener("click", ()=>{

    if(quantity > 1){

        quantity--;

        qtyDisplay.textContent =
        quantity;

        calculateTotal();

    }

});
document.addEventListener(
"change",
function(e){

    if(
        e.target.name === "size" ||
        e.target.classList.contains("extra")
    ){

        calculateTotal();

    }

});
document
.getElementById("addCartBtn")
.addEventListener(
"click",
function(){

    let extras = [];

    document
    .querySelectorAll(
        ".extra:checked"
    )
    .forEach(item=>{

        extras.push(
            item.parentElement
            .textContent
            .trim()
        );

    });

    let size = "Regular";

    const selectedSize =
    document.querySelector(
        'input[name="size"]:checked'
    );

    if(selectedSize){

        size =
        selectedSize.parentElement
        .textContent
        .trim();

    }
    let sugarLevel = "";

if(product.category === "drink"){

    const selectedSugar =
    document.querySelector(
        'input[name="sugar"]:checked'
    );

    if(selectedSugar){

        sugarLevel =
        selectedSugar.value;

    }

}
    const cartItem = {

    id: product.id,

    name: product.name,

    image: product.image,

    size: size,

    sugarLevel: sugarLevel,

    extras: extras,

    quantity: quantity,

    total:
    totalPrice.textContent

};
    let cart = JSON.parse(
    localStorage.getItem("cart")
) || [];

cart.push(cartItem);

localStorage.setItem(
    "cart",
    JSON.stringify(cart)
);
    window.location.href =
    "../pages/cart.html";

});