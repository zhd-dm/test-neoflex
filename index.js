let headphones = JSON.parse(localStorage.getItem('headphones'));

const cards = document.querySelector('.card-list-not-wireless'); // Main cards

headphones.forEach(item => {
    if (!item.wireless) {
        cards.insertAdjacentHTML('beforeend',
            `<li class="card-item">
            <div class="card-logo">
                <img src="${item.src}" alt="byz" style="width: ${item.width}px; height: ${item.height}px">
            </div>
            <div class="card-footer">
                <div class="card-first-line">
                    <div class="card-title">
                        <span> ${item.title} </span>
                    </div>
                    <div class="card-price">
                        <span> ${item.price} ₽ </span>
                    </div>
                </div>
                <div class="card-last-line">
                    <div class="card-rate">
                        <img src="./img/svg/rate.svg" alt="rate">
                        <span> ${item.rate} </span>
                    </div>
                    <a href="#!" class="card-add-to-cart" data-id="${item.art}"> Buy </a>
                </div>
            </div>
         </li>`
        );
    }
});

const wirelessCards = document.querySelector('.card-list-wireless'); // Main cards

headphones.forEach(item => {
    if (item.wireless) {
        wirelessCards.insertAdjacentHTML('beforeend',
            `<li class="card-item">
            <div class="card-logo">
                <img src="${item.src}" alt="byz" style="width: ${item.width}px; height: ${item.height}px">
            </div>
            <div class="card-footer">
                <div class="card-first-line">
                    <div class="card-title">
                        <span> ${item.title} </span>
                    </div>
                    <div class="card-price">
                        <span> ${item.price} ₽ </span>
                    </div>
                </div>
                <div class="card-last-line">
                    <div class="card-rate">
                        <img src="./img/svg/rate.svg" alt="rate">
                        <span> ${item.rate} </span>
                    </div>
                    <a href="#!" class="card-add-to-cart" data-id="${item.art}"> Buy </a>
                </div>
            </div>
         </li>`
        );
    }
});

let cart = {};

document.onclick = event => {
    if (event.target.classList.contains('card-add-to-cart')) {
        plusProduct(event.target.dataset.id);
    }
}

const plusProduct = id => {
    if (!cart[id]) {
        cart[id] = 1;
    } else {
        cart[id]++;
    }
    let length = Object.keys(cart).length;
    renderTipCart(length);
}

function renderTipCart(length) {
    let numberTipCart = document.querySelector('.header-tip.cart span').innerHTML;
    numberTipCart = length;
    console.log(numberTipCart)
    localStorage.setItem('Cart', JSON.stringify(cart));
}