let length = 0;
for (let key in JSON.parse(localStorage.getItem('Cart'))) {
    length++;
}
document.querySelectorAll('.header-tip')[1].insertAdjacentHTML('afterbegin',
    `<span class="header-tip-number"> ${length} </span>`
);

window.onstorage = () => {
    console.log(JSON.parse(window.localStorage.getItem('Cart')));
};

let cart = {}

renderPageCart();

function renderPageCart() {
    let headphones = JSON.parse(localStorage.getItem('headphones'));

    let productsInCart = JSON.parse(localStorage.getItem('Cart'));
    let cards = document.querySelector('.cart-items-list');

    headphones.forEach(item => {
        // keys - art
        // productsInCart[keys[i]] - count
        keys = Object.keys(productsInCart)
        for (let i = 0, l = keys.length; i < l; i++) {
            if (keys[i] == item.art && productsInCart[keys[i]] > 0) {
                cards.insertAdjacentHTML('afterbegin',
                    `<li class="cart-item">
                        <div class="product-header">
                            <img class="product-image" src="${item.src}" alt="product-image">
                            <div class="product-change-amount">
                                <img class="product-decrease" data-id="${keys[i]}" src="./img/svg/-.svg" alt="product-decrease">
                                <span class="product-amount" id="product-amount"> ${productsInCart[keys[i]]} </span>
                                <img class="product-increase" data-id="${keys[i]}" src="./img/svg/+.svg" alt="product-increase">
                            </div>
                        </div>
                        <div class="product-main">
                            <span class="product-title"> ${item.title} </span>
                            <span class="product-price"> ${item.price} ₽ </span>
                        </div>
                        <div class="product-footer">
                            <img class="product-delete" src="./img/svg/delete.svg" alt="product-delete">
                            <span class="product-total-price"> ${item.price * productsInCart[keys[i]]} ₽ </span>
                        </div>
                    </li>`
                );
            };
            cart[keys[i]] = productsInCart[keys[i]];
        };
    });

    let TOTAL = 0;
    let totalPrice = document.querySelectorAll('.product-total-price');
    for (i = 0; i < totalPrice.length; i++) {
        TOTAL += +totalPrice[i].innerHTML.replace(/[^0-9]/g, "");
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

    let condition = {
        id,
        method: "plus"
    }
    reloadCart(condition);
}

const minusProduct = id => {
    if (cart[id] - 1 == 0) {
        deleteProduct(id);
        return localStorage.setItem('Cart', JSON.stringify(cart));
    }
    cart[id]--;

    let condition = {
        id,
        method: "minus"
    }
    reloadCart(condition);
}

const deleteProduct = id => {
    delete cart[id];

    let condition = {
        id,
        method: "plus"
    }
    reloadCart(condition);
}


function reloadCart(condition) {
    // console.log(item)

    // console.log(document.querySelectorAll('data-id')) 

    // let headphones = JSON.parse(localStorage.getItem('headphones'));

    // let productsInCart = JSON.parse(localStorage.getItem('Cart'));
    // let cards = document.querySelector('.cart-items-list');

    // headphones.forEach(item => {
    //     // keys - art
    //     // productsInCart[keys[i]] - count
    //     keys = Object.keys(productsInCart)
    //     for (let i = 0, l = keys.length; i < l; i++) {
    //         if (keys[i] == item.art && productsInCart[keys[i]] > 0) {

    //         };
    //         cart[keys[i]] = productsInCart[keys[i]];
    //     };
    // });

    // let TOTAL = 0;
    // let totalPrice = document.querySelectorAll('.product-total-price');
    // for (i = 0; i < totalPrice.length; i++) {
    //     TOTAL += +totalPrice[i].innerHTML.replace(/[^0-9]/g, "");
    // }

    // cards.insertAdjacentHTML('afterend',
    //     `<div class="cart-purchase">
    //         <div class="header-total-cart">
    //             <span class="total"> TOTAL </span>
    //             <span class="total"> ${TOTAL} ₽ </span>
    //         </div>
    //         <div class="footer-total-cart">
    //             <span class="checkout"> Go to checkout </span>
    //         </div>
    //     </div>`
    // );
}

document.addEventListener('storage', () => {
    // When local storage changes, dump the list to
    // the console.
    console.log(JSON.parse(localStorage.getItem('Cart')));
});