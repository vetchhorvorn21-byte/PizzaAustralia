document
.getElementById("placeOrderBtn")
.addEventListener(
"click",
function(){

    const name =
    document.getElementById(
        "customerName"
    ).value;

    const phone =
    document.getElementById(
        "phone"
    ).value;

    const address =
    document.getElementById(
        "address"
    ).value;

    const payment =
    document.getElementById(
        "paymentMethod"
    ).value;

    const order = {

        customer:name,
        phone:phone,
        address:address,
        payment:payment

    };

    localStorage.setItem(
        "order",
        JSON.stringify(order)
    );

    if(payment === "ABA KHQR"){

        window.location.href =
        "../pages/payment.html";

    }
    else{

        window.location.href =
        "../pages/invoice.html";

    }

});
const cart =
JSON.parse(
localStorage.getItem("cart")
) || [];

let summaryHTML = "";

let grand = 0;

cart.forEach(item => {

    summaryHTML += `

<div class="summary-item">

    <span>
        🍕 ${item.name}
    </span>

    <strong>
        x${item.quantity}
    </strong>

</div>

`;

    grand += parseFloat(
        item.total.replace("$","")
    );

});

summaryHTML += `

<h3 class="total-price">
Total: $${grand.toFixed(2)}
</h3>

`;

document
.getElementById("summaryData")
.innerHTML =
summaryHTML;
