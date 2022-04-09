let length = 0;
for (let key in JSON.parse(localStorage.getItem('Cart'))) {
    length++;
}
document.querySelectorAll('.header-tip')[1].insertAdjacentHTML('afterbegin',
    `<span class="header-tip-number"> ${length} </span>`
);

let cart = {
    // something 
};

renderCart();

document.onclick = event => {
    if (event.target.classList.contains('product-increase')) {
        plusProduct(event.target.dataset.id);
    } else if (event.target.classList.contains('product-decrease')) {
        minusProduct(event.target.dataset.id);
    }
}

const plusProduct = id => {
    localStorage.setItem('Cart', JSON.stringify(cart));
    cart[id]++;
    //renderCart();
}

const minusProduct = id => {
    if (cart[id] - 1 == 0) {
        deleteProduct(id);
        return localStorage.setItem('Cart', JSON.stringify(cart));
    }

    cart[id]--;
    //renderCart();
}

const deleteProduct = id => {
    delete cart[id];
    // renderCart();
}

function renderCart() {
    let headphones = JSON.parse(localStorage.getItem('headphones'));
    let wirelessHeadphones = JSON.parse(localStorage.getItem('wirelessHeadphones'));

    let products = JSON.parse(localStorage.getItem('Cart'));
    let cards = document.querySelector('.cart-items-list');

    headphones.forEach(item => {
        // keys - art
        // products[keys[i]] - count
        keys = Object.keys(products)
        for (var i = 0, l = keys.length; i < l; i++) {
            if (keys[i] == item.art && products[keys[i]] > 0) {
                cards.insertAdjacentHTML('afterbegin',
                    `<li class="cart-item">
                        <div class="product-header">
                            <img class="product-image" src="${item.src}" alt="">
                            <div class="product-change-amount">
                                <img class="product-decrease" data-id="${keys[i]}" src="./img/svg/-.svg" alt="">
                                <span class="product-amount" id="product-amount"> ${products[keys[i]]} </span>
                                <img class="product-increase" data-id="${keys[i]}" src="./img/svg/+.svg" alt="">
                            </div>
                        </div>
                        <div class="product-main">
                            <span class="product-title"> ${item.title} </span>
                            <span class="product-price"> ${item.price} ₽ </span>
                        </div>
                        <div class="product-footer">
                            <img class="product-delete" src="./img/svg/delete.svg" alt="">
                            <span class="product-total-price"> ${item.price * products[keys[i]]} ₽ </span>
                        </div>
                    </li>`
                );
            };
            cart[keys[i]] = products[keys[i]];
        };
    });


    let TOTAL = 0;
    let productsInCart = document.querySelectorAll('.product-total-price');
    //console.log(productsInCart.replace(/[^0-9]/g, ""))
    for (i = 0; i < productsInCart.length; i++) {
        TOTAL += +productsInCart[i].innerHTML.replace(/[^0-9]/g, "");
    }

    cards.insertAdjacentHTML('afterend',
        `<div class="cart-purchase">
            <div class="header-total-cart">
                <span class="total"> TOTAL </span>
                <span class="total"> ${TOTAL} ₽ </span>
            </div>
            <div class="footer-total-cart">
                <span class="checkout"> Go to checkout </span>
            </div>
        </div>`
    );
}