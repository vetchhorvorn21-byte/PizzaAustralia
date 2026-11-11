const cart =
JSON.parse(
    localStorage.getItem("cart")
) || [];

let grandTotal = 0;

cart.forEach(item => {

    grandTotal += parseFloat(
        item.total.replace("$","")
    );

});

document.getElementById(
    "totalPrice"
).textContent =
"$" + grandTotal.toFixed(2);
document
.getElementById("successBtn")
.addEventListener(
    "click",
    function(){

        window.location.href =
        "../pages/invoice.html";

    }
);