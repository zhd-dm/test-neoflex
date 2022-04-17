let length = 0;
for (let key in JSON.parse(localStorage.getItem('Cart'))) {
    length++;
}
document.querySelector('.header-tip.cart').insertAdjacentHTML('afterbegin',
    `<span class="header-tip-number"> ${length} </span>`
);