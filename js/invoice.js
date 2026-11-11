const today = new Date();

const orderDate =
today.toLocaleDateString("en-GB");

const orderTime =
today.toLocaleTimeString([],{
    hour:"2-digit",
    minute:"2-digit"
});

document.getElementById(
    "invoiceDate"
).textContent =
"📅 Date: " + orderDate;

document.getElementById(
    "invoiceTime"
).textContent =
"🕒 Time: " + orderTime;

const cart =
JSON.parse(
localStorage.getItem("cart")
) || [];

const order =
JSON.parse(
localStorage.getItem("order")
);

let itemsHtml = "";

let grandTotal = 0;

cart.forEach(item => {

    itemsHtml += `

    <div class="invoice-item">

        <span>
            🍕 ${item.name}
        </span>

        <strong>
            x${item.quantity}
        </strong>

    </div>

    `;

    grandTotal += parseFloat(
        item.total.replace("$","")
    );

});

document
.getElementById("invoiceData")
.innerHTML = `

<div class="customer-box">

    <p>👤Name: ${order.customer}</p>

    <p>📞Phone: ${order.phone}</p>

    <p>📍Address: ${order.address}</p>

</div>

<hr>
<h3 class="order-title">
    🧾 Order Summary
</h3>
${itemsHtml}

<div class="grand-total">

    <span>TOTAL</span>

    <span>
        $${grandTotal.toFixed(2)}
    </span>

</div>

<p class="payment-method">

    💳 ${order.payment}

</p>

`;

document
.getElementById("finishBtn")
.addEventListener(
"click",
function(){

    localStorage.removeItem("cart");
    localStorage.removeItem("order");

    window.location.href =
    "../pages/success.html";

});