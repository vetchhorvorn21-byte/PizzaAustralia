const cart =
JSON.parse(
    localStorage.getItem("cart")
) || [];

const cartItem =
document.getElementById("cartItem");

if(cart.length === 0){

    cartItem.innerHTML = `

    <div class="cart-card">

        <h2 style="text-align:center;">
            Your Cart Is Empty 🍕
        </h2>

    </div>

    `;

}
else{

    let html = "";

    let grand = 0;

    cart.forEach((item,index)=>{

        html += `

        <div class="cart-card">

            <img src="../images/${item.image}">

            <div class="cart-info">

                <h2>${item.name}</h2>

                <p>🍕 Size: ${item.size}</p>

                <p>📦 Quantity: ${item.quantity}</p>

                <p>💰 Price: ${item.total}</p>

                <p class="cart-desc">
                    Freshly prepared with premium ingredients
                    and served hot & delicious.
                </p>


                <button
                    onclick="removeItem(${index})"
                    class="delete-btn">
                        Delete Food
                </button>

            </div>

        </div>

        `;

        grand += parseFloat(
            item.total.replace("$","")
        );

    });

    html += `

    <div class="grand-total">

        <h2>
            Total: $${grand.toFixed(2)}
        </h2>

    </div>

    <div class="cart-actions">

        <button
            id="orderMoreBtn"
            onclick="window.location.href='../index.html#menu'"
        >
            Continue Shopping
        </button>

        <button
            id="checkoutBtn"
            onclick="window.location.href='../pages/checkout.html'"
        >
            Checkout
        </button>

    </div>

    `;

    cartItem.innerHTML = html;

}

function removeItem(index){

    let cart =
    JSON.parse(
        localStorage.getItem("cart")
    ) || [];

    cart.splice(index,1);

    localStorage.setItem(
        "cart",
        JSON.stringify(cart)
    );

    location.reload();

}

